import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from './../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';

export default function Header() {

    const { user } = useUser();

    return (
        <View style={{
            padding: 20,
            paddingTop: 40,
            backgroundColor: Colors.PRIMARY,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Image source={{ uri: user?.imageUrl }}
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 99
                    }}
                />
                <View>
                    <Text style={{
                        color: '#fff',
                        fontSize: 19,
                    }}>Welcome, </Text>
                    <Text style={{
                        fontSize: 19,
                        fontFamily: 'outfit-medium',
                        color:'#fff'
                    }}>{user?.fullName}</Text>
                </View>
            </View>

            {/*Search bar*/}
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:10,
                marginVertical:10,
                marginTop:15,
                borderRadius:8
            }}>
                <Feather name="search" size={24} color={Colors.PRIMARY} />
                <TextInput placeholder='Search...'
                    style={{
                        fontFamily:'outfit',
                        fontSize:17
                    }}
                />
            </View>
        </View>
    )
}