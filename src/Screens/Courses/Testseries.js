import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Testseries = ({ navigation }) => {
  const [type, setType] = useState('Languages');
  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }}/>
          <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>
    </View>
    <View style={{alignItems:'center',backgroundColor:'#fae68c'}}>
        <Text style={{fontSize:18,fontWeight:"bold",color:"#4b0082"}}>Latest Test Series</Text>
        <Text style={{fontSize:16,color:"#444",marginVertical:7}}>Take tests and know your standing in the race</Text>
        <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#dddddd" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search here.." placeholderTextColor = "#cccccc "/>
  </View>
    </View>
    <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity
            onPress={() => setType('Languages')  }
            style={{
              ...styles.btn,
              borderColor: type === 'Languages' ? '#b8860b' : "#f8f8f8",
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: type === 'Languages' ? '#b8860b' : '#444',
              }}>
              {('SSC EXAMS')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Services') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Services' ? '#b8860b' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Services' ? '#b8860b' : '#111',
              }}>
              {('RAILWAY EXAMS')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Galleries') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Galleries' ? '#b8860b' : "#f8f8f8",

            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Galleries' ? '#b8860b' : '#111',
              }}>
              {('STATE EXAMS')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Reviews') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Reviews' ? '#b8860b' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Reviews' ? '#b8860b' : '#111',
              }}>
              {('TEACHING EXAMS')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        { type === 'Languages' && 
            <ScrollView showsVerticalScrollIndicator = {false}>
   
            <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC MTS</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 128 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC CHSL 2022</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 131 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC CGL MAINS</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 122 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC CGL PRELIMS</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 151 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC GD 2022 TEST SERIES</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 196 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ssc_OWMtQNA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Ssc Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SSC STENOGRAPHER</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 22 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={{marginTop:30}}></View>
        
        </ScrollView>
        }
       { type === 'Services' && 
            <ScrollView showsVerticalScrollIndicator = {false}>
   
            <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/railway_lmhbKNX.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Railway Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>RRB GROUP D</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 162 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/railway_lmhbKNX.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Railway Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>NTPC CBT 2</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 194 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
        
        </ScrollView>
        }
        { type === 'Galleries' && 
            <ScrollView showsVerticalScrollIndicator = {false}>
   
            <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/BIHAR_CGL.jpeg"}} style={{width:45,height:45,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>BIHAR CGL TEST SERIES</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 128 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/HSSC_CET_yBtn1VH.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>HSSC CET</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 131 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/UPSSSC_CKgqBa0.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>UPSSSC VDO 2022</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 122 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/UP_LEKHPAL_29iuiA7.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>UP LEKHPAL 2022</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 151 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/ICAR.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>ICAR EXAM</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 196 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/DSSSB.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:"90%"}}>
                    <Text style={{fontSize:12}}>State Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>DSSSB DASS GRADE IV JR. ASST./ LDC</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 54 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={{marginTop:30}}></View>
        
        </ScrollView>
        }
        { type === 'Reviews' && 
            <ScrollView showsVerticalScrollIndicator = {false}>
   
            <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/CTET.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>CTET</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 50 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/UPSSSC_pDTRLPN.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>SUPER TET</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 28 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/kvs_hY56HY5.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>KVS PRT TEST SERIES</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 27 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/DSSSB_mryEECA.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>DSSSB PRT TEST SERIES</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 16 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/MP_TET.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>MPTET</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 23 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{}}>
               <Image source={{uri:"https://testwale.s3.amazonaws.com/media/exam-image/reet.jpg"}} style={{width:50,height:50,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{}}>
                    <Text style={{fontSize:12}}>Teaching Exams</Text>
                    <Text style={{color:"#111",fontSize:15}}>REET</Text>
                      <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Total 51 Mock Tests</Text>
                  </View>
                         <View style={{backgroundColor:"#b8860b",paddingVertical:6,borderRadius:50,alignItems:'center',width:75,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:16,color:'#fff',}}>View</Text>
                      </View>
              </View>
          </View>
          <View style={{marginTop:30}}></View>
        
        </ScrollView>
        }

  </View>
  )}

export default Testseries

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f8f8f8',
    },
    formHead: {
      fontSize: 17,
      color: '#111111',
      marginLeft: 100,
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
      flexDirection: 'row',
      paddingVertical: 15,
      alignItems:'center'
    },
    gohomeicon: {
      marginLeft: 10
    },
    icon3: {
      color: '#b8860b',
      fontSize: 22,
      marginLeft: 15,
    },
    suggestiontext: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#444444'
    },
    suggestionview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10,
      borderRadius: 10,
      width: '90%',
    //   alignSelf: 'center',
      paddingVertical: 10,
    //   top: 10,
      borderColor: 'lightgray',
      zIndex: 100,
      borderWidth: 0,
      backgroundColor: '#ffffff'
    },
    dropdownview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        elevation:5,
        // alignItems: 'center',
        marginVertical: 15,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    dropdownview1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // marginLeft: 17,
        borderRadius: 10,
        // width: '90%',
      //   alignSelf: 'center',
        paddingVertical: 4,
        marginTop: 10,
        // borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: '#9acd32',
        marginTop:50
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        // marginVertical:20
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
    btn: {
        // borderColor: '#99B83C',
        borderBottomWidth: 2,
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',
        // backgroundColor: '#444444',
        alignItems: 'center',
        height: 45,
        // width: 15,
        paddingHorizontal:20
    },
    btnText: {
        fontSize: 15,
        // fontWeight: 'bold',
        
    },
    icon1:{
        color:'#111',
        fontSize:20,
        marginRight:5,
        marginLeft:265
    },
    searchbar: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        top:0,
        fontSize:10,
        paddingVertical:5,
        paddingHorizontal: 5,
        // marginTop: 10,
        fontSize: 14,
      backgroundColor:'#fff',
  
        // alignSelf: 'center',
    },
    searchview:{
      flexDirection:'row',
      // justifyContent:'space-between',
      alignItems:'center',
      borderRadius: 50,
      width:'95%',
      // alignSelf: 'center',
      paddingVertical:0,
      marginTop:15,
    //   borderColor:'lightgray',
      // zIndex:100,
    //   borderWidth:1,
      backgroundColor:'#fff',
      marginLeft:0,
      marginBottom:15
    },

  });