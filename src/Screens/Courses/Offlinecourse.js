
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Offlinecourse = ({ navigation }) => {
  const [adata, setAdata] = useState([]);
  const [loading, setLoading] = useState(false)

  const getCategoryData = async () =>{
    setLoading(true)
       try{
         const response = await fetch(
           "http://coaching.futurevalue.in/api/oflinecoursedata"
         );
         const myData = await response.json();
         // console.log("hgduytgdu",myData.Catlist);
         setAdata(myData.data);
         setLoading(false)
       }
       catch(error){
         console.log(error);
       }
 };
 useEffect(() => {
  getCategoryData();
},[])
// console.log('123',adata);
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
    { loading ?
   <ActivityIndicator  size="large" color='#9acd32' />
   :
    <ScrollView showsVerticalScrollIndicator = {false}>
    {
        
        adata.map((item) => {
        return(
          <View style={[styles.dropdownview]}>
          <View style={{flexDirection:'row',}}>
          <Entypo name="share" size={26} color="black" style={[styles.icon1]}
         onPress={() => navigation.navigate('My_Userprofile')}/>
          <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
          </View>
          <View style={{alignSelf:'center'}}>
           <Image source={{uri:`data:image/png;base64,${item.course_image}`}} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
          </View>
          <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
              <View style={{width:'80%'}}>
                  <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>{item.course_name}</Text>
              </View>
              <View>
           <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
          </View>
          </View>
          <View style={{width:'75%',marginLeft:20,marginVertical:10}}>
                  <Text numberOfLines={3} style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>{item.description}</Text>
          </View>
          <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}
              onPress={() => navigation.navigate('Coursedetails',{data:item})} >
           <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
           </TouchableOpacity>
              <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
              <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
              </View>
          </View>
      </View>
      )}
        )}
   
    {/* <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/offlineclass1.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>ARMY AGNIVEER 2023 OFFLINE BATCH (NOIDA) (14 MARCH)</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'75%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>ARMY AGNIVEER 2023 OFFLINE BATCH (NOIDA) (14 MARCH) FEATURES:1. 150 DAYS SPECIAL COURSE 2. HOURS DAILY...</Text>
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
         <Image source={require('../../../assets/offlineclass2.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>UP POLICE CONSTABLE 2023 OFFLINE BATCH (LUCKNOW) (1...</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'75%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>UP POLICE CONSTABLE 2023 OFFLINE BATCH (LUCKNOW) (13 MARCH)  FEATURES: 1. 150 DAYS SPECIAL COURSE 2...</Text>
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
         <Image source={require('../../../assets/offlineclass3.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>UPSI 2023 OFFLINE BATCH (NOIDA) (13 MARCH)</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>UPSI 2023 OFFLINE BATCH (NOIDA) (13 MARCH) FEATURES:1.150 DAYS SPECIAL COURSE 2. HOURS DAILY CLASSES 3. ...</Text>
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
         <Image source={require('../../../assets/offlineclass4.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC 2023 FOUNDATION OFFLINE BATCH(CGL, CHSL, CPO, MTS ...</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC 2023 FOUNDATION OFFLINE BATCH (CGL, CHSL, CPO, MTS EXAMS) (LUCKNOW) (13 MARCH) FEATURES:1. 15...</Text>
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
         <Image source={require('../../../assets/offlineclass5.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>DELHI POLICE CONSTABLE 2023 OFFLINE BATCH (NOIDA)(13 ...</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20,marginVertical:10}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>DELHI POLICE CONSTABLE 2023 OFFLINE BATCH (NOIDA) (13 MARCH) FEATURES:1. 150 DAYS SPECIAL COURSE 2. HOURS</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View> */}
    {/* <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/offlineclass6.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>ARMY AGNIVEER 2023 OFFLINE BATCH (NOIDA) (14 MARCH)</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>UP POLICE CONSTABLE 2023 OFFLINE BATCH (LUCKNOW) (13 MARCH)  FEATURES: 1. 150 DAYS SPECIAL COURSE 2...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View> */}
    {/* <View style={[styles.dropdownview]}>
        <View style={{flexDirection:'row',}}>
        <Entypo name="share" size={26} color="black" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
        <Text style={{marginLeft:0,fontSize:15,color:'#444',fontWeight:'bold'}}>Share</Text>
        </View>
        <View style={{alignSelf:'center'}}>
         <Image source={require('../../../assets/offlineclass7.jpg')} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>SSC 2023 FOUNDATION OFFLINE BATCH(CGL, CHSL, CPO, MTS ...</Text>
            </View>
            <View>
         <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
        </View>
        </View>
        <View style={{width:'78%',marginLeft:20}}>
                <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>SSC 2023 FOUNDATION OFFLINE BATCH (CGL, CHSL, CPO, MTS EXAMS) (MUKHERJEE NAGAR) (14 MARCH) ...</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:25,borderRadius:7,marginVertical:10}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>View Details</Text>
            </View>
            <View style={{backgroundColor:"#111",marginRight:10,paddingVertical:7,paddingHorizontal:27,borderRadius:7}}>
            <Text style={{marginLeft:0,fontSize:11,color:'#fff',fontWeight:'bold'}}>Buy Course</Text>
            </View>
        </View>
    </View> */}
 
    
</ScrollView>
}
  </View>
  )
}

export default Offlinecourse

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