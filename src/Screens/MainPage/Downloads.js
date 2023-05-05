import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'

const Downloads = ({ navigation }) => {
  const [type, setType] = useState('Languages');
  return (
    <View style={[styles.containerFull]}>
    <StatusBar/>
    <Topnavbar navigation={navigation}/>
    <Bottomnavbar navigation={navigation} page={"Downloads"}/>
    <Image  source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/>
    <View>
        <Text style={{marginLeft:10,marginTop:10,fontSize:25,color:'#111',fontWeight:'bold'}}>Downloads</Text>
     </View>
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
              {('Videos')}
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
              {('PDF')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        { type === 'Languages' && 
   <View style={{marginTop:80,alignItems:'center'}}>
  <Image source={require('../../../assets/nodata.jpg')} style={{width:300,height:200}}/>
   </View>
      }
       { type === 'Services' && 
   <View style={{marginTop:100,alignItems:'center'}}>
  <Image source={require('../../../assets/nodata.jpg')} style={{width:300,height:200}}/>
   </View>
      }
    
  </View>
  )
}

export default Downloads

const styles = StyleSheet.create({
    containerFull:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f8f8',
        paddingVertical:50,
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
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginVertical:5
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
  });