
import React from "react";
import { StyleSheet, Text, View,Image, Pressable, SafeAreaView,navigation } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const orderSuccess=()=>{
    const navigation=useNavigation()
    return (
        <SafeAreaView style={{
            
            
            alignContent:'center',
            alignItems:'center',
            backgroundColor:'#ffffff',
            flex:1
        }}>
            
            <Text style={{
                marginTop:80,
                fontSize:17,
                fontWeight:'600',
                
            }}>

                Order Placed Successfully
            </Text>
           <Pressable>
            
            <Image style={{
                
                justifyContent:'center',
                marginTop:60,
                
                width:800,
                height:500,
            }}
            source={{uri:'https://www.onarprime.net/wp-content/uploads/2023/01/order.gif'}} />
                
              
            </Pressable>

            <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                
                  
                  name="arrow-back"
                  size={24}
                  color="black"
                />
                <Pressable onPress={()=>navigation.navigate("Home")}>
                <Text>Back to Home</Text>
                </Pressable>
              </View>

            
        </SafeAreaView>
    )
}

export default orderSuccess

const styles=StyleSheet.create({})