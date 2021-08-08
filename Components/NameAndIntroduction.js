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

export default function NameAndIntroduction( {navigation} ) {
    const [name, setName] = useState('')
    const [introduction, setIntroduction] = useState('')
    const {value, setValue} = useContext(UserContext)

    async function handlePress () {
        navigation.navigate('Goal')
        usersRef.doc(value).get().then( res => {
            console.log(res)
            usersRef.doc(value).update({
                name,
                introduction,
            })
        })

    }

        return <View style={styles.container}>
            <Text style={styles.name} >Enter your first name</Text>
            <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} placeholder="Your name" value={name} onChangeText={setName} />
            <Text style={styles.name} >Please introduce yourself to your accountability peer</Text>
            <TextInput style={styles.multilineInput} multiline={true} autoCapitalize="none" autoCorrect={false} placeholder="Let your partner know a little about yourself" value={introduction} onChangeText={setIntroduction} />
            <Button style={styles.button} onPress={handlePress} title="Next" />
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
    name: {
        fontWeight: 'bold',
        marginBottom: 10,
    }
})