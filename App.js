

import React from 'react';
import {
  View,
  StatusBar,
  Text
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from './Src/Module/Dashboard';
import Update from './Src/Module/Update';
import UNit from './Src/Module/UNit';
import Inquire from './Src/Module/Inquire';
import DashboardSVG from './Src/Assets/Images/menu 1.svg'
import UpdateSvg from './Src/Assets/Images/post 1.svg'
import Unit from './Src/Assets/Images/edit 1.svg'
import Inq from './Src/Assets/Images/faq 1.svg'

const Tab = createMaterialBottomTabNavigator();
export default function BottomTab() {
  return (
    <View style={{flex:1 , }}>
      <StatusBar  backgroundColor={"#F9F9F9"}  barStyle={'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          shifting={false}
          barStyle={{ backgroundColor: '#fff' , height:80, justifyContent:"center" }}
          activeColor="#075595"
          inactiveColor="#959595"
        >
          <Tab.Screen
            name="Dashboard" component={Dashboard}
            options={{
              // title: "Dashboard",
              tabBarLabel: <Text style={{ fontSize: 10, marginTop:5 , lineHeight:18 , fontFamily:"Poppins-Medium" }}>Dashboard</Text>,
              tabBarIcon: ({ color }) => (
                <DashboardSVG  stroke={color} style={{color:color , marginTop:-5}  }  width={24} height={24} />
                // <AntDesign name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Update"
            component={Update}
            options={{
              tabBarLabel: <Text style={{ fontSize: 10, marginTop:5 , lineHeight:18 , fontFamily:"Poppins-Medium" }}>Project Update</Text>,

              tabBarIcon: ({ color }) => (
                <UpdateSvg  stroke={color} style={{color:color , marginTop:-5} }  width={24} height={24} fill='#fff' />

              ),
            }}
          />
          <Tab.Screen
            name="UNit"
            component={UNit}
            options={{
              tabBarLabel: <Text style={{ fontSize: 10, marginTop:5 , lineHeight:18 , fontFamily:"Poppins-Medium" }}>My Unit Detail</Text>,
              tabBarIcon: ({ color }) => (
                <Unit  stroke={color} style={{color:color , marginTop:-5} }  width={24} height={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Inquire"
            component={Inquire}
            options={{
              tabBarLabel: <Text style={{ fontSize: 10, marginTop:5 , lineHeight:18 , fontFamily:"Poppins-Medium" }}>Inquiries</Text>,
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ color }) => (
                <Inq  stroke={color} style={{color:color , marginTop:-5} }  width={24} height={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>

  )
}