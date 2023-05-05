import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);



      const handleSignup = () => {
        setLoading(true)
       // navigation.navigate('Signup_Enterverificationcode')}
       if (number == '') {
        alert('Please enter your number')
    }
    else if (name == ''){
        alert('Please enter your name')
    }
    else if (password == ''){
        alert('Please enter  password')
    }
    else {
        setLoading(true)
        fetch('http://coaching.futurevalue.in/api/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                mobile:number,
                password:password
            })
        })
            .then(res => res.json()).then(
                data => {
                    // if (data.error === "Invalid Credentials") {
                    //     // alert('Invalid Credentials')
                    //     alert('Invalid Credentials')
                    //     setLoading(false)
                    // }
                    console.log("data",data.otp);
                     if (data.message === "user register successfully") {
                        setLoading(false)
                        alert("OTP Send Successfully!");
                        navigation.navigate
                        ('VerifyOtp',{
                            usernumber:number,
                            userVerificationCode: data.otp
                        })
                }
                else if(data.message === "Mobile Number Already register") {
                    setLoading(false)
                    alert("User Already Exist");
                    // navigation.navigate
                    // ('Verifyotp',{
                    //     usernumber:number,
                    //     userVerificationCode: data.otp
                    // })
            }
              })    
       }}
    return (
        <View>
            <View style={[styles.container]}>
                <View style={[styles.topview]}>
                    <AntDesign name="left" size={24} color="#111" style={[styles.gohomeicon]}
                        onPress={() => {
                            navigation.navigate('Login')
                        }
                        }
                    />
                    <Text style={[styles.formHead]}>Login</Text>
                </View>
                {/* <View style={{ paddingBottom: 100, paddingTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111', borderRadius: 10, }}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>Zylu</Text>
                    <Text style={{ color: 'white', fontSize: 14, top: 4 }}>Login or Signup to book your appointment</Text>
                </View> */}
                <View style={[styles.c1]}>
                    <Image style={[styles.profilepic]} source={require('../../../assets/logo.png')} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20, marginBottom: 40 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#aaaaaa' }}>Welcome To Exampur</Text>
                </View>
                <View style={{ marginTop: -20, marginBottom: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#111' }}>Let,s Register</Text>
                </View>
                {/* <View style={[styles.numberview]}> */}
                {/* <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text> */}
                {/* <View style={[styles.searchview]}> */}
                {/* <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('../../../assets/logo.png')} /> */}
                {/* <Text style={{ fontWeight: 'bold', marginRight: 5 }}>+91</Text> */}
                <TextInput style={[styles.searchbar]} maxLength={30} placeholder="Name"
                    placeholderTextColor={"#111"}
                    onChangeText={(text) => {
                        setName(text)
                    }} />
                <TextInput style={[styles.searchbar]} keyboardType='numeric' maxLength={10} placeholder="Number"
                    onChangeText={(text) => {
                        setNumber(text)
                    }} />
                <TextInput style={[styles.searchbar, { marginBottom: 10 }]} keyboardType='text' secureTextEntry={true} maxLength={10} placeholder="Password"
                    onChangeText={(text) => {
                        setPassword(text)
                    }} />
                {/* <TextInput
                    label="Password"
                    secureTextEntry={passwordVisible}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                /> */}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10 }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        color={'#9acd32'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={{ fontWeight: 'bold' }}>I agree with Terms and Privacy Policy</Text>
                </View>

                {/* </View> */}
                {/* </View> */}
                {/* <TouchableOpacity style={[styles.btn, styles.elevation,{marginBottom:10}]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#1e90ff', fontSize: 20, fontWeight: 'bold' }}>Let's Register</Text>
         </TouchableOpacity> */}
         {
        loading ?
          <ActivityIndicator size="large" color='black'/>
          :
          <TouchableOpacity style={[styles.btn1, styles.elevation]}
                    onPress={() => { checked ?  handleSignup() : alert('You need to accept Terms and Privacy Policy') }}>
                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Register</Text>
         </TouchableOpacity>
           }
                
                <View style={[styles.suggestionview]}>

                    <Text style={[styles.suggestiontext]}>Facing problem in signing in? </Text>
                    <Text style={{ color: '#9acd32', fontWeight: 'bold' }}> Call us</Text>



                </View>





            </View>

        </View>

    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    container1: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 10,
    },
    inputFlex: {
        alignSelf: 'stretch',
        width: '80%',
        padding: 0,
        backgroundColor: '#ddd'
    },
    visibilityBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 21,
    },
    formHead: {
        fontSize: 17,
        color: '#ffffff',
        marginLeft: 125,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txt1: {
        fontSize: 20,
        color: '#111111',
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    topview: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 15
    },
    gohomeicon: {
        marginLeft: 10
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    suggestiontext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#888888'
    },
    suggestionview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // borderRadius: 10,
        // width: '100%',
        alignSelf: 'center',
        paddingVertical: 10,
        // top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ffffff'
    },
    c1: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        //   height:1,
        //   backgroundColor:'gray',
        //   marginVertical:20
    },
    profilepic: {
        width: 150,
        height: 150,
        borderColor: '#ffffff',
        borderWidth: 5,
        backgroundColor: '#111111',
        borderRadius: 10,
        marginTop: -50,
    },
    searchbar: {
        height: 44,
        margin: 12,
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#f1f1f1',
    },
    searchview: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        // paddingVertical: 10,
        // top: 0,
        // borderColor: 'lightgray',
        // zIndex: 100,
        // borderWidth: 1,
        backgroundColor: '#ddd'
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    numberview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        // flex:1,
        // borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e90ff",
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 13,
        backgroundColor: '#ffffff',
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 12,
        backgroundColor: '#9acd32'
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
});