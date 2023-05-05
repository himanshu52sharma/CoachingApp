import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';

const PDFview = ({navigation,route}) => {
  const pdf = route.params
//  const PDF = JSON.stringify(pdf)
 console.log('pdf',pdf);
  return (
    <View style={[styles.container]}>
          <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }}
      />
          <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>

    </View>
     {/* <FlatList> */}
       <Pdf    
                  enableRTL={true}
                   trustAllCerts={false}
                    source={{ uri: `http://coaching.futurevalue.in/public/dist/img/${pdf.pdf}`, cache: true }}
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
                    style={styles.pdf}/>
                    {/* </FlatList> */}
    </View>
  )
}

export default PDFview

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
      },
      topview: {
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems:'center'
      },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
})