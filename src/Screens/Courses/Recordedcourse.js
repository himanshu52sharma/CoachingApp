
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Recordedcourse = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }
        }
      />
          <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>

    </View>
    <ScrollView showsVerticalScrollIndicator = {false}>
   
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse1.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>UP B.ED 2023 ACHARYA VOD BATCH</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'75%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>UP B.ED 2023 ACHARYA VOD BATCH FEATURS: RECORDED CLASSES BASED ON NEW PATTERN CLASS PDFs DAILY ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse2.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>BSF & ITBP HC/ASI 2022-23
                VIKRANT VOD BATCH</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'75%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>BSF & ITBP HC/ASI 2022-23 VIKRANT VOD BATCH LIVE+ RECORDED CLASSES CLASS PDF CURRENT AFFAIR ZOOM DOUBT ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse3.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>RPF CONSTABLE 2023 VOD RUDRA BATCH</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>RPF CONSTABLE 2023 VOD RUDRA BATCH FEATURES: RECORDED CLASSES PDF NOTES PRACTICE QUESTIONS EXPERT ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse4.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>RPF SI 2023 VOD RUDRA BATCH</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>RPF SI 2023 VOD RUDRA BATCH FEATURS: RECORDED CLASSES PDF NOTES PRACTICE QUESTIONS EXPERT FACULTIES USE CODE..</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse5.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>HARYANA PGT (POLITICAL SCIENCE) VOD UMANG BATCH</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>1. 100 HOURS RECORDED VIDEO CLASSES 2. CLASS PDFs 3.QUIZZES 4.STRUTURED STUDY PLAN 5.ZOOM DOUBT SESSION US...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse6.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>UPTGT/UP LT GRADE SST VOD BATCH BY SUNNY SIR</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'77%',marginLeft:20}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>Recorded Lectures PDF (Class notes  &  Hand Written) Imp. Question Booklets   Zoom Session RECORDED LECTURE ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
    <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/recordedcourse7.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>UPTGT/UP LT GRADE MATHS VOD BATCH BY TAHIR SIR</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>Recorded Lectures PDF (Class notes  &  Hand Written) Imp. Question Booklets   Zoom Session RECORDED LECTURE ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View>
 
    
</ScrollView>

  </View>
  )
}

export default Recordedcourse

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
      color: '#111111',
      fontSize: 20,
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
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginLeft: 17,
        borderRadius: 10,
        width: '90%',
      //   alignSelf: 'center',
        // paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ddd'
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
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
    icon1:{
        color:'#111',
        fontSize:20,
        marginRight:5,
        marginLeft:265
    },
      searchbar: {
        width: '100%',
        backgroundColor: 'f8f8f8',
        borderRadius: 10,
        // top:-5,
        fontSize:10,
        paddingBottom:150,
        flex:1,
        paddingHorizontal: 15,
        // marginTop: 10,
        fontSize: 16,
        alignSelf: 'center',
        fontWeight:"bold",
        color:"#111",
        width:"90%"
    },

  });