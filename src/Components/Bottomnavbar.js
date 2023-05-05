import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';




const Bottomnavbar = ({navigation, page}) => {
  // console.log(page)
  return (
    <View style={[styles.container]}>
      {
        page === 'Mainpage'?
        <View>
        <MaterialCommunityIcons name="home-outline" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
       <Text style={{fontSize:11,color:'#9acd32'}}>Home</Text>
       </View>
       :
       <View>
       <MaterialCommunityIcons name="home-outline" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
       <Text style={{fontSize:11,color:"#111"}}>Home</Text>
       </View>
      }


      {/* {
        page === 'Playlist'?
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Ionicons name="logo-youtube" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Playlist')}/>
       <Text style={{fontSize:11,color:'#9acd32'}}>YouTube</Text>
       <Text style={{fontSize:11,color:'#9acd32'}}>playlist</Text>

       </View>
       :
       <View style={{alignItems:'center',justifyContent:'center'}}>
       <Ionicons name="logo-youtube" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Playlist')}/>
       <Text style={{fontSize:11,color:"#111"}}>YouTube</Text>
       <Text style={{fontSize:11,color:"#111"}}>playlist</Text>
       </View>

      } */}

      {
        page === 'Notificationpage'?
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <MaterialCommunityIcons name="video-wireless-outline" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Notificationpage')}/>
       <Text style={{fontSize:11,color:'#9acd32'}}>My Courses</Text>
       </View>
       :
       <View style={{alignItems:'center',justifyContent:'center'}}>
       <MaterialCommunityIcons name="video-wireless-outline" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Notificationpage')}/>
       <Text style={{fontSize:11,color:"#111"}}>My Courses</Text>
       </View>
      }

      {
        page === 'Downloads'?
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <AntDesign name="download" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Downloads')}/>
       <Text style={{fontSize:11,color:'#9acd32'}}>Downloads</Text>
       </View>
       :
       <View style={{alignItems:'center',justifyContent:'center'}}>
       <AntDesign name="download" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Downloads')}/>
       <Text style={{fontSize:11,color:"#111"}}>Downloads</Text>
       </View>
      }
      {/* {
        page === 'Offers'?
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Offers')} >
              <Image source={require('../../assets/discount.png')} style={{width:25,height:25}}/>
       </TouchableOpacity>

       <Text style={{fontSize:11,color:'#9acd32'}}>Offer</Text>
       </View>
       :
       <View style={{alignItems:'center',justifyContent:'center'}}>
       <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
              <Image source={require('../../assets/discount.png')} style={{width:25,height:25}}/>
       </TouchableOpacity>

       <Text style={{fontSize:11,color:"#111"}}>Offer</Text>
       </View>
      } */}
      

    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#ffffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        borderTopWidth:0,
        paddingVertical:10,
        alignItems:'center',
    },
    icon1:{
        color:'black',
      backgroundColor:'white',

        fontSize:25,
    },
    activeicon1:{
     color:'#9acd32',

      // backgroundColor:'black',
      fontSize:25,
      borderRadius:50,
      padding:0,

    }
})