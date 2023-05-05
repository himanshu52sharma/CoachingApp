import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';
import Pdf from 'react-native-pdf';
// import Pdf from 'react-native-pdf';


const Booksandnotes = ({ navigation }) => {
  const [type, setType] = useState('Languages');
  const [adata, setAdata] = useState([]);
  const [ebook, setEbook] = useState([]);
  const [loading, setLoading] = useState(false)


  const getBooksData = async () =>{
    setLoading(true)
       try{
         const response = await fetch(
           "http://coaching.futurevalue.in/api/booksdata"
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
const getEBooksData = async () =>{
    // setLoading(true)
       try{
         const response = await fetch(
           "http://coaching.futurevalue.in/api/ebookdata"
         );
         const myData = await response.json();
         // console.log("hgduytgdu",myData.Catlist);
         setEbook(myData.data);
        //  setLoading(false)
       }
       catch(error){
         console.log(error);
       }
 };
 useEffect(() => {
    getBooksData();
},[])
 useEffect(() => {
    getEBooksData();
},[])
// console.log('ebook',ebook);
const source = { uri: 'http://coaching.futurevalue.in/public/dist/img/1679744267.pdf', cache: true };
  return (
    <View style={[styles.container]}>

    {/* <StatusBar/> */}
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }}
      />
          <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>

    </View>
    <View>
        <Text style={{marginLeft:10,marginTop:-10,fontSize:25,color:'#111',fontWeight:'bold'}}>Books/Class Notes</Text>
     </View>
    {/* <Topnavbar navigation={navigation}/> */}
    {/* <Bottomnavbar navigation={navigation} page={"Mainpage"}/> */}
    {/* <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/> */}
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
              {('Books')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Services') && {Languages}}
            style={{
              ...styles.btn,
              borderColor: type === 'Services' ? '#99B83C' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Services' ? '#99B83C' : '#111',
              }}>
              {('E-Books')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>



   { type === 'Languages' && 
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
             <Image source={{uri:`data:image/png;base64,${item.image}`}} style={{width:325,height:190,marginLeft:0,marginTop:20}}/>
            </View>
            <View style={{flexDirection:'row',width:'95%',marginTop:10,alignSelf:'center'}}>
                <View style={{width:'100%',alignSelf:"center"}}>
                    <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold'}}>{item.name}</Text>
                </View>
            </View>
            <View style={{width:'100%',marginLeft:0,marginVertical:5,alignItems:'center'}}>
                    <Text style={{marginLeft:0,fontSize:13,color:'#444',fontWeight:'bold'}}>(MPR : ₹ {item.mrp}.0, Selling Price : ₹ {item.selling_amount}.0 )</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-evenly'}}>      
                <TouchableOpacity style={{borderColor:"#99B83C",marginLeft:0,paddingVertical:5,paddingHorizontal:5,borderRadius:7,marginVertical:0,borderWidth:1}}
                onPress ={() =>navigation.navigate('PDFview',{pdf:item.pdf})}>
                <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>Sample PDF</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:"#99B83C",marginRight:0,paddingVertical:7,paddingHorizontal:100,borderRadius:10}}>
                <Text style={{marginLeft:0,fontSize:18,color:'#fff',fontWeight:'bold'}}>Buy</Text>
                </View>
            </View>
            {/* <Pdf    
                   trustAllCerts={false}
                    source={{ uri: 'http://coaching.futurevalue.in/public/dist/img/1679744267.pdf', cache: true }}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/> */}
        </View>
        
            )}
        )}
   
   
 

</ScrollView>
    }
    { type === 'Services' && 
  <ScrollView showsVerticalScrollIndicator = {false}>
    {
        
        ebook.map((item) => {
        return(
            <View style={[styles.dropdownview1]}>
      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>{item.name}</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <TouchableOpacity style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}
                 onPress={() => navigation.navigate('PDFview',{pdf:item.pdf})}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </TouchableOpacity>
              </View>
      </View>
  </View>
        
            )}
        )}
  
  {/* <View style={[styles.dropdownview1]}>
      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'90%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>CURRENT AFFAIRS MAGAZINE (NOV 2022)</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>
      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'90%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>CURRENT AFFAIRS MAGAZINE (DEC 2022)</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'90%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>BIHAR CURRENT AFFAIRS NOVEMBER 2022</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'95%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>SSC GD REASONING MAGAZINE BY PULKIT SIR</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'95%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>CURRENT AFFAIRS MAGAZINE (AUGUST 2022)</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'95%'}}>
              <Text style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>CURRENT AFFAIRS MAGAZINE (APRIL 2022)</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View>
  <View style={[styles.dropdownview1]}>      
      <View style={{}}>
       <Image source={{uri:"https://t3.ftcdn.net/jpg/04/17/28/20/240_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg"}} style={{width:70,height:70,marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      </View>
      <View style={{marginLeft:20}}>
          <View style={{width:'100%'}}>
              <Text numberOfLines={2} style={{marginLeft:0,fontSize:17,color:'#444',fontWeight:'bold',marginBottom:10}}>CURRENT AFFAIRS MAGAZINE (SEPTEMBER 2022)</Text>
          </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>₹ 99.0</Text>
                 <View style={{borderColor:"#111",marginLeft:10,paddingVertical:5,paddingHorizontal:15,marginVertical:0,borderWidth:1}}>
                 <Text style={{marginLeft:0,fontSize:12,color:'#111',fontWeight:'bold'}}>View PDF</Text>
                 </View>
              </View>
      </View>
  </View> */}
</ScrollView>
   }
 
    
  </View>
  )}

export default Booksandnotes
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
      pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
      icon1:{
        color:'#111',
        fontSize:20,
        marginRight:5,
        marginLeft:265
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