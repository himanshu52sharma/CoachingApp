import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Help = ({ navigation }) => {
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
    <ScrollView>
   
    <View style={[styles.suggestionview]}>
        <View>
      <Text style={[styles.suggestiontext]}>Help</Text>
      </View>
    </View>
    <View style={[styles.dropdownview]}>
        <Text style={{marginLeft:10,fontSize:16,color:'#111',fontWeight:'bold'}}>Select issue</Text>
    </View>
    <View style={[styles.dropdownview1,{marginTop:20}]}>
    <TextInput style={[styles.searchbar]} multiline = {true} placeholder="Write about the problem" placeholderTextColor = "#666"/>
    </View>
    <TouchableOpacity style={[styles.btn1, styles.elevation]}
                     onPress={() => navigation.navigate('Mainpage')}>
                    <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Submit Issue</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.btn1, styles.elevation,{marginTop:30}]}
                     onPress={() => navigation.navigate('Mainpage')}>
                    <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}> Watch App Tutorials</Text>
         </TouchableOpacity>

         <View style={{alignItems:"center",marginTop:7}}>
          <Text style={{ color: '#666666', fontSize: 14, fontWeight: 'bold' }}>Facing problem in Application?</Text>
         </View>
         <View style={{alignItems:"center",marginTop:8,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{ color: '#9acd32', fontSize: 14, fontWeight: 'bold', }}>Call Us </Text>
          <Text style={{ color: '#111', fontSize: 18, fontWeight: 'bold', }}> / </Text>
          <Text style={{ color: '#9acd32', fontSize: 14, fontWeight: 'bold', }}> Email Us</Text>

         </View>
    
</ScrollView>

  </View>
  )
}

export default Help

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 17,
        borderRadius: 10,
        width: '90%',
      //   alignSelf: 'center',
        paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ddd'
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