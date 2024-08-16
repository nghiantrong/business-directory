import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './../../constants/Colors'
import Feather from '@expo/vector-icons/Feather'
import Category from '../../components/Home/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

export default function explore() {
  
  const [businessList, setBusinessList] = useState([]);
  
  const GetBusinessByCategory=async(category)=>{
    setBusinessList([])
    const q= query(collection(db,'BusinessList'),where('category','==',category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }
  
  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>
        Explore More
      </Text>

      {/* SearchBar */}
      <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:10,
                marginVertical:10,
                marginTop:15,
                borderRadius:8,
                borderWidth:1,
                borderColor:Colors.PRIMARY
            }}>
                <Feather name="search" size={24} color={Colors.PRIMARY} />
                <TextInput placeholder='Search...'
                    style={{
                        fontFamily:'outfit',
                        fontSize:17
                    }}
                />
            </View>

      {/* Category */}
      <Category 
        explore={true}
        onCategorySelect={(category)=>GetBusinessByCategory(category)}
      />


      {/* Business List */}
      <ExploreBusinessList businessList={businessList}/>

    </View>
  )
}