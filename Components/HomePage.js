import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Button, Image, TouchableOpacity } from 'react-native'
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


function getDate(offset) {
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - offset);
    return yesterday.toLocaleDateString()
}

const goalDates = [6, 5, 4, 3, 2, 1, 0].map(item => getDate(item))

export default function HomePage( {navigation} ) {
    const [goal, setGoal] = useState('')
    const {value, setValue} = useContext(UserContext)

    const date = new Date().toLocaleDateString()


    function handlePress (date) {
        usersRef.doc(value.email).get().then( res => {
            if (res.data().goalHistory.find(item => item === date)) {
                setValue({...value, goalHistory: value.goalHistory.filter(item => item !== date)})
                usersRef.doc(value.email).update({
                    goalHistory: res.data().goalHistory.filter(item => item !== date)
                })
            } else {
                setValue({...value, goalHistory: [...value.goalHistory, date]})
                usersRef.doc(value.email).update({
                    goalHistory: [...res.data().goalHistory, date],
                })
            }
        })
    }

    return <View style={styles.wrapper}>
        <Text style={styles.aboveTopText} >Weekly Goal </Text>
        <View style={styles.top}>
            <Text style={styles.topText} >{value.goal} </Text>
            <View style={styles.topView}>
                {goalDates.map( (item, idx) => <View key={idx} style={styles.topViews} >
                    <TouchableOpacity style={styles.touchable} onPress={(() => handlePress(item))} >
                    </TouchableOpacity >
                </View>
                )}
            </View>
        </View>


        <View style={styles.middle}>
            <Text style={styles.middleText} >Break your goal into smaller pieces. </Text>
        </View>



        <Text style={styles.aboveBottomText} >Partner's Weekly Goal </Text>
        <View style={styles.bottom}>
            <Text style={styles.bottomText} >Waiting to match... </Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.footerItem}>
                <Image source={require('../assets/chat_bubble_outline.png')}></Image>
            </View>
            <View style={styles.footerItem}>
                <Text style={styles.goal} ></Text>
            </View>
            <View style={styles.footerItem}>
                <Text style={styles.goal} > </Text>
            </View>
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
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 15,
        flex: .3,
        flexDirection: 'row',
    },
    footerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        flex: 1,
        height: 90,
        borderRadius: 45,
    },
    top: {
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 15,
        flex: .7,
    },
    topView: {
        marginTop: 70,
        width: 20,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topViews: {
        backgroundColor: '#f1f1f1',
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 2,
    },
    touchable: {
        width: 100,
        height: 100,
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
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        flex: .9,
    },
    aboveTopText: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 14,
        textAlign: 'center'
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
        fontSize: 18,
    },
    aboveBottomText: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 14,
        textAlign: 'center'
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
})