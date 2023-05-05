import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';



const Quiz = ({navigation}) => {
  const [type, setType] = useState('Languages');
  const [discription, setDiscription] = React.useState('');
  const [quiz, setQuiz] = React.useState([]);
  const [quizDetail, setQuizDetail] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [subjectDetail, setSubjectDetail] = React.useState([]);
  const [paperSubwise, setPaperSubwise] = React.useState([]);
  const [paper, setPaper] = React.useState([]);
  const [Allpaper, setAllpaper] = React.useState([]);
  const [index, setIndex] = useState('');
  const [index2, setIndex2] = useState('');

  const FetchDiscription = async () => {
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/quizdescription',
      );
      const result = await response.json();
      // console.log('hjgghggfrdrdrgf', result.data[0].description);
      setDiscription(result.data[0].description);
      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };
console.log("Allpaper",Allpaper);
  const FetchQiuz = async () => {
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/quizcategory',
      );
      const result = await response.json();
      // console.log(
      //   'hjgghggfrdrdrgf',
      //   result.data.map(item => item.category),
      // );
      // console.log("result",result);
      setQuiz(result.data.map(item => item.category));
      setQuizDetail(result.data);

      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };
  console.log('quizDetail',quizDetail);
  console.log('quiz',quiz);
  // console.log('quizDetail', quizDetail[index]?.id);


  const FetchSubject = async () => {
    // console.log('quizDetail', quizDetail[index].id);
    var body = {
      cat_id: quizDetail[index].id,
    };
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/quizsubcategory',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(body),
        },
      );
      const result = await response.json();
      // console.log('result', result);
      console.log('hjgghggfrdrdrgf', result.data.map(item=>item.category));
      setSubject(result.data.map(item => item.subcategory));
      setSubjectDetail(result.data);
      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };

  const FetchPaperSubwise = async () => {
    console.log('quizDetail', quizDetail[index].id);
    console.log('subjectDetail', subjectDetail[index2].id);
    var body = {
      cat_id: quizDetail[index].id,
      sub_id: subjectDetail[index2].id,
    };
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/paperquiz',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(body),
        },
      );
      const result = await response.json();
      console.log('resultw', result);
      // console.log('hjgghggfrdrdrgf', result.data.map(item=>item.category));
      //  setSubject(result.data.map(item=>item.subcategory))
      setPaperSubwise(result.data);
      console.log(paper);
      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };
  const FetchPaper = async () => {
    console.log('quizDetail', quizDetail[index].id);
    // console.log('subjectDetail', subjectDetail[index2].id);
    var body = {
      cat_id: quizDetail[index].id,
    };
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/paperquiz',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(body),
        },
      );
      const result = await response.json();
      console.log('resultw', result);
      // console.log('hjgghggfrdrdrgf', result.data.map(item=>item.category));
      //  setSubject(result.data.map(item=>item.subcategory))
      setPaper(result.data);

      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };

  const FetchAllPaper = async () => {
    // console.log('quizDetail', quizDetail[index].id);
    // console.log('subjectDetail', subjectDetail[index2].id);
    var body = {};
    try {
      const response = await fetch(
        'http://coaching.futurevalue.in/api/paperquiz',
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
      setAllpaper(result.data);

      return result;
    } catch (e) {
      // console.log("error",e);
      return null;
    }
  };
  React.useEffect(() => {
    FetchDiscription();
    FetchQiuz();
    FetchAllPaper();
  }, []);

  React.useEffect(() => {
    FetchSubject();
    FetchPaperSubwise();
    FetchPaper();
  }, [index, index2]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign
          name="left"
          size={24}
          color="#111111"
          style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage');
          }}
        />
        <Image
          source={{uri:'https://scontent.fbho2-1.fna.fbcdn.net/v/t39.30808-6/260855007_1245868442555601_4493787556833876827_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2RR40HVzVlcAX9iADPt&_nc_ht=scontent.fbho2-1.fna&oh=00_AfDIkBSK3fB_XLHC9grfFHoNoLaE79FwACsjTGM6TPCyNw&oe=6439DDFA'}}
          style={{width: 160, height: 45, marginLeft: 80, marginTop: 0}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#fff'}}>
          {/* <Text style={{fontSize:19,fontWeight:"400",color:"#111",marginLeft:10}}>Free Quizzes for Exams</Text> */}
          <Text
            style={{
              fontSize: 16,
              color: '#444',
              marginVertical: 7,
              marginLeft: 10,
              fontFamily:'Poppins-Regular',
              letterSpacing:2
            }}>
            {discription}
          </Text>
          {/* <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#dddddd" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search here.." placeholderTextColor = "#cccccc "/>
  </View> */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View
              style={{
                backgroundColor: '#b8860b',
                paddingVertical: 4,
                borderRadius: 5,
                alignItems: 'center',
                width: 170,
                marginTop: 5,
              }}>
              <SelectDropdown
                data={quiz}
                onSelect={(selectedItem, index) => {
                  console.log('bwx', selectedItem, index);
                  setIndex(index);
                }}
                defaultButtonText={'Select Quizzes'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                selectedRowStyle={styles.dropdown1SelectedRowStyle}
                // search
                searchInputStyle={styles.dropdown1searchInputStyleStyle}
                searchPlaceHolder={'Search here'}
                searchPlaceHolderColor={'darkgrey'}
                renderSearchInputLeftIcon={() => {
                  return (
                    <FontAwesome name={'search'} color={'#444'} size={18} />
                  );
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#b8860b',
                paddingVertical: 4,
                borderRadius: 5,
                alignItems: 'center',
                width: 170,
                marginTop: 5,
              }}>
              <SelectDropdown
                data={subject}
                onSelect={(selectedItem, index) => {
                  console.log('bwx', selectedItem, index);
                  setIndex2(index);
                }}
                defaultButtonText={'Select Subjects'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                selectedRowStyle={styles.dropdown1SelectedRowStyle}
                // search
                searchInputStyle={styles.dropdown1searchInputStyleStyle}
                searchPlaceHolder={'Search here'}
                searchPlaceHolderColor={'darkgrey'}
                renderSearchInputLeftIcon={() => {
                  return (
                    <FontAwesome name={'search'} color={'#444'} size={18} />
                  );
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <FontAwesome
            name="calendar"
            size={16}
            color="#b8860b"
            style={{marginHorizontal: 5, marginTop: 0}}
          />
          <Text style={{color: '#b8860b', fontSize: 16}}>14 Mar 2023</Text>
        </View>

        <View>
          {console.log("index2",index2)}
          {index2 > 0 ? (
            <View>
              {paperSubwise.map(item => {
                return (
                  <View style={[styles.dropdownview1]}>
                    <View style={{alignSelf:'center'}}>
                      <MaterialCommunityIcons
                        name="clock-time-nine-outline"
                        size={32}
                        color="#b8860b"
                        style={{marginHorizontal: 5, marginTop: 0,}}
                      />
                    </View>
                    <View style={{marginLeft: 0, width: '65%',alignSelf:'center'}}>
                      <Text style={{fontSize: 13, color: '#111'}}>
                        {item.paper}
                      </Text>
                      <Text style={{color: '#111', fontSize: 13}}>
                        Attempts: 145
                      </Text>
                      <Text
                        style={{marginLeft: 0, fontSize: 13, color: '#444'}}>
                        10 Q : 10.0 mins
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#b8860b',
                        paddingVertical: 0,
                        borderRadius: 5,
                        alignItems: 'center',
                        width: 65,
                        height: 30,
                        flexDirection: 'row',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{marginLeft: 10, fontSize: 16, color: '#fff'}}>
                        Start
                      </Text>
                      <MaterialCommunityIcons
                        name="arrow-right-thin"
                        size={18}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ) : (
            <View>
              {console.log("index",index)}
              {index > 0 ? (
                <View>
                  {paper.map(item => {
                    return (
                      <View style={[styles.dropdownview1]}>
                        <View style={{}}>
                          <MaterialCommunityIcons
                            name="clock-time-nine-outline"
                            size={32}
                            color="#b8860b"
                            style={{marginHorizontal: 5, marginTop: 0}}
                          />
                        </View>
                        <View style={{marginLeft: 0, width: '65%'}}>
                          <Text style={{fontSize: 13, color: '#111'}}>
                            {item.paper}
                          </Text>
                          <Text style={{color: '#111', fontSize: 13}}>
                            Attempts: 145
                          </Text>
                          <Text
                            style={{
                              marginLeft: 0,
                              fontSize: 13,
                              color: '#444',
                            }}>
                            10 Q : 10.0 mins
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#b8860b',
                            paddingVertical: 0,
                            borderRadius: 5,
                            alignItems: 'center',
                            width: 65,
                            height: 30,
                            flexDirection: 'row',
                            alignSelf: 'center',
                          }}>
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 16,
                              color: '#fff',
                            }}>
                            Start
                          </Text>
                          <MaterialCommunityIcons
                            name="arrow-right-thin"
                            size={18}
                            color="#fff"
                            style={{}}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              ) : (
                <View>
                  {Allpaper.map(item => {
                    return (
                      <View style={[styles.dropdownview1]}>
                        <View style={{}}>
                          <MaterialCommunityIcons
                            name="clock-time-nine-outline"
                            size={32}
                            color="#b8860b"
                            style={{marginHorizontal: 5, marginTop: 0}}
                          />
                        </View>
                        <View style={{marginLeft: 0, width: '65%'}}>
                          <Text style={{fontSize: 13, color: '#111'}}>
                            {item.paper}
                          </Text>
                          <Text style={{color: '#111', fontSize: 13}}>
                            Attempts: 145
                          </Text>
                          <Text
                            style={{
                              marginLeft: 0,
                              fontSize: 13,
                              color: '#444',
                            }}>
                            10 Q : 10.0 mins
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#b8860b',
                            paddingVertical: 0,
                            borderRadius: 5,
                            alignItems: 'center',
                            width: 65,
                            height: 30,
                            flexDirection: 'row',
                            alignSelf: 'center',
                          }}
                          onPress={() => navigation.navigate('Quizque',{paperdata:item})}
                          >
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 16,
                              color: '#fff',
                            }}>
                            Start
                          </Text>
                          <MaterialCommunityIcons
                            name="arrow-right-thin"
                            size={18}
                            color="#fff"
                            style={{}}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          )}
        </View>

        <View style={{marginTop: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default Quiz;

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
    fontWeight: 'bold',
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
    paddingTop: 5,
    alignItems: 'center',
  },
  gohomeicon: {
    marginLeft: 10,
  },
  icon3: {
    color: '#b8860b',
    fontSize: 22,
    marginLeft: 15,
  },
  suggestiontext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#444444',
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
    backgroundColor: '#ffffff',
  },
  dropdownview: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    elevation: 5,
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
    backgroundColor: '#fff',
  },
  dropdownview1: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginLeft: 17,
    borderRadius: 10,
    width: '95%',
    height: 100,
    alignSelf: 'center',
    paddingVertical: 4,
    marginTop: 10,
    // borderColor: 'lightgray',
    // zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#fff',
    // paddingBottom:40
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
    marginTop: 50,
  },
  btnContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // marginVertical:20
  },
  elevation: {
    shadowOffset: {width: 10, height: 0},
    shadowColor: '#ffffff',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 3,
  },
  btn: {
    // borderColor: '#99B83C',
    borderBottomWidth: 2,
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
    // backgroundColor: '#444444',
    alignItems: 'center',
    height: 45,
    // width: 15,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 15,
    // fontWeight: 'bold',
  },
  icon1: {
    color: '#111',
    fontSize: 20,
    marginRight: 5,
    marginLeft: 265,
  },
  searchbar: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    top: 0,
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // marginTop: 10,
    fontSize: 14,
    backgroundColor: '#fff',

    // alignSelf: 'center',
  },
  searchview: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: 50,
    width: '95%',
    // alignSelf: 'center',
    paddingVertical: 0,
    marginTop: 15,
    //   borderColor:'lightgray',
    // zIndex:100,
    //   borderWidth:1,
    backgroundColor: '#fff',
    marginLeft: 0,
    marginBottom: 15,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 30,
    backgroundColor: '#b8860b',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'center', fontSize: 15},
  dropdown1DropdownStyle: {backgroundColor: '#fff', borderRadius: 10},
  dropdown1RowStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    borderRadius: 10,
  },
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'center'},
  dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
});