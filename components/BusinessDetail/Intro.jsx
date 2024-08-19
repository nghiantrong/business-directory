import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

export default function Intro({ business }) {

    const router = useRouter();

    const { user } = useUser();

    const onDelete = () => {
        Alert.alert('Do you want to delete?',
            'Do you want to delete this business?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => deleteBusiness()
            },
        ])
    }

    const deleteBusiness = async () => {
        console.log('Delete Business');
        await deleteDoc(doc(db, 'BusinessList', business?.id))
        router.back();
        ToastAndroid.show('Business Deleted!', ToastAndroid.LONG)
    }

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
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#fff',
                padding: 20,
                marginTop: -20,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                justifyContent: 'space-between',
            }}>
                <View style={{
                    padding: 20,
                    marginTop: -20,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25
                }}>
                    <Text style={{
                        fontSize: 26,
                        fontFamily: 'outfit-bold'
                    }}>{business?.name}</Text>

                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 18
                    }}>{business?.address}</Text>

                </View>
                {user?.primaryEmailAddress?.emailAddress == business?.userEmail
                    && <TouchableOpacity onPress={() => onDelete()}>
                        <Entypo name="trash" size={24} color="red" />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}