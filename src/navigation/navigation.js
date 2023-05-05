// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mainpage from '../Screens/MainPage/Mainpage';
import My_Userprofile from '../Screens/Profile/My_Userprofile';
import Drawernavigation from './Drawernavigation';
import Drawercontent from '../Components/Drawercontent';
// import {AuthContext} from "./Navigation"
import Notificationpage from '../Screens/MainPage/Notificationpage';
import Home from '../Screens/MainPage/Home';
import SelectCategory from '../Screens/MainPage/SelectCategory';
import Playlist from '../Screens/MainPage/Playlist';
import Downloads from '../Screens/MainPage/Downloads';
import Offers from '../Screens/MainPage/Offers';
import Help from '../Screens/MainPage/Help';
import Offlinecourse from '../Screens/Courses/Offlinecourse';
import Recordedcourse from '../Screens/Courses/Recordedcourse';
import Onlineclass from '../Screens/Courses/Onlineclass';
import Freecourses from '../Screens/Courses/Freecourses';
import Booksandnotes from '../Screens/Courses/Booksandnotes';
import Testseries from '../Screens/Courses/Testseries';
import Studymaterials from '../Screens/Courses/Studymaterials';
import Previousyear from '../Screens/Courses/Previousyear';
import Practicequestions from '../Screens/Courses/Practicequestions';
import Quiz from '../Screens/Courses/Quiz';
import Currentaffairs from '../Screens/Courses/Currentaffairs';
import Livetest from '../Screens/Courses/Livetest';
import Coursedetails from '../Screens/MainPage/Coursedetails';
import PDFview from '../Screens/MainPage/PDFview';
import Queofpracticeque from '../Screens/MainPage/Queofpracticeque';
import Studymaterials2 from '../Screens/MainPage/Studymaterials2';
import Studymaterials3 from '../Screens/MainPage/Studymaterials3';
import Signup from '../Screens/MainPage/Signup';
import Previousyear2 from '../Screens/MainPage/Previousyear2';
import Login from '../Screens/MainPage/Login';
import Previousyear3 from '../Screens/MainPage/Previousyear3';
import VerifyOtp from '../Screens/MainPage/VerifyOtp';
import Splashscreen from '../Screens/MainPage/Splashscreen';
import Quizque from '../Screens/MainPage/Quizque';
import Jobdetails from '../Screens/Courses/Jobdetails';

// import Settings1 from './src/Screens/Settings/Settings1';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Mainnavigation({ navigation }) {
    return (

        <Stack.Navigator 
        initialRouteName='Splashscreen'
        screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
        }}>
            <Stack.Screen name="Drawernavigation" options={{headerShown: false,}} component={Drawernavigation} />
           

            <Stack.Screen name="My_Userprofile" component={My_Userprofile}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Notificationpage" component={Notificationpage}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Home" component={Home}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="SelectCategory" component={SelectCategory}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Playlist" component={Playlist}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Downloads" component={Downloads}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Offers" component={Offers}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Help" component={Help}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Offlinecourse" component={Offlinecourse}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Recordedcourse" component={Recordedcourse}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Onlineclass" component={Onlineclass}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Freecourses" component={Freecourses}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Booksandnotes" component={Booksandnotes}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Testseries" component={Testseries}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Studymaterials" component={Studymaterials}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Previousyear" component={Previousyear}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Practicequestions" component={Practicequestions}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Quiz" component={Quiz}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Currentaffairs" component={Currentaffairs}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Livetest" component={Livetest}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Coursedetails" component={Coursedetails}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="PDFview" component={PDFview}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Queofpracticeque" component={Queofpracticeque}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Studymaterials2" component={Studymaterials2}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Studymaterials3" component={Studymaterials3}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Signup" component={Signup}
                options={{
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Previousyear2" component={Previousyear2}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Login" component={Login}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Previousyear3" component={Previousyear3}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="VerifyOtp" component={VerifyOtp}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Splashscreen" component={Splashscreen}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Quizque" component={Quizque}
                options={{
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Jobdetails" component={Jobdetails}
                options={{
                    animation: 'slide_from_left'
                }}
            />
    {/* <Stack.Screen name='Settings1' component={Settings1}/> */}
</Stack.Navigator>
    );
}

export default Mainnavigation;
