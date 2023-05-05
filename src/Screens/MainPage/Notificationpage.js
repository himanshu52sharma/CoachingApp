import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'

const Notificationpage = ({ navigation }) => {
  return (
    <View style={[styles.containerFull]}>
      <StatusBar/>
      <Topnavbar navigation={navigation}/>
      <Bottomnavbar navigation={navigation} page={"Notificationpage"}/>
     <View>
        <Text style={{fontSize:12 ,marginLeft:10,marginTop:10,fontSize:20,color:'#111',fontWeight:'bold'}}>My Courses</Text>
     </View>
     <View style={{marginTop:80,alignItems:'center'}}>
    <Image source={require('../../../assets/nodata.jpg')} style={{width:300,height:200}}/>

     </View>
      
    </View>
  )
}

export default Notificationpage

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
  }
});