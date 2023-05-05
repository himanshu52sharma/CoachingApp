import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';
import WebView from 'react-native-webview';


const Jobdetails = ({ navigation,route }) => {
  const data = route.params
  const [type, setType] = useState(data.data[0].category_name);

  const [cid, setCid] = useState(data.data[2].id);
    const [cdata, setCdata] = useState([]);
    const [jobsubcat, setJobsubcat] = useState([]);
    const [alljob, setAlljob] = useState([]);
    const [catwisejob, setCatwisejob] = useState([]);
    const [subcatwisejob, setSubcatwisejob] = useState([]);


    const [index, setIndex] = useState('');
    const [index2, setIndex2] = useState('');
    const [subcattype, setSubcatType] = useState(jobsubcat[0]?.subcategory_name);

    console.log('subcattype',subcattype);
    console.log('type',type);


const getjobsubcat = async () =>{
        // setLoading(true)
           try{
             const response = await fetch(
               "http://coaching.futurevalue.in/api/jobsubcategory"
             );
             const myData = await response.json();
             // console.log("hgduytgdu",myData.Catlist);
             setJobsubcat(myData.data);
            //  setLoading(false)
           }
           catch(error){
             console.log(error);
           }
     };
   console.log("catwisejob",catwisejob);
   console.log("subcatwisejob",subcatwisejob);

const FetchAllJobs = async () => {
    // console.log('quizDetail', quizDetail[index].id);
    // console.log('subjectDetail', subjectDetail[index2].id);
    var body = {};
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/jobdata',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(body),
        },
      );
      const result = await response.json();
      // console.log('resultw', result);
      // console.log('hjgghggfrdrdrgf', result.data.map(item=>item.category));
      //  setSubject(result.data.map(item=>item.subcategory))
      setAlljob(result.data);

      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };
//   console.log("alljobs",alljob);
   const getSubcatwisejob = async (item) =>{
    console.log("item",item.id);
    setSubcatType(item.subcategory_name);
    var body = {
        sub_id: item.id,
      };
     try{
        const response = await fetch(
          `http://coaching.futurevalue.in/api/jobdata`,
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
        );
        const myData = await response.json();

        // console.log("hgduytgdu",myData);
        setSubcatwisejob(myData.data);
        //  setLoading(false)
      }
      catch(error){
        console.log(error);
      }
    // getCourseData();
   }
   const getJobCatwise = async (item) =>{
    console.log("item",item.id);
     setType(item.category_name);
     var body = {
        cat_id: item.id,
      };
     try{
        const response = await fetch(
          `http://coaching.futurevalue.in/api/jobdata`,
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
        );
        const myData = await response.json();

        // console.log("hgduytgdu",myData);
        setCatwisejob(myData.data);
        //  setLoading(false)
      }
      catch(error){
        console.log(error);
      }
    // getCourseData();
   }
   const setItems = () => 
  {
    data.data.map((item,index) => {
      return(
        index < 1 &&
        getJobCatwise(item)
      )
    }
  )
  jobsubcat.map((item,index) => {
    return(
      index < 1 &&
      getSubcatwisejob(item)
    )
  }
)
}

