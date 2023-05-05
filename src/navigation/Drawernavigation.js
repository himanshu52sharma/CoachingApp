// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mainpage from '../Screens/MainPage/Mainpage';
import My_Userprofile from '../Screens/Profile/My_Userprofile';
import Topnavbar from '../Components/Topnavbar';
import Drawercontent from '../Components/Drawercontent';
// import {AuthContext} from "./Navigation"
import Home from '../Screens/MainPage/Home';
import Playlist from '../Screens/MainPage/Playlist';
import Notificationpage from '../Screens/MainPage/Notificationpage';
import Downloads from '../Screens/MainPage/Downloads';
import Offers from '../Screens/MainPage/Offers';


// import Settings1 from './src/Screens/Settings/Settings1';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Drawernavigation({ navigaion }) {
  return (
    // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Navigator  Options={{
      headerShown:false
    }} drawerContent={props => <Drawercontent {...props}/>} 
   >
      <Drawer.Screen options={{headerShown:false,header: props => <Topnavbar  {...props}  />,}} name="Mainpage" component={Mainpage} />
      <Drawer.Screen options={{headerShown:false,header: props => <Topnavbar  {...props}  />,}} name="Home" component={Home} />
      <Drawer.Screen options={{header: props => <Topnavbar {...props} />,}} name="Playlist" component={Playlist} />
      <Drawer.Screen options={{header: props => <Topnavbar {...props} />,}} name="Notificationpage" component={Notificationpage} />
      <Drawer.Screen options={{header: props => <Topnavbar {...props} />,}} name="Downloads" component={Downloads} />
      <Drawer.Screen options={{header: props => <Topnavbar {...props} />,}} name="Offers" component={Offers} />
      


      {/* <Drawer.Screen name="My_Userprofile" component={My_Userprofile} /> */}
    </Drawer.Navigator>


  );
}

export default Drawernavigation;
