import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';


export default function BusinessListByCategory() {

  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category
    })
    getBusinessList()
  }, []);

  //Use to get businessList by category
  const getBusinessList = async () => {
    setBusinessList([]);

    const q = query(collection(db, 'BusinessList'), where("category", '==', category));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      setBusinessList(prev => [...prev, doc.data()]);
    })
  }

  return (
    <View>
      {businessList?.length > 0 ? <FlatList
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessListCard
            business={item}
            key={index}
          />
        )}
      /> :
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-bold',
          color:Colors.GRAY,
          textAlign:'center',
          marginTop:'50%'
        }}>
          Not Business Found
        </Text>}
    </View>
  )
}