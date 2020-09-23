//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

//import Screens
import Home from './screens/Home'
import Profile from './screens/Profile'
import Recent from './screens/Recent'

const Tab = createMaterialBottomTabNavigator();


// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='#02ad94'
        inactiveColor='#dedede'
        style={{ backgroundColor: '#000' }}
        barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: '', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={28} />
          )
        }} />
        <Tab.Screen 
        name="Recent" 
        component={Recent} 
        options={{
          tabBarLabel: '', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='camera-metering-spot' color={color} size={28} />
          )
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: '', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={28} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
