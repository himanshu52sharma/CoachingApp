import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';


const Freecourses = ({ navigation }) => {
  const [type, setType] = useState('Languages');

  return (
    <View style={[styles.container]}>

    {/* <StatusBar/> */}
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }
        }
      />
          <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>

    </View>
    {/* <Topnavbar navigation={navigation}/> */}
    {/* <Bottomnavbar navigation={navigation} page={"Mainpage"}/> */}
    {/* <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/> */}
    <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity
            onPress={() => setType('Languages')  }
            style={{
              ...styles.btn,
              borderColor: type === 'Languages' ? '#99B83C' : "#f8f8f8",
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: type === 'Languages' ? '#99B83C' : '#444',
              }}>
              {('UP SPECIAL')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Services') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Services' ? '#99B83C' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Services' ? '#99B83C' : '#111',
              }}>
              {('IAS/PCS')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Galleries') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Galleries' ? '#99B83C' : "#f8f8f8",

            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Galleries' ? '#99B83C' : '#111',
              }}>
              {('NEET EXAMS')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Reviews') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Reviews' ? '#99B83C' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Reviews' ? '#99B83C' : '#111',
              }}>
              {('ALL EXAMS')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>


   { type === 'Languages' && 
   <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={{uri:"https://i.ytimg.com/vi/EaZk-_V0fz8/maxresdefault.jpg"}} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH FEATURES:1. LIVE CLASSES 2. CLASS PDFs 3. DAILY PRACTICE PAPER 4. MOCK TEST</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           {/* <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View> */}
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   {/* <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc2.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC MTS/HAVALDAR 2022-23 PRATIGYA BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC MTS/HAVALDAR 2022-23 PRATIGYA BATCH Live Classes CLASS PSFs DAILY PRACTICE PAPER MOCK TEST SECTIONAL..</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc3.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>IB MTS/SECURITY ASSISTANT 2033-23 PRATIGYA BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>IB MTS/SECURITY ASSISTANT 2022-23 PRATIGYA BATCH Live Classes CLASS PDFs DAILY PRACTICE PAPER MOCK TEST ...</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc4.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC 2023 (PRE + MAINS) FOUNDATION (CGL, CHSL, CP...</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC 2023(PRE + MAINS) FOUNDATION (CGL, CHSL, CPO, STENO) SELECTION BATCH FEATURES:LIVE CLASSES PDF...</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc5.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>ABHINANDAN 5.0 MATHS SPECIAL BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>ABHINANDAN 5.0 MATHS SPECIAL BATCH FEATURES:1. 250+ HOURS LIVE CLASSES 2. 250+ CLASS PDFs 3. PRACTICE QUESTION...</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc6.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SHIKHAR REASONING SPECIAL BATCH BY PULKIT SIR (SSC, ...</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SHIKHAR REASONING SPECIAL BATCH BY PULKIT SIR (SSC, POLICE, UP SPECIAL EXAMS) LIVE CLASSES PDF & DPP 5000+ ...</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={require('../../../assets/ssc7.jpg')} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC CHSL 2022 VIJAYPATH BATCH (BILINGUAL)</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC CHSL 2022 VIJAYPATH BATCH (BILINGUAL) FEATURES:1.LIVE CLASSES 2. CLASS PDFs 3. DAILY PRACTICE PAPER 4. ...</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View> */}

   {/* <View style = {{marginTop:70}}></View> */}
</ScrollView>
    }
    { type === 'Services' && 
  <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={{uri:"https://i.ytimg.com/vi/EaZk-_V0fz8/maxresdefault.jpg"}} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH FEATURES:1. LIVE CLASSES 2. CLASS PDFs 3. DAILY PRACTICE PAPER 4. MOCK TEST</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           {/* <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View> */}
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>

  {/* <View style = {{marginTop:70}}></View> */}
</ScrollView>
   }
    { type === 'Galleries' && 
   <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={{uri:"https://i.ytimg.com/vi/aSdeiwtpo5s/maxresdefault.jpg"}} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH FEATURES:1. LIVE CLASSES 2. CLASS PDFs 3. DAILY PRACTICE PAPER 4. MOCK TEST</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           {/* <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View> */}
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
 
   {/* <View style = {{marginTop:70}}></View> */}
 </ScrollView>
    }
    { type === 'Reviews' && 
   <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={{uri:"https://i0.wp.com/ytimg.googleusercontent.com/vi/uD7yywvyhks/hqdefault.jpg?resize=60,60"}} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC PHASE XI 2023 UDDESHY BATCH FEATURES:1. LIVE CLASSES 2. CLASS PDFs 3. DAILY PRACTICE PAPER 4. MOCK TEST</Text>
       </View>
       <View style={{alignItems:'flex-end'}}>
           <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </View>
           {/* <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
           </View> */}
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
 
   {/* <View style = {{marginTop:70}}></View> */}
 </ScrollView>
    }
    
  </View>
  )}

export default Freecourses
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
    image: { height:210, width:'100%'},
    cimage: { height:90, width:140,marginLeft:5,borderRadius:7,marginVertical:5},
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
      },
    containerFull:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f8f8',
        paddingVertical:50,
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginVertical:20
      },
      dropdownview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        elevation:5,
        // alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        // paddingVertical: 14,
        marginTop: 0,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      btn: {
        // borderColor: '#99B83C',
        borderBottomWidth: 2,
        // borderRadius: 10,
        marginLeft: 10,
        marginRight: 20,
        justifyContent: 'center',
        // backgroundColor: '#444444',
        alignItems: 'center',
        height: 45,
        // width: 15,
      },
      btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        
      },
    logo1:{
        height:70,
        resizeMode:'contain',
        marginBottom:20,
        backgroundColor:'black',
    },
    hr80:{
        width:'80%',
        height:1,
        backgroundColor:'gray',
        marginVertical:20
    },
    formHead:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
     },
     formInput:{
         width:'80%',
         backgroundColor:'white',
         borderRadius:10,
         marginVertical:10,
         paddingHorizontal:15,
         paddingVertical:10,
         fontSize:18
     },
     cardStyle1: {
        width: CARD_WIDTH,
        // height: CARD_HEIGHT,
        // alignItems:'flex-start',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 15,
        marginBottom:25,
        borderRadius: 10
      },
      elevation: {  
        shadowOffset: {width: -2, height: 7},  
        shadowColor: '#fafafa',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        elevation: 2,     
      },
     formTextLinkRight:{
        color:'grey',
        fontSize:15,
        textAlign:'right',
        width:'80%',
        marginVertical:10,
    },
    hr80:{
        width:'80%',
        height:1,
        backgroundColor:'gray',
        marginVertical:20
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    gohomeicon: {
        marginLeft: 10
      },
    formbtn:{
        width:'80%',
        backgroundColor:'black',
        borderRadius:10,
        borderColor:'white',
        borderWidth:1,
        color:'white',
        textAlign:'center',
        marginVertical:10,
        paddingVertical:10,
        fontSize:25
    },
    formTextLinkCenter:{
        color:'grey',
        fontSize:16,
    },
    topview: {
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems:'center'
      },
    formHead2:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      fontWeight:'bold'
  },
    goback:{
        flexDirection:'row',
        position:'absolute',
        top:50,
        left:20,
        alignItems:'center'
    },
    c1:{
       width:'100%',
       height:'100%',
       alignItems:'center',
    },
    Notificationbar:{
      width:'95%',
      height:50,
      backgroundColor:'#dddddd',
      marginTop: 10,
    }
  });