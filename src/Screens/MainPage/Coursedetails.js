import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Topnavbar from '../../Components/Topnavbar';
import Bottomnavbar from '../../Components/Bottomnavbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation";
import Entypo from 'react-native-vector-icons/Entypo';
import WebView from 'react-native-webview';


const Coursedetails = ({ navigation,route }) => {
    const data = route.params
  const [type, setType] = useState('Languages');

  console.log('himanshu',data);

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


        <View
              style={{
                marginTop: 0,
                width: '100%',
                height: 200,
                alignSelf: 'center',
              }}>
              <WebView
                allowsFullscreenVideo={true}
                mediaPlaybackRequiresUserAction={true}
                allowsInlineMediaPlayback={true}
                javaScriptEnabled={true}
                injectedJavaScript={
                  `document.getElementsByTagName("video")[0].removeAttribute("autoplay"); // this one was the key for me!`
                       }
                domStorageEnabled={true}
                source={{
                  uri: `http://coaching.futurevalue.in/public/dist/videos/${data.data.course_video}`,
                }}
                //   source={{
                //     html: '<iframe width="100%" height="100%" src=`http://coaching.futurevalue.in/public/dist/videos/${data.data.course_video}` frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                //   }}
                style={{width: width * 1, height: 200}}
              />
            </View>
   
   <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview]}>
       <View style={{flexDirection:'row',width:'95%',marginTop:5,alignSelf:'center'}}>
           <View style={{width:'100%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>{data.data.course_name}</Text>
           </View>
       </View>
       <View style={{width:'99%',marginLeft:10,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>Validity : {data.data.days}</Text>
               <View style={{backgroundColor:"#ffd700",marginRight:15,paddingVertical:5,paddingHorizontal:5,borderRadius:0,marginVertical:0}}
              onPress={() => navigation.navigate('Coursedetails')} >
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Demo</Text>
           </View>
       </View>
       <Text style={{marginLeft:10,fontSize:16,color:'#444',fontWeight:'bold'}}>₹ {data.data.course_price}</Text>
       <Text style={{marginLeft:10,fontSize:12,color:'#444',fontWeight:'400',marginVertical:10}}>{data.data.course_name}</Text>
        <View style={{marginTop:30}}>
          {
       data.data.services.map((item) => {
        return(
          <View style={{marginLeft:10,fontSize:12,color:'#444',fontWeight:'400',marginVertical:2}}>
        <Text style={{marginLeft:10,fontSize:12,color:'#444',fontWeight:'bold',marginVertical:0}}>
       {/* <Text style={{fontSize:12,color:'#444',fontWeight:'bold',}}>SSC </Text> */}
       <Text style={{fontSize:12,color:'#444',fontWeight:'400',}}>{item.service}</Text>
       </Text>
       {/* <Text style={{marginLeft:10,fontSize:12,color:'#444',fontWeight:'400',marginVertical:0}}>SSC MTS/HAVALDAR 2022-23 PRATIGYA BATCH</Text> */}
       </View>
      )}
        )}

        </View>   
        
   </View>
   {/* <View style = {{marginTop:70}}></View> */}
   
</ScrollView>
<TouchableOpacity style={[styles.btn1, styles.elevation1]}
                    onPress={() => navigation.navigate('Mainpage')}>
                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Buy course</Text>
                </TouchableOpacity>
    
  </View>
  )}

export default Coursedetails
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
        // elevation:5,
        // alignItems: 'center',
        marginVertical: 15,
        borderRadius: 0,
        width: '100%',
        alignSelf: 'center',
        // paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#f8f8f8'
      },
      btn: {
        // borderColor: '#99B83C',
        borderBottomWidth: 2,
        // borderRadius: 10,
        marginLeft: 10,
        marginRight: 30,
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
      btn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 8,
        backgroundColor: '#9acd32',
        bottom:10
    },
    elevation1: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
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
        paddingTop: 5,
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