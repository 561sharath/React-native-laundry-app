import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View ,Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import { auth, db } from "../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const RegisterScreen=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const navigation=useNavigation()
    const register=()=>{
        if(email==="" || password==="" || phone===""){
            Alert.alert('Invalid Details', 'Please fill all the details', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);

        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log("user credentials",userCredential)
            const user=userCredential._tokenResponse.email
            const myUserUid=auth.currentUser.uid

            setDoc(doc(db,"users",`${myUserUid}`),{
                email:user,
                phone:phone
            }
            )
            
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
                    Register
                </Text >
                <Text style={{
                    fontSize:18,
                    marginTop:8,
                    fontWeight:"600",
                }}>
                    Create a new Account
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


                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>

                    <Feather name="phone" size={34} color="black" />
                    <TextInput placeholder="Phone Number" 
                    value={phone}
                    onChangeText={(text)=>setPhone(text)}
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

                    <Pressable onPress={register}
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
                            Register
                        </Text>
                    </Pressable>

                    <Pressable onPress={()=>navigation.goBack()}
                    style={{marginTop:20}}>
                        <Text style={{
                            textAlign:'center',
                            color:'grey',
                            fontWeight:"600",

                        }}>
                            Already have an account? Sign In
                        </Text>
                    </Pressable>
                </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default RegisterScreen

const styles=StyleSheet.create({})