useEffect(() => {
    getjobsubcat();
},[])
useEffect(() => {
    getJobCatwise();
    getSubcatwisejob();
    FetchAllJobs();
},[])
   useEffect(() => {
    setItems();
    setSubcatType(jobsubcat[0]?.subcategory_name)
    // setIndex([1])
},[ data.data])

 
// console.log("hgduytgdu",cdata);

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
    <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
    {
        
        data.data.map((item,index) => {
        return(
            <TouchableOpacity
            // onPress={() => setDatas(item)}
            onPress={() => {setIndex(index); setType(item.category_name); getJobCatwise(item); }}
            style={{
              ...styles.btn,
              backgroundColor: type === item.category_name ? '#99B83C' : "#f8f8f8",
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: type === item.category_name ? '#fff' : '#111',
              }}>
              {(item.category_name.toUpperCase())}
            </Text>
          </TouchableOpacity>
      )}
        )}
        
          
          
          </ScrollView>
        </View>
        <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
    {
        
        jobsubcat.map((item,index) => {
        return(
            <TouchableOpacity
            // onPress={() => setDatas(item)}
            onPress={() => {setIndex2(index); setSubcatType(item.subcategory_name); getSubcatwisejob(item); }}
            style={{
              ...styles.btn,
              backgroundColor: subcattype === item.subcategory_name ? '#99B83C' : "#f8f8f8",
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: subcattype === item.subcategory_name ? '#fff' : '#111',
              }}>
              {(item.subcategory_name.toUpperCase())}
            </Text>
          </TouchableOpacity>
      )}
        )}
        
          
          
          </ScrollView>
        </View>


        <View>
          {console.log("index2",index2)}
          {index2 > 0 ? (
            <View style={{borderRadius:10,borderWidth:1,borderColor:'#111',width:'95%',alignSelf:'center',height:500}}>
            <View style={{alignItems:'center',justifyContent:"center",height:43,backgroundColor:'#99B83C',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <Text style={{fontWeight:"bold",color:"#fff",fontSize:14}}>Latest Jobs</Text>
            </View>
            <FlatList 
          showsHorizontalScrollIndicator={false}
        //   horizontal 
          style={{alignContent:'space-between'}}
           data={subcatwisejob} 
           renderItem={({ item }) =>(
            <View>
            <View style={{flexDirection:'row',marginVertical:5}}>
                <View style={{width:'16%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.date}</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',width:"85%"}}>
                    <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.name}</Text>
                </View>
                
            </View>
            <View style={{width:'95%',backgroundColor:"#444",height:0.5,alignSelf:"center",marginVertical:5}}>
                </View>
                </View>
            )} />
            </View>
          ) : (
            <View>
              {console.log("index",index)}
              {index > 0 ? (
                <View style={{borderRadius:10,borderWidth:1,borderColor:'#111',width:'95%',alignSelf:'center',height:500}}>
                <View style={{alignItems:'center',justifyContent:"center",height:43,backgroundColor:'#99B83C',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <Text style={{fontWeight:"bold",color:"#fff",fontSize:14}}>Latest Jobs</Text>
                </View>
                <FlatList 
              showsHorizontalScrollIndicator={false}
            //   horizontal 
              style={{alignContent:'space-between'}}
               data={catwisejob} 
               renderItem={({ item }) =>(
                <View>
                <View style={{flexDirection:'row',marginVertical:5}}>
                    <View style={{width:'16%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.date}</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',width:"85%"}}>
                        <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.name}</Text>
                    </View>
                    
                </View>
                <View style={{width:'95%',backgroundColor:"#444",height:0.5,alignSelf:"center",marginVertical:5}}>
                    </View>
                    </View>
                )} />
                </View>
              ) : (
               <View style={{borderRadius:10,borderWidth:1,borderColor:'#111',width:'95%',alignSelf:'center',height:500}}>
    <View style={{alignItems:'center',justifyContent:"center",height:43,backgroundColor:'#99B83C',borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <Text style={{fontWeight:"bold",color:"#fff",fontSize:14}}>Latest Jobs</Text>
    </View>
    <FlatList 
  showsHorizontalScrollIndicator={false}
//   horizontal 
  style={{alignContent:'space-between'}}
   data={alljob} 
   renderItem={({ item }) =>(
    <View>
    <View style={{flexDirection:'row',marginVertical:5}}>
        <View style={{width:'16%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.date}</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',width:"85%"}}>
            <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.name}</Text>
        </View>
        
    </View>
    <View style={{width:'95%',backgroundColor:"#444",height:0.5,alignSelf:"center",marginVertical:5}}>
        </View>
        </View>
    )} />
                </View>
              )}
            </View>
          )}
        </View>

     {/* {
         <View style={{borderRadius:10,borderWidth:1,borderColor:'#111',width:'95%',alignSelf:'center',height:500}}>
    <View style={{alignItems:'center',justifyContent:"center",height:43,backgroundColor:'#99B83C',borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <Text style={{fontWeight:"bold",color:"#fff",fontSize:14}}>Latest Jobs</Text>
    </View>
    <FlatList 
  showsHorizontalScrollIndicator={false}
//   horizontal 
  style={{alignContent:'space-between'}}
   data={alljob} 
   renderItem={({ item }) =>(
    <View>
    <View style={{flexDirection:'row',marginVertical:5}}>
        <View style={{width:'16%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.date}</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',width:"85%"}}>
            <Text style={{fontWeight:"bold",color:"#111",fontSize:13}}>{item.name}</Text>
        </View>
        
    </View>
    <View style={{width:'95%',backgroundColor:"#444",height:0.5,alignSelf:"center",marginVertical:5}}>
        </View>
        </View>
    )} />
    </View>
     } */}



    {/* { type  && 
   <ScrollView showsVerticalScrollIndicator = {false}>
   {
        
        cdata.map((item) => {
        return(
            <View style={[styles.dropdownview]}>
       
       <View style={{alignSelf:'center'}}>
        <Image source={{uri:`http://coaching.futurevalue.in/public/dist/img/avatar/${item.course_image}`}} style={{width:341,height:190,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
       </View>
       <View style={{flexDirection:'row',width:'95%',marginTop:20,alignSelf:'center'}}>
           <View style={{width:'80%'}}>
               <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>{item.course_name}</Text>
           </View>
           <View>
        <Image source={require('../../../assets/exampur-logo.png')} style={{width:45,height:45,marginLeft:20,marginTop:0}}/>
       </View>
       </View>
       <View style={{width:'77%',marginLeft:20,marginVertical:10}}>
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
           <View style={{flexDirection:'row',marginVertical:10}}>
       <Entypo name="share" size={22} color="black" style={{}}
      onPress={() => navigation.navigate('My_Userprofile')}/>
       <Text style={{marginRight:10,fontSize:15,color:'#444',fontWeight:'bold',marginLeft:2}}>Share</Text>
       </View>
       </View>
   </View>
      )}
        )}
   

  
   
</ScrollView>
    } */}


    
  </View>
  )}

export default Jobdetails
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
        marginVertical:10
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
        // paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      btn: {
        borderColor: '#99B83C',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 0,
        justifyContent: 'center',
        // backgroundColor: '#444444',
        alignItems: 'center',
        height: 40,
        padding:5,
        // width: 15,
      },
      btnText: {
        fontSize: 12,
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
        paddingVertical: 15,
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