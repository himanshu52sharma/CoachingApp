import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';


const Currentaffairs = ({ navigation }) => {
  const [type, setType] = useState('Languages');

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
    <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#dddddd" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search..." placeholderTextColor = "#dddddd "/>
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
                color: type === 'Languages' ? '#111111' : '#666',
              }}>
              {('दैनिक करंट अफेयर्स')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Services') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Services' ? '#99B83C' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Services' ? '#111' : '#666',
              }}>
              {('साप्ताहिक करंट अफेयर्स')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Galleries') && {Languages} }
            style={{
              ...styles.btn,
              borderColor: type === 'Galleries' ? '#99B83C' : "#f8f8f8",

            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Galleries' ? '#99B83C' : '#111',
              }}>
              {('ब्लॉग ')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
   

   { type === 'Languages' && 
   <View>
   <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginVertical:10}}>
   <Text style={{fontWeight:'bold',color:'#111'}}>DAILY CURRENT AFFAIRS</Text>
   <Text style={{fontSize:16,color:'#111'}}>Select Tag</Text>
   <FontAwesome name="calendar" size={16} color="#111" style={{marginHorizontal:5,marginTop:0}}/>
  </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
   
            <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>एलआईसी ने तबलेश पांडे को प्रबंध निदेशक नियुक्त किया</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय जीवन बीमा निगम (एलआईसी) ने 14 मार्च को तबलेश पांडे और एम जगन्नाथ को निगम के प्रबंध निदेशक के रूप में नियुक्त करने की घोषणा की। खबर का अवलोकन </Text>
                  </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>भारत और स्वीडन ने सहयोग को मजबूत करने और अनुसंधान नेटवर्किंग को बढ़ावा देने के लिए एक सहयोग ज्ञापन पर हस्ताक्षर किए</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>सहयोग को मजबूत करने और दोनों देशों के अनुसंधान संस्थानों के बीच अनुसंधान नेटवर्किंग को बढ़ावा देने के लिए भारत और स्वीडन के बीच एक सहयोग ज्ञापन (MoC) पर हस्ताक्षर किए गए। खबर का अवलोकन</Text>
                  </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>बीआईएस ने 'लर्निंग साइंस वाया स्टैंडर्ड्स' सीरीज़ लॉन्च की</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय मानक ब्यूरो (BIS) ने मानकों के माध्यम से विज्ञान सीखने के लिए छात्रों के लिए एक अनूठी पहल, 'मानकों के माध्यम से विज्ञान सीखना' ('लर्निंग साइंस वाया स्टैंडर्ड्स) शुरू करने की घोषणा की है। 'लर्निंग साइंस वाया स्टैंडर्ड्स' पहल</Text>
                  </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>उत्तराखंड सरकार ने राज्य सरकार की नौकरियों में राज्य आंदोलनकारियों के लिए 10% क्षैतिज आरक्षण को मंजूरी दी</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>मुख्यमंत्री पुष्कर सिंह धामी की अध्यक्षता में हुई प्रदेश मंत्रिमंडल की बैठक में राज्य आंदोलनकारियों और उनके आश्रितों को सरकारी नौकरियों में 10 प्रतिशत क्षैतिज आरक्षण देने के प्रस्ताव को मंजूरी दे दी गई. खबर का अवलोकन</Text>
                  </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>G20 फ्लावर फेस्टिवल नई दिल्ली में शुरू</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>11 मार्च से, G20 प्रतिभागियों और आमंत्रित राष्ट्रों की विविधता को प्रदर्शित करने के उद्देश्य से दिल्ली के कनॉट प्लाजा में फ्लावर फेस्टिवल का आयोजन शुरू हुआ।</Text>
                  </View>
              </View>
          </View>
          <View style={[styles.dropdownview1]}>   
              <View style={{marginHorizontal:10}}>
               <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
              </View>
              <View style={{marginLeft:20}}>
                  <View style={{width:'85%'}}>
                  <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>डीआरडीओ ने बेंगलुरु में एलसीए तेजस पर स्वदेशी पावर टेक ऑफ शाफ्ट का सफलतापूर्वक उड़ान परीक्षण किया</Text>
                    <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
                      <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>14 मार्च को बेंगलुरु में लाइट कॉम्बैट एयरक्राफ्ट तेजस पर डिफेंस रिसर्च एंड डेवलपमेंट ऑर्गनाइजेशन (DRDO) द्वारा पावर टेक ऑफ (PTO) शाफ्ट का सफल उड़ान परीक्षण किया गया। खबर का अवलोकन</Text>
                  </View>
              </View>
          </View>
          <View style={{marginTop:30}}></View>
        
        </ScrollView>
        </View>
        }
    { type === 'Services' && 
   <ScrollView showsVerticalScrollIndicator = {false}>
   
   <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>रचनायें और लेखक</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय जीवन बीमा निगम (एलआईसी) ने 14 मार्च को तबलेश पांडे और एम जगन्नाथ को निगम के प्रबंध निदेशक के रूप में नियुक्त करने की घोषणा की। खबर का अवलोकन </Text>
         </View>
     </View>
 </View>
 <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>पुरस्कार</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>सहयोग को मजबूत करने और दोनों देशों के अनुसंधान संस्थानों के बीच अनुसंधान नेटवर्किंग को बढ़ावा देने के लिए भारत और स्वीडन के बीच एक सहयोग ज्ञापन (MoC) पर हस्ताक्षर किए गए। खबर का अवलोकन</Text>
         </View>
     </View>
 </View>
 <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>चर्चा में व्यक्ति</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय मानक ब्यूरो (BIS) ने मानकों के माध्यम से विज्ञान सीखने के लिए छात्रों के लिए एक अनूठी पहल, 'मानकों के माध्यम से विज्ञान सीखना' ('लर्निंग साइंस वाया स्टैंडर्ड्स) शुरू करने की घोषणा की है। 'लर्निंग साइंस वाया स्टैंडर्ड्स' पहल</Text>
         </View>
     </View>
 </View>
 <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>खेल समाचार</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>मुख्यमंत्री पुष्कर सिंह धामी की अध्यक्षता में हुई प्रदेश मंत्रिमंडल की बैठक में राज्य आंदोलनकारियों और उनके आश्रितों को सरकारी नौकरियों में 10 प्रतिशत क्षैतिज आरक्षण देने के प्रस्ताव को मंजूरी दे दी गई. खबर का अवलोकन</Text>
         </View>
     </View>
 </View>
 <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>रक्षा समाचार</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>11 मार्च से, G20 प्रतिभागियों और आमंत्रित राष्ट्रों की विविधता को प्रदर्शित करने के उद्देश्य से दिल्ली के कनॉट प्लाजा में फ्लावर फेस्टिवल का आयोजन शुरू हुआ।</Text>
         </View>
     </View>
 </View>
 <View style={[styles.dropdownview1]}>   
     <View style={{marginHorizontal:10}}>
      <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
     </View>
     <View style={{marginLeft:20}}>
         <View style={{width:'85%'}}>
         <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>अर्थशास्त्र / व्यवसाय</Text>
           <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
             <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>14 मार्च को बेंगलुरु में लाइट कॉम्बैट एयरक्राफ्ट तेजस पर डिफेंस रिसर्च एंड डेवलपमेंट ऑर्गनाइजेशन (DRDO) द्वारा पावर टेक ऑफ (PTO) शाफ्ट का सफल उड़ान परीक्षण किया गया। खबर का अवलोकन</Text>
         </View>
     </View>
 </View>
 <View style={{marginTop:30}}></View>

</ScrollView>
   }
 { type === 'Galleries' && 
  <ScrollView showsVerticalScrollIndicator = {false}>
   
  <View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>एलआईसी ने तबलेश पांडे को प्रबंध निदेशक नियुक्त किया</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय जीवन बीमा निगम (एलआईसी) ने 14 मार्च को तबलेश पांडे और एम जगन्नाथ को निगम के प्रबंध निदेशक के रूप में नियुक्त करने की घोषणा की। खबर का अवलोकन </Text>
        </View>
    </View>
</View>
<View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>भारत और स्वीडन ने सहयोग को मजबूत करने और अनुसंधान नेटवर्किंग को बढ़ावा देने के लिए एक सहयोग ज्ञापन पर हस्ताक्षर किए</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>सहयोग को मजबूत करने और दोनों देशों के अनुसंधान संस्थानों के बीच अनुसंधान नेटवर्किंग को बढ़ावा देने के लिए भारत और स्वीडन के बीच एक सहयोग ज्ञापन (MoC) पर हस्ताक्षर किए गए। खबर का अवलोकन</Text>
        </View>
    </View>
</View>
<View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>बीआईएस ने 'लर्निंग साइंस वाया स्टैंडर्ड्स' सीरीज़ लॉन्च की</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>भारतीय मानक ब्यूरो (BIS) ने मानकों के माध्यम से विज्ञान सीखने के लिए छात्रों के लिए एक अनूठी पहल, 'मानकों के माध्यम से विज्ञान सीखना' ('लर्निंग साइंस वाया स्टैंडर्ड्स) शुरू करने की घोषणा की है। 'लर्निंग साइंस वाया स्टैंडर्ड्स' पहल</Text>
        </View>
    </View>
</View>
<View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>उत्तराखंड सरकार ने राज्य सरकार की नौकरियों में राज्य आंदोलनकारियों के लिए 10% क्षैतिज आरक्षण को मंजूरी दी</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>मुख्यमंत्री पुष्कर सिंह धामी की अध्यक्षता में हुई प्रदेश मंत्रिमंडल की बैठक में राज्य आंदोलनकारियों और उनके आश्रितों को सरकारी नौकरियों में 10 प्रतिशत क्षैतिज आरक्षण देने के प्रस्ताव को मंजूरी दे दी गई. खबर का अवलोकन</Text>
        </View>
    </View>
</View>
<View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>G20 फ्लावर फेस्टिवल नई दिल्ली में शुरू</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>11 मार्च से, G20 प्रतिभागियों और आमंत्रित राष्ट्रों की विविधता को प्रदर्शित करने के उद्देश्य से दिल्ली के कनॉट प्लाजा में फ्लावर फेस्टिवल का आयोजन शुरू हुआ।</Text>
        </View>
    </View>
</View>
<View style={[styles.dropdownview1]}>   
    <View style={{marginHorizontal:10}}>
     <Image source={{uri:"https://exampur.com/static/mainpage/img/exampur-logo.png"}} style={{width:65,height:65,marginLeft:0,marginTop:0,}}/>
    </View>
    <View style={{marginLeft:20}}>
        <View style={{width:'85%'}}>
        <Text numberOfLines={2} style={{marginLeft:0,fontSize:14,color:'#444',fontWeight:'bold'}}>डीआरडीओ ने बेंगलुरु में एलसीए तेजस पर स्वदेशी पावर टेक ऑफ शाफ्ट का सफलतापूर्वक उड़ान परीक्षण किया</Text>
          <Text style={{color:"#ffd700",fontSize:11,fontWeight:'bold'}}>Posted on 2022-03-14</Text>
            <Text numberOfLines={3} style={{marginLeft:10,fontSize:12,color:'#444',}}>14 मार्च को बेंगलुरु में लाइट कॉम्बैट एयरक्राफ्ट तेजस पर डिफेंस रिसर्च एंड डेवलपमेंट ऑर्गनाइजेशन (DRDO) द्वारा पावर टेक ऑफ (PTO) शाफ्ट का सफल उड़ान परीक्षण किया गया। खबर का अवलोकन</Text>
        </View>
    </View>
</View>
<View style={{marginTop:30}}></View>

</ScrollView>
   }
    
  </View>
  )}

export default Currentaffairs
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
    icon3: {
        color: '#cccccc',
        fontSize: 20,
        marginLeft: 15,
      },
    searchbar: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        // top:0,
        fontSize:16,
        paddingVertical:5,
        paddingHorizontal: 15,
        // marginTop: 10,
      backgroundColor:'#f4f4f4',
  
        // alignSelf: 'center',
    },

    searchview:{
      flexDirection:'row',
      // justifyContent:'space-between',
      alignItems:'center',
      borderRadius: 50,
      width:'90%',
      // alignSelf: 'center',
      paddingVertical:0,
    //   marginTop:15,
      borderColor:'lightgray',
      // zIndex:100,
      borderWidth:1,
      backgroundColor:'#f4f4f4',
      marginLeft:10,
      marginBottom:15
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
        paddingVertical: 4,
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