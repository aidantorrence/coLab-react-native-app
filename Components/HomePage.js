import React, { useState, useContext, useEffect } from 'react'
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





        return <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.headerItem}>
                        <Text style={styles.goal} >What is your #1 goal to accomplish this week? </Text>
                    </View>
                    <View style={styles.headerItem}>
                        <Text style={styles.goal} >What is your #1 goal to accomplish this week? </Text>
                    </View>
                    <View style={styles.headerItem}>
                        <Text style={styles.goal} >What is your #1 goal to accomplish this week? </Text>
                    </View>
                </View>
                <View style={styles.top}>
                    <Text style={styles.topText} >{value.goal} </Text>
                </View>


                <View style={styles.middle}>
                    <Text style={styles.middleText} >Break your goal into smaller pieces. </Text>
                </View>



                <View style={styles.bottom}>
                    <Text style={styles.bottomText} >Waiting to match... </Text>
                </View>


        </View>
}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 15,
        flex: .3,
    },
    headerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        borderRadius: 15,
        flex: 1,
    },
    top: {
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        borderRadius: 15,
        flex: .7,
    },
    middle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        borderRadius: 15,
        flex: .3,
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        borderRadius: 15,
        flex: .9,
    },
    topText: {
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 18,
        textAlign: 'center'
    },
    middleText: {
        fontWeight: 'bold',
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
})