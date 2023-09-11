import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const profileScreen=()=>{
    const user=auth.currentUser
    const navigation=useNavigation()

    const signOutUser=()=>{
        signOut(auth).then(()=>{
            navigation.replace("Login")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <SafeAreaView style={{
            flex:1,
        alignItems:'center',
        justifyContent:'center'}}>
            <Text style={{
                fontSize:16,
                fontWeight:"600",

            }}>
                profileScreen
            </Text>
            <Text>
                welcome {user.email}
            </Text>
            <Pressable 
            style={{
                width:200,
                backgroundColor:"#318CE7",padding:15,
                borderRadius:7,
                marginTop:50,
                marginLeft:'auto',
                marginRight:'auto'
            }}
            onPress={signOutUser}>
                <Text style={{
                            fontSize:18,
                            textAlign:'center',
                            color:'white'}}
                >
                    SignOut
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default profileScreen
const styles = StyleSheet.create({});