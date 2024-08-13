import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';

export default function Intro({ business }) {

    const router = useRouter();

    return (
        <View>
            <View style={{
                position: 'absolute',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 15
            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle" size={40} color="white" />
                </TouchableOpacity>
                <Fontisto name="heart-alt" size={32} color="white" />
            </View>

            <Image source={{ uri: business?.imageUrl }}
                style={{
                    width: '100%',
                    height: 340
                }}
            />

            <View style={{
                padding:20,
                marginTop:-20,
                backgroundColor:'#fff',
                borderTopLeftRadius:25,
                borderTopRightRadius:25
            }}>
                <Text style={{
                    fontSize:26,
                    fontFamily:'outfit-bold'
                }}>{business?.name}</Text>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:18
                }}>{business?.address}</Text>

            </View>
        </View>
    )
}