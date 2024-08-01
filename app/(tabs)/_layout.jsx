import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='home' 
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color})=><FontAwesome name="home" 
          size={24} color={color} />
        }}
        />
        <Tabs.Screen name='explore' 
        options={{
          tabBarLabel:'Explore',
          tabBarIcon:({color})=><Ionicons name="search" 
          size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile' 
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><Ionicons name="people-circle-outline" 
          size={24} color={color} />
        }}/>

    </Tabs>
  )
}