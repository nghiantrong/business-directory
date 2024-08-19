import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessListCard from '../../components/Explore/BusinessListCard'
import { useNavigation } from 'expo-router';

export default function MyBusiness() {

  const navigation = useNavigation();

  const { user } = useUser();

  const [businessList, setBusinessList] = useState([]);

  const [loading,setLoading] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'My Business',
      headerShown: true
    })
    user && GetUserBusiness()
  }, [user])


  //use to get business list by userEmail
  const GetUserBusiness = async () => {
    setBusinessList([]);
    setLoading(true);
    const q = query(collection(db, 'BusinessList'),
      where('userEmail', '==', user?.primaryEmailAddress?.emailAddress));

    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList(prev => [...prev, { id: doc.id, ...doc.data() }])
    })
    setLoading(false)
  }

  return (
    <View style={{
      padding: 20
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30
      }}>My Business</Text>

      <FlatList
        data={businessList}
        onRefresh={GetUserBusiness}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <BusinessListCard business={item}
            key={index} />
        )}
      />
    </View>
  )
}