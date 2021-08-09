import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Button, Image } from 'react-native'
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
                    <Text style={styles.aboveTopText} >Weekly Goal </Text>
                <View style={styles.top}>
                    <Text style={styles.topText} >{value.goal} </Text>
                    <View style={styles.topView}>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
                        <View style={styles.topViews} ></View>
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
        backgroundColor: 'black',
        marginTop: 70,
        width: 20,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topViews: {
        backgroundColor: '#f8f8f8',
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 2,
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