import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const SelectCategory = ({ navigation,route }) => {
  const data = route.params
  //  console.log("111",data);
  const [type1, setType1] = useState(data?.data[2]?.category_name);



console.log('type1', type1);
  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }}/>
       <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:70}}/>
    </View>   
    <View style={[styles.suggestionview]}>
        <View>
      <Text style={[styles.suggestiontext]}>Select Categories</Text>
      </View>
    </View>
    <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#dddddd" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search Category" placeholderTextColor = "#cccccc "/>
  </View>
  <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
  <View style={[styles.catogoryview]}>
    
      {/* <View> */}
          <FlatList
            // ref={_datesRef}
            data={data?.data}
            numColumns={2}
            nestedScrollEnabled={true}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                // <Text>{item.category_name}</Text>
                <TouchableOpacity 
            onPress={() => setType1(item.category_name)}
    style={{backgroundColor:'#ffffff', width:width*0.48, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
  marginHorizontal: 2, borderWidth: type1 == item.category_name ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text numberOfLines={1} style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>{item.category_name.toUpperCase()}</Text>
    <Image source={{uri:`http://coaching.futurevalue.in/public/dist/img/${item.category_image}`}} style={[styles.cimage]}/>
    </View>
    <Text numberOfLines={1} style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>{item.description}</Text>
                </TouchableOpacity>
              );
            }}
          />
          {/* </View> */}
      {/* <TouchableOpacity 
            onPress={() => setType2(!type2)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type2 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>UP SPECIAL</Text>
    <Image source={require('../../../assets/uplogo.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>UPPSSC PET , UPSI , UP...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType3(!type3)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type3 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>SSC</Text>
    <Image source={require('../../../assets/ssclogo.jpg')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>SSC CGL , MTS , ...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType4(!type4)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type4 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>OFFLINE CLASS</Text>
    <Image source={require('../../../assets/classroomlogo.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>OFFLINE CLASSROOM...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType5(!type5)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type5 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>DEFENCE</Text>
    <Image source={require('../../../assets/defence.jpg')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>NDA, Airforce,NAVY, CDA, ...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType6(!type6)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type6 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>TEACHING</Text>
    <Image source={require('../../../assets/teaching.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>UP BE.D,UP ...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType7(!type7)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type7 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>IAS/PCS</Text>
    <Image source={require('../../../assets/Civil_Services.jpg')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>UPSC,IAS, PCS,UPPSC</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType8(!type8)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type8 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>BANKING</Text>
    <Image source={require('../../../assets/bank.jpg')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>IBPS, RBI,SBI,CLERK,RRB...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType9(!type9)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type9 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>RAILWAY</Text>
    <Image source={require('../../../assets/railway.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>RRB, NTPC,GROUP D,RRC...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType10(!type10)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type10 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>RAJASTHAN SPECIAL</Text>
    <Image source={require('../../../assets/rajasthan.jpg')} style={[styles.cimage,{width:35,height:35}]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>REET, RAS,RPSC,JA,ASO,</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType11(!type11)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type11 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>BIHAR SPECIAL</Text>
    <Image source={require('../../../assets/bihar.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>BPSC,BSSC</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType12(!type12)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type12 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>HARYANA SPECIAL</Text>
    <Image source={require('../../../assets/haryana.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>Haryana exams, ...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType13(!type13)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type13 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>MP SPECIAL</Text>
    <Image source={require('../../../assets/mp.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>MPSC,MP PEB,MP PAT</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType14(!type14)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type14 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>RECORDED COURSE</Text>
    <Image source={require('../../../assets/exampur-logo.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>RECORDED COURSE (VOD)</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType15(!type15)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type15 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>ENGINEERING</Text>
    <Image source={require('../../../assets/enineering.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>SSC JE,GATE,UPPCL,SSC...</Text>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setType16(!type16)  }
    style={{backgroundColor:'#ffffff', width:width*0.485, borderRadius:8,marginVertical:2,borderColor:"#f1d700",
    borderWidth: !type16 ? 3 : 0 }}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
      <Text style={{marginLeft:10,fontSize:12,color:'#111',fontWeight:'bold'}}>NEET EXAMS</Text>
    <Image source={require('../../../assets/cbse.png')} style={[styles.cimage]}/>
    </View>
    <Text style={{marginLeft:10,fontSize:12,color:'#aaa',fontWeight:'bold',marginBottom:25}}>NEET EXAMS</Text>
      </TouchableOpacity> */}

  </View>
</ScrollView>
<View style={[styles.searchview1]}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#f1d700', paddingVertical: 9, paddingHorizontal:90, borderRadius: 5, marginHorizontal: 10, }]}
          onPress={() => navigation.navigate('Mainpage')}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Save the course</Text>
        </TouchableOpacity>
        </View>
       </View>
  </View>
  )
}

export default SelectCategory
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
  cimage: { height:40, width:40,marginLeft:0,marginRight:10,borderRadius:50},

    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f4f4f4',
    },
    catogoryview:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:0,
      borderRadius: 10,
      width:'98%',
      alignSelf: 'center',
      flexWrap:'wrap',
      // paddingVertical:10,
      // top:10,
      borderColor:'lightgray',
      zIndex:100,
      borderWidth:0,
      backgroundColor:'#f4f4f4'
    },
    formHead: {
      fontSize: 17,
      color: '#111111',
      marginLeft: 100,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    searchbar: {
      width: '70%',
      backgroundColor: 'white',
      borderRadius: 10,
      top:0,
      fontSize:10,
      paddingVertical:10,
      paddingHorizontal: 15,
      // marginTop: 10,
      fontSize: 18,
    backgroundColor:'#f4f4f4',

      // alignSelf: 'center',
  },
  searchview1: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    // alignSelf: 'center',
    paddingVertical: 10,
    // top: 0,
    // borderColor: 'lightgray',
    // zIndex: 100,
    // borderWidth: 1,
    backgroundColor: '#f4f4f4'
  },
  searchview:{
    flexDirection:'row',
    // justifyContent:'space-between',
    alignItems:'center',
    borderRadius: 50,
    width:'78%',
    // alignSelf: 'center',
    paddingVertical:0,
    marginTop:15,
    borderColor:'lightgray',
    // zIndex:100,
    borderWidth:1,
    backgroundColor:'#f4f4f4',
    marginLeft:20,
    marginBottom:15
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
      marginTop:20
    },
    gohomeicon: {
      marginLeft: 10
    },
    icon3: {
      color: '#cccccc',
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
      // marginVertical: 5,
      borderRadius: 10,
      width: '90%',
      alignSelf: 'center',
      // paddingVertical: 10,
      // top: 10,
      borderColor: 'lightgray',
      zIndex: 100,
      borderWidth: 0,
      backgroundColor: '#f4f4f4'
    },

  });