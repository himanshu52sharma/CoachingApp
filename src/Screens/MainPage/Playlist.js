import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"

const Playlist = ({ navigation }) => {
  const [type, setType] = useState('Languages');

  return (
    <View style={[styles.containerFull]}>
    <StatusBar/>
    <Topnavbar navigation={navigation}/>
    <Bottomnavbar navigation={navigation} page={"Playlist"}/>
    <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/>
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
              {('Exampur')}
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
              {('SSC Exams By Exampur')}
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
              {('Exampur Defence Warriors')}
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
              {('IAS PCS By Exampur')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>


   { type === 'Languages' && 
   <ScrollView>
        <View style={{alignItems:"center"}}>
    <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image1.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image2.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image3.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image4.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image5.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',marginBottom:30,elevation:1}}>
    <Image source={require('../../../assets/image6.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>

    

    </View>
    </ScrollView>}
    { type === 'Services' && 
   <ScrollView>
        <View style={{alignItems:"center",}}>
    <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image5.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image3.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7,elevation:1}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image2.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
     
    </View>
    </ScrollView>}
    { type === 'Galleries' && 
   <ScrollView>
        <View style={{alignItems:"center"}}>
    <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image4.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image6.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image1.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image5.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image3.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',marginBottom:30,elevation:1}}>
    <Image source={require('../../../assets/image2.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>

    

    </View>
    </ScrollView>}
    { type === 'Reviews' && 
   <ScrollView>
        <View style={{alignItems:"center"}}>
    <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image5.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
      <View style={{backgroundColor:'#fff', width:'95%', borderRadius:10,marginVertical:5,flexDirection:'row',elevation:1}}>
    <Image source={require('../../../assets/image3.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold',marginBottom:30,marginTop:7}}>UPSC EPFO 2023</Text>
      <Text style={{marginLeft:10,fontSize:14,color:'#99B83C',fontWeight:'bold'}}>Exampur</Text>
      </View>
      </View>
   
  
    

    

    </View>
    </ScrollView>}
    
  </View>
  )
}

export default Playlist
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
    image: { height:210, width:'100%'},
    cimage: { height:90, width:140,marginLeft:5,borderRadius:7,marginVertical:5},
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