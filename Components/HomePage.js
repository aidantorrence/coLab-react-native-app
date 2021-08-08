import React, { useState, useContext } from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { UserContext } from '../UserContext'
import * as firebase from 'firebase'
import 'firebase/firestore'

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
const usersRef = db.collection('users')


export default function HomePage( {navigation} ) {
    const [goal, setGoal] = useState('')
    const {value, setValue} = useContext(UserContext)

    async function handlePress () {
            usersRef.doc(value).update({
                goal,
            })
    }

        return <View>
            <View style={styles.middle}>
                <Text style={styles.goal} >What is your #1 goal to accomplish this week? </Text>
            </View>
        </View>
}




const styles = StyleSheet.create({
    middle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        margin: 20,
        borderRadius: 15,
        height: 100,
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
    button: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
    },
    goal: {
        fontWeight: 'bold',
        marginBottom: 10,
    }
})