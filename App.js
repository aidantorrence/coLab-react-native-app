// @refresh reset

import React, { useState, useEffect, useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from './Components/LandingPage'
import NameAndIntroduction from './Components/NameAndIntroduction'
import Goal from './Components/Goal'
import HomePage from './Components/HomePage'
import { UserContext } from './UserContext'

const userIDContext = React.createContext()


const Stack = createStackNavigator()

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
const usersRef = db.collection('users')



export default function App() {
    const [value, setValue] = useState('')

    return <UserContext.Provider value={{value, setValue}}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LandingPage" component={LandingPage}/>
            <Stack.Screen name="NameAndIntroduction" component={NameAndIntroduction}/>
            <Stack.Screen name="Goal" component={Goal}/>
            <Stack.Screen name="HomePage" component={HomePage}/>
        </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
        textAlign: 'center',
    },
})