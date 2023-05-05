import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Topnavbar = ({ navigation, page }) => {
const [adata, setAdata] = useState([]);

  const getCategoryData = async () =>{
    // setLoading(true)
       try{
         const response = await fetch(
           "http://coaching.futurevalue.in/api/categorydata"
         );
         const myData = await response.json();
         // console.log("hgduytgdu",myData.Catlist);
         setAdata(myData.data);
        //  setLoading(false)
       }
       catch(error){
         console.log(error);
       }
 };
 useEffect(() => {
  getCategoryData();
},[])
// console.log('adata',adata);
  return (
    
    <View style={[styles.container]}>
     {/* <Icon name="bars" size={24} color="#111111" style={[styles.icon3]}
     onPress={()=>navigation.openDrawer()}
     /> */}
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}
         onPress={()=>navigation.openDrawer()}>
      <Image source={require('../../assets/menulogo.png')} style={{width:25,height:25}}/>
     </TouchableOpacity>

     <TouchableOpacity style={{flexDirection:'row',marginRight:170,alignItems:'center'}}
     onPress={()=>navigation.navigate('SelectCategory',{data:adata})}>
     <Text style={[styles.text]}>SSC</Text>
     <AntDesign name="caretdown" size={10} color="#111" style={{marginLeft:7}}
     onPress={()=>navigation.navigate('SelectCategory')
    } />
     </TouchableOpacity>
     <MaterialIcons name="help-outline" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('Help')
    } />
     {
    //   page === 'Mainpage' &&
    //   <MaterialIcons name="notifications-none" size={24} color="#99B83C" style={[styles.icon1]}
    //  onPress={()=>navigation.navigate('All_chats')
    // } />
     }

     {/* {
       page === 'My_Userprofile' &&
     <MaterialIcons name="notifications-none" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('All_chats')
    } />
     } */}
    </View>
    
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       paddingVertical:5,
       position:'absolute',
       marginTop:10,
       zIndex:100,
       backgroundColor:'#f8f8f8'
    },
logo2:{
    height:30,
    resizeMode:'contain',
    width:100,
},
icon1:{
    color:'#111111',
    fontSize:30,
    marginRight:25,
},
icon3:{
  color:'#111111',
  fontSize:30,
  marginLeft:15,
},
icon2:{
  color:'white',
  fontSize:25,
  marginRight:5,
},
text:{
  color:'#111111',
  fontSize:14,
  fontWeight:'800'
}
})