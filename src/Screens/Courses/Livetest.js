import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Livetest = ({ navigation }) => {
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
    <ScrollView showsVerticalScrollIndicator = {false}>

    <View style={{alignItems:'center',backgroundColor:'#fae68c'}}>
      <View style={{backgroundColor:'#fff',borderRadius:50,width:55,height:55,alignItems:'center',justifyContent:'center'}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3664/3664009.png'}} style={{width:45,height:45,marginLeft:0,marginTop:0}}/>
      </View>
        <Text style={{fontSize:16,fontWeight:"500",color:"#4b0082"}}>Participate in Our Live Test</Text>
        <Text style={{fontSize:14,color:"#444",marginTop:7,marginLeft:0}}>Live-tests we provide, are specificially designed to meet </Text>
        <Text style={{fontSize:14,color:"#444",marginBottom:7,marginLeft:0}}>today's comptetive examinations critereia.</Text>

        
        {/* <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#dddddd" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search here.." placeholderTextColor = "#cccccc "/>
  </View> */}
  {/* <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={{backgroundColor:"#b8860b",paddingVertical:4,borderRadius:5,alignItems:'center',width:170,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:13,color:'#111',fontWeight:'bold'}}>ALL QUIZZES</Text>
                      </View>
                      <View style={{backgroundColor:"#b8860b",paddingVertical:4,borderRadius:5,alignItems:'center',width:170,marginTop:5}}>
                         <Text style={{marginLeft:0,fontSize:13,color:'#111',fontWeight:'bold'}}>ALL SUBJECTS</Text>
                      </View>
    </View> */}
    </View>
    {/* <View style={{flexDirection:'row',marginTop:15,alignItems:'center'}}>
    <FontAwesome name="calendar" size={16} color="#b8860b" style={{marginHorizontal:5,marginTop:0}}/>
        <Text style={{color:"#b8860b",fontSize:16}}>14 Mar 2023</Text>
    </View>  */}
      <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>
          <View style={[styles.dropdownview1]}> 
      <View style={{marginLeft:10,width:"65%"}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              <Text style={{fontSize:13,color:"#006400"}}> LIVE ON: 03/18/2023 8 a.m. </Text>
              <FontAwesome name="bell" size={14} color="#006400" style={{marginHorizontal:0,marginTop:0}}/>
              </View>
              <View style={{marginLeft:0,}}>
                    <Text style={{color:"#111",fontSize:14,fontWeight:'bold',marginTop:5}}>DELHI POLICE CONSTABLE 2023 LIVE TEST-7</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <MaterialCommunityIcons name="clock-time-nine-outline" size={12} color="#666" style={{marginHorizontal:5,marginTop:0}}/>
                    <Text style={{fontSize:12,color:'#888'}}>04 Mar, 8 a.m. to 19 Mar, 11:59 p.m.</Text>
                    </View>
              </View>
              </View> 
              <View style={{backgroundColor:"#b8860b",borderRadius:5,alignItems:'center',width:95,height:30,flexDirection:'row',alignSelf:'center',marginLeft:0}}>
                         <Text style={{marginLeft:2,fontSize:12,color:'#fff',}}>Attempt Now</Text>
                         <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#fff',marginLeft:5}}>
                         <AntDesign name="right" size={10} color="#b8860b" style={{}}/>
                         </View>
                      </View>
          </View>

          <View style={{marginTop:30}}></View>       
        </ScrollView>


  </View>
  )}

export default Livetest

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
      paddingTop: 5,
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
        // alignItems: 'center',
        // marginLeft: 17,
        borderRadius: 10,
        width: '97%',
        height:100,
        alignSelf: 'center',
        paddingVertical: 4,
        marginTop: 10,
        // borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        elevation:1,
        backgroundColor: '#fff',
        // paddingBottom:40
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