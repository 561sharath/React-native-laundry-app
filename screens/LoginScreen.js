import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const LoginScreen=()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigation=useNavigation()

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                navigation.navigate("Home")
            }
        })

        return unsubscribe
   },[])

    const login=()=>{
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log(userCredential)
            const user=userCredential.user
            console.log(user)
        })
    }

    
    return(
    <SafeAreaView style={{flex:1,
        backgroundColor:"white",
        alignItems:'center',
        padding:10,

    marginTop:40}}> 
        <KeyboardAvoidingView>
            <View style={{justifyContent:'center',
            alignItems:'center',
            marginTop:100,
        
        }}>
                <Text style={{
                    fontSize:20,
                    color:'#662d91',
                    fontWeight:'bold',
                    
                }}>
                    Sign In
                </Text >
                <Text style={{
                    fontSize:18,
                    marginTop:8,
                    fontWeight:"600",
                }}>
                    Sign Into Your Account
                </Text>
            </View>
                <View style={{marginTop:50}}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>

                    <MaterialCommunityIcons name="email-outline" size={34} color="black" />
                    <TextInput placeholder="Email" 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    placeholderTextColor="black"
                    style={{
                        borderWidth:0.5,
                        borderBottomColor:'grey',
                        width:300,
                        marginVertical:10,
                        marginLeft:10,
                        padding:7,
                        
                    }}/>

                    </View>

                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>

                    <Ionicons name="key-outline" size={34} color="black" />
                    <TextInput placeholder="Password" 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    style={{
                        borderWidth:0.5,
                        borderBottomColor:'grey',
                        width:300,
                        marginVertical:10,
                        marginLeft:10,
                        padding:7,
                        
                    }}/>

                    </View>

                    <Pressable onPress={login}
                    style={{
                        width:200,
                        backgroundColor:"#318CE7",padding:15,
                        borderRadius:7,
                        marginTop:50,
                        marginLeft:'auto',
                        marginRight:'auto'
                

                    }}>
                        <Text style={{
                            fontSize:18,
                            textAlign:'center',
                            color:'white'
                        }}>
                            Login
                        </Text>
                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate("Register")}
                    style={{marginTop:20}}>
                        <Text style={{
                            textAlign:'center',
                            color:'grey',
                            fontWeight:"600",

                        }}>
                            Don't have an account? Sign Up
                        </Text>
                    </Pressable>
                </View>

                
            
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}


export default LoginScreen

const styles = StyleSheet.create({});