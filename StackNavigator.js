import { StyleSheet, Text } from "react-native";

import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import PickUpScreen from "./screens/PickUpScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import profileScreen from "./screens/profileScreen";
import orderSuccess from "./screens/orderSuccess";

const StackNavigator=()=>{
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="pickup" component={PickUpScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={CartScreen} 
        options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} 
        options={{headerShown:false}}/>

      <Stack.Screen name="profileScreen" component={profileScreen} 
              options={{headerShown:false}}/>
      <Stack.Screen name="orderSuccess" component={orderSuccess} 
              options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default  StackNavigator