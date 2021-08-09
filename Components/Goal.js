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


export default function Goal( {navigation} ) {
    const [goal, setGoal] = useState('')
    const {value, setValue} = useContext(UserContext)

    async function handlePress () {
        navigation.navigate('HomePage')
        setValue({...value, goal, goalHistory: []})
        usersRef.doc(value.email).update({
            goal,
            goalHistory: [],
        })
    }

        return <View style={styles.container}>
            <Text style={styles.goal} >What is your #1 goal to accomplish this week? </Text>
            <TextInput style={styles.multilineInput} multiline={true} autoCapitalize="none" autoCorrect={false} placeholder="Make it specific and measurable" value={goal} onChangeText={setGoal} />
            <Button style={styles.button} onPress={handlePress} title="Finish" />
        </View>
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
        textAlign: 'center',
    },
    multilineInput: {
        height: 100,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
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