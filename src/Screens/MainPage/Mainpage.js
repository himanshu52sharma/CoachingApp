import { StyleSheet, Text, View, StatusBar, AsyncStorage, Dimensions, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import Bottomnavbar from '../../Components/Bottomnavbar';
import Topnavbar from '../../Components/Topnavbar';
// import FollowersRandomPost from '../../Components/FollowersRandomPost';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { log } from 'react-native-reanimated';


const Mainpage = ({ navigation }) => {
const [userdata, setUserdata] = useState(null)
const [adata, setAdata] = useState([]);
const [practicecat, setPracticecat] = useState([]);
const [materialcat, setMaterialcat] = useState([]);
const [jobcat, setJobcat] = useState([]);
const [previousyearcat, setPreviousyearcat] = useState([]);
const user = useSelector(state => state.user);
const LoggedIn = useSelector(state => state.isLoggedIn);


    // useEffect(() => {
    //     AsyncStorage.getItem('user')
    // .then(data => {
    //     //console.log('async userdata', data);
    //     setUserdata(JSON.parse(data))
    // })
    // .catch(err => alert(err))
    // },[])
    const getmaterialcat = async () =>{
      // setLoading(true)
         try{
           const response = await fetch(
             "http://coaching.futurevalue.in/api/studymaterialcategory"
           );
           const myData = await response.json();
           // console.log("hgduytgdu",myData.Catlist);
           setMaterialcat(myData.data);
          //  setLoading(false)
         }
         catch(error){
           console.log(error);
         }
   };
   const getjobcat = async () =>{
    // setLoading(true)
       try{
         const response = await fetch(
           "http://coaching.futurevalue.in/api/jobcategory"
         );
         const myData = await response.json();
         // console.log("hgduytgdu",myData.Catlist);
         setJobcat(myData.data);
        //  setLoading(false)
       }
       catch(error){
         console.log(error);
       }
 };
    // console.log('jobcat',jobcat);
    const getpreviousyearcat = async () =>{
      // setLoading(true)
         try{
           const response = await fetch(
             "http://coaching.futurevalue.in/api/previousyearcategory"
           );
           const myData = await response.json();
           // console.log("hgduytgdu",myData.Catlist);
           setPreviousyearcat(myData.data);
          //  setLoading(false)
         }
         catch(error){
           console.log(error);
         }
   };
    // console.log('previousyearcat',previousyearcat);

    const getpracticecat = async () =>{
      // setLoading(true)
         try{
           const response = await fetch(
             "http://coaching.futurevalue.in/api/practicequestioncategory"
           );
           const myData = await response.json();
           // console.log("hgduytgdu",myData.Catlist);
           setPracticecat(myData.data);
          //  setLoading(false)
         }
         catch(error){
           console.log(error);
         }
   };
    // console.log('practicecat',practicecat);
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

  useEffect(() => {
    getpracticecat();
    getjobcat();
  },[])
  useEffect(() => {
    getmaterialcat();
  },[])
  useEffect(() => {
    getpreviousyearcat();
  },[])
// console.log('adata',adata);
  return (
    
    <View style={[styles.containerFull]}>
      <StatusBar/>
      <Topnavbar navigation={navigation} page={"Mainpage"}/>
      <ScrollView style={{backgroundColor:'#f8f8f8', alignContent:'space-between'}}>
      <View style={styles.container}>
        <View style={{marginTop:20,marginBottom:10,backgroundColor:'#f8f8f8'}}>
          {
            LoggedIn?
          <Text style={{fontWeight:'bold',color:'#111111',fontSize:20}}>Hello,{user.name}</Text>
            :
          <Text style={{fontWeight:'bold',color:'#111111',fontSize:20}}>Hello,XYZ</Text>
          }
        </View>
    <SwiperFlatList 
    autoplay={true}
    autoplayLoop={true}
    autoplayDelay={3}  
    showPagination
    paginationStyleItem={{ width:7, height:7, borderRadius:5,backgroundColor:'red',justifyContent:'space-evenly' }}
    index={0}
    >
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image1.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image2.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image3.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image4.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image5.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image6.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image3.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image4.jpg')} style={[styles.image]}/>
      </View>
    </SwiperFlatList>
  </View>


  <View style={[styles.catogoryview]}>
    <TouchableOpacity style={{backgroundColor:'#800080', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
    onPress={() => navigation.navigate('Onlineclass',{data:adata})}>
    <Image source={require('../../../assets/online-course.png')} style={[styles.cimage]}/>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>LIVE Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#daa520', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Offlinecourse')}>
    <Image source={require('../../../assets/lecture.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Offline</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Course</Text>
      </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{backgroundColor:'#aaaaaa', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Recordedcourse')}>
    <Image source={require('../../../assets/recordedcourse.jpg')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Recorded</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Course</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>(VOD)</Text>
      </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={{backgroundColor:'#008080', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Booksandnotes')}>
    <Image source={require('../../../assets/book-stack.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Books/</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Class Notes</Text>
      </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{backgroundColor:'#d71585', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Freecourses')}>
    <Image source={require('../../../assets/webinar.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Free</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Courses</Text>
      </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={{backgroundColor:'#c84500', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      // onPress={() => navigation.navigate('Testseries')}>
        >
    <Image source={require('../../../assets/iq.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>IQ Test</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#1169e1', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Quiz')}>
    <Image source={require('../../../assets/quiz.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Quiz</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#3f8b57', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Studymaterials',{data:materialcat})}>
    <Image source={require('../../../assets/school-material.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Study</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Materials</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#4682b4', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Jobdetails',{data:jobcat})}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/3688/3688609.png"}} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Job Alerts</Text>
      </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{backgroundColor:'#708090', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Currentaffairs')}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/2965/2965879.png"}} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Current</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Affairs</Text>
      </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={{backgroundColor:'#800080', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Previousyear',{data:previousyearcat})}>
    <Image source={require('../../../assets/school-material.png')} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Previous</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Year PDF</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#8f4513', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Practicequestions',{data:practicecat})}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/3200/3200660.png"}} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Practice</Text>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Questions</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#dda500', width:width*0.46,height:height*0.1, borderRadius:10, alignItems:'center',marginVertical:5,flexDirection:'row'}}
      onPress={() => navigation.navigate('Livetest')}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/1205/1205526.png"}} style={[styles.cimage]}/>
    <View>
      <Text style={{fontSize:12 ,marginLeft:10,fontSize:16,color:'#fff',fontWeight:'bold'}}>Live Test</Text>
      </View>
      </TouchableOpacity>
    
    
  </View>

  <View style={[styles.suggestionview]}>
  {/* <Text style={[styles.suggestiontext]}>Special Offers</Text> */}
  {/* <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text>View All</Text>
  </View> */}
  </View>
  
  {/* <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Skin</Text>
  <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text>View All</Text>
  </View>
  </View>
 
  <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Value Packages</Text>
  <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text>View All</Text>
  </View>
  </View>

  <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Hair Color</Text>
  <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text>View All</Text>
  </View>
  </View>
 
  <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Massage</Text>
  <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text>View All</Text>
  </View>
  </View> */}

  </ScrollView>
      <Bottomnavbar navigation={navigation} page={"Mainpage"}/>
      {/* <FollowersRandomPost/> */}
    </View>
  )
}

export default Mainpage
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4

const styles = StyleSheet.create({
    container: { flex: 0.4, backgroundColor: '#f8f8f8' },
    child: { width, justifyContent: 'center'},
    image: { height:210, width:'100%',alignSelf:'center'},
    cimage: { height:35, width:35,marginLeft:10},

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
  goback:{
      flexDirection:'row',
      position:'absolute',
      top:50,
      left:20,
      alignItems:'center'
  },
  searchbar: {
    width: '90%',
    backgroundColor: 'f8f8f8',
    borderRadius: 10,
    top:-5,
    fontSize:10,
    paddingVertical:10,
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
},
searchview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  paddingVertical:0,
  top:-5,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:1,
  backgroundColor:'#ffffff'
},
icon3:{
  color:'#111111',
  fontSize:20,
  marginLeft:15,
},
icon4:{
  color:'#e7cb65',
  fontSize:15,
  marginLeft:5,
},
locationview:{
  flexDirection:'row',
  // justifyContent:'space-between',
  alignItems:'center',
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  paddingVertical:10,
  top:10,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:0,
  backgroundColor:'#fafafa'
},
locationtext:{
  marginLeft:10,
  marginRight:80
},
suggestiontext:{
  fontSize:17,
  fontWeight:'bold',
  color:'#444444'
},
suggestionview:{
  flexDirection:'row',
  justifyContent:'space-between',
  
  alignItems:'center',
  marginVertical:5,
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  paddingVertical:10,
  top:10,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:0,
  backgroundColor:'#fafafa'
},
saloncard:{
 alignItems:'center',
  width: CARD_WIDTH1,
  // height: CARD_HEIGHT1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8f8f8',
  margin: 15,
  borderRadius: 15
},
saloncard1:{
 alignItems:'center',
  width: CARD_WIDTH1,
  // height: CARD_HEIGHT1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8f8f8',
  margin: 15,
  borderRadius: 15
},
catogoryview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginVertical:5,
  borderRadius: 10,
  width:'95%',
  alignSelf: 'center',
  flexWrap:'wrap',
  paddingVertical:10,
  top:10,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:0,
  backgroundColor:'#f8f8f8'
},
offercard:{
  alignItems:'center',
   marginVertical:35,
   marginLeft:5,
   borderRadius: 10,
   width:width*0.6,
   alignSelf: 'center',
   paddingVertical:10,
   top:10,
   borderColor:'lightgray',
   zIndex:100,
   borderWidth:0,
   backgroundColor:'#f8f8f8'
 },
 offercard1:{
  alignItems:'center',
   marginVertical:35,
   marginHorizontal:-10,
   borderRadius: 10,
   width:width*0.6,
   alignSelf: 'center',
   paddingVertical:10,
   top:10,
   borderColor:'lightgray',
   zIndex:100,
   borderWidth:0,
   backgroundColor:'#f8f8f8'
 },
 cardStyle: {
  width: CARD_WIDTH,
  // height: CARD_HEIGHT,
  alignItems:'flex-start',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  margin: 15,
  borderRadius: 15
},
elevation: {  
  shadowOffset: {width: -2, height: 7},  
  shadowColor: '#fafafa',  
  shadowOpacity: 0.2,  
  shadowRadius: 3, 
  elevation: 2,     
},  
});