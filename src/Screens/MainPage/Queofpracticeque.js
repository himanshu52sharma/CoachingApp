
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
import { log } from 'react-native-reanimated';


const Queofpracticeque = ({ navigation,route }) => {
  const id = route.params
  console.log('id',id.id);
  const [type, setType] = useState('unattempt');
//   const [type, setType] = useState(data.data[1].category_name);
  const [questiondata, setQuestiondata] = useState([]);
  const [selectedanswer, setSelectedanswer] = useState('');
  const [selectedquestion, setSelectedquestion] = useState('');
  const [correctanswer, setCorrectanswer] = useState();


  const [showdetails, setshowdetails] = useState(false);

  console.log('selectedanswer',selectedanswer);
  // console.log('questiondata',questiondata);
  

  
  const getQuestions = async () =>{
    // console.log("item",item.id);
    // setType(item.category_name);
     try{
        const response = await fetch(
          `http://coaching.futurevalue.in/api/practicequestion/${id.id}`
        );
        const myData = await response.json();

        // console.log("hgduytgdu",myData);
        setQuestiondata(myData);
        //  setLoading(false)
      }
      catch(error){
        console.log(error);
      }
    // getCourseData();
   }
 
 useEffect(() => {
    getQuestions();
},[])

console.log("selectedquestion",selectedquestion);
console.log("correctanswer",correctanswer);


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
    <View>
        <Text style={{marginLeft:10,marginTop:-10,fontSize:16,color:'#111',fontWeight:'bold'}}>{questiondata[0]?.category_name} / {questiondata[0]?.subcategory_name}</Text>
     </View>
    {/* <Topnavbar navigation={navigation}/> */}
    {/* <Bottomnavbar navigation={navigation} page={"Mainpage"}/> */}
    {/* <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/> */}
    {/* 
     */}


        <FlatList
            // ref={_datesRef}
            data={questiondata}
            // numColumns={4}
            scrollEnabled={true}
            renderItem={({item, index}) => {
              // console.log('questionoptions',item.question_option[0].option);
              // const backgroundColor = selectedanswer == '' &&  index+1 ===   selectedquestion ? '#fff' : correctanswer === selectedanswer ? 'green' : 'red' ;
              return (
                <View style={[styles.dropdownview]}
          onPress={() => {setCorrectanswer(item.correct_answer); setSelectedquestion(item.question_number);}  }>
          <Text style={{marginLeft:10,fontSize:14,color:'#ffd700',fontWeight:'bold'}}>Question {index+1}:</Text>
            
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>{item.question}</Text>
          </View>
        
            <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,
            backgroundColor: 
            index+1 === selectedquestion &&
            item.question_option[0]?.option === selectedanswer &&
            correctanswer === selectedanswer ? 'green' : 
            index+1 === selectedquestion &&
            item.question_option[0]?.option === selectedanswer &&
            correctanswer !== selectedanswer ? 'red' : null       
          }}
               onPress={()=> {setSelectedanswer(item.question_option[0].option); setSelectedquestion(item.question_number);setCorrectanswer(item.correct_answer);} } >                 
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>1. {item.question_option[0]?.option}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,
           backgroundColor: 
           index+1 === selectedquestion &&
           item.question_option[1]?.option === selectedanswer &&
           correctanswer === selectedanswer ? 'green' : 
           index+1 === selectedquestion &&
           item.question_option[1]?.option === selectedanswer &&
           correctanswer !== selectedanswer ? 'red' : null   
          }}
              onPress={()=> {setSelectedanswer(item.question_option[1].option); setSelectedquestion(item.question_number);setCorrectanswer(item.correct_answer);} } >                                  
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>2. {item.question_option[1]?.option}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,
           backgroundColor: 
           index+1 === selectedquestion &&
           item.question_option[2]?.option === selectedanswer &&
           correctanswer === selectedanswer ? 'green' : 
           index+1 === selectedquestion &&
           item.question_option[2]?.option === selectedanswer &&
           correctanswer !== selectedanswer ? 'red' : null  
          }}
              onPress={()=> {setSelectedanswer(item.question_option[2].option); setSelectedquestion(item.question_number);setCorrectanswer(item.correct_answer);} } >                                 
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>3. {item.question_option[2]?.option}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,
           backgroundColor: 
           index+1 === selectedquestion &&
           item.question_option[3]?.option === selectedanswer &&
           correctanswer === selectedanswer ? 'green' : 
           index+1 === selectedquestion &&
           item.question_option[3]?.option === selectedanswer &&
           correctanswer !== selectedanswer ? 'red' : null  
          }}
              onPress={()=> {setSelectedanswer(item.question_option[3].option); setSelectedquestion(item.question_number);setCorrectanswer(item.correct_answer);} } >                     
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>4. {item.question_option[3]?.option}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,backgroundColor:correctanswer === selectedanswer ? 'green' : null}}
                onPress={()=> {setSelectedanswer(item.question_option[4].option); setSelectedquestion(item.question_number);setCorrectanswer(item.correct_answer);}} >                                  
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>5. {item.question_option[4]?.option}</Text>
          </TouchableOpacity> */}
            
          {/* {
            item.question_option.map((item,index) =>{
              const backgroundColor = selectedanswer == ''? null : correctanswer === selectedanswer ? 'green' : null ;
              const color = item.option === selectedanswer ? 'white' : 'black';  
                return(          
                  <View>
              {      
              <TouchableOpacity style={{borderColor:'#ffd700',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4,backgroundColor:backgroundColor}}
               onPress={()=> setSelectedanswer(item.option) } >
                                
             <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>{index+1}. {item.option}</Text>
          </TouchableOpacity>
          }
          </View>
                )
            })
          } */}


          {
             selectedanswer !== '' && index+1 ===   selectedquestion &&
            <TouchableOpacity style={{borderColor:'#ccc',borderWidth:1,width:'30%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4}}
            onPress={()=> setshowdetails(!showdetails)}>
              {
                !showdetails ?
               <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>Show Detail</Text>
               :
               <Text style={{marginLeft:20,fontSize:16,color:'#333',}}>Hide Detail</Text>
              }
            </TouchableOpacity>
          }
           {
             showdetails && index+1 === selectedquestion &&
            <TouchableOpacity style={{borderColor:'#ccc',borderWidth:1,width:'90%',marginLeft:20,borderRadius:20,paddingVertical:7,margin:4}}
            onPress={()=> setshowdetails(false)}>
               <Text style={{marginLeft:20,fontSize:14,color:'#333',}}>{item.question_explain}</Text>
            </TouchableOpacity>
          }
          
      </View>
              );
            }}
          />
   


  
  </View>
  )}

export default Queofpracticeque
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
        marginVertical:5
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
    dropdownview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        elevation:5,
        // alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 16,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      dropdownview1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // marginLeft: 17,
        borderRadius: 10,
        // width: '90%',
      //   alignSelf: 'center',
        paddingVertical: 14,
        marginTop: 10,
        // borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      icon1:{
        color:'#111',
        fontSize:14,
        // marginRight:5,
        marginRight:20
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