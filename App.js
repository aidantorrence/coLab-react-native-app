// @refresh reset

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcyoSzVe1dYiRd1R5Qi4PcEoCPBolIx1w",
  authDomain: "accountabilitychat.firebaseapp.com",
  projectId: "accountabilitychat",
  storageBucket: "accountabilitychat.appspot.com",
  messagingSenderId: "244358230230",
  appId: "1:244358230230:web:1091a330a8f84a934f9977",
  measurementId: "G-H5T20N7YRP"
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


const db = firebase.firestore()
const messagesRef = db.collection('messages')

export default function App() {
    const [name, setName] = useState('')
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                {/* <Button onPress={handlePress} title="Enter the chat" /> */}
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})