import { StyleSheet, Text, View,SafeAreaView, Alert, Pressable,Image, 
    TextInput,ScrollView} from "react-native";

import React from "react";
import * as Loaction from "expo-location"
import { useEffect } from "react";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Carouser from "../components/Carouser";
import Services from "../components/Services";
import DressItems from "../components/DressItems";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, incrementQuantity } from "../ProductReducer";
import { addToCart } from "../CartReducer";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = ()=>{
    const cart=useSelector((state)=>state.cart.cart)
    const total=cart.map((item)=>
    item.quantity*item.price).reduce((curr,prev)=>
    curr+prev,0)

    const navigation=useNavigation()
    //console.log(cart)
    const dispatch=useDispatch()
    const [displayCurrentAddress,setdisplayCurrentAddress]=useState("we are loading your loaction")
    const [loactionServicesEnabled,setloactionServicesEnabled]=useState(false)

    
    useEffect(()=>{
        checkIfLocationEnabled()
        getCurrentLoaction()
    },[])
    const checkIfLocationEnabled=async()=>{
        let enabled=await Loaction.hasServicesEnabledAsync();
        if (!enabled){
            Alert.alert(
                "Loacation services ara not enabled",
                "please enable the Loaction services",[
                    {
                        text:"cancel",
                        onPress:()=>console.log("ok pressed"),
                        style:"cancel"
                    },
                    {text:"ok",onPress:()=>console.log("ok pressed")}
                ],
                {cancelable:false}
            )
        }
        else{

            setloactionServicesEnabled(enabled)

        }
    }

    const getCurrentLoaction=async()=>{
        let {status}=await Loaction.requestForegroundPermissionsAsync()

        if (status!=="granted"){

            Alert.alert(
                "permission not graunted",
                "Allow app to use the Loaction services",[
                    {
                        text:"cancel",
                        onPress:()=>console.log("ok pressed"),
                        style:"cancel"
                    },
                    {text:"ok",onPress:()=>console.log("ok pressed")}
                ],
                {cancelable:false}
            )

        }
        const {coords} = await Loaction.getCurrentPositionAsync()
        //console.log(coords)
        if (coords){
            const {latitude,longitude}=coords
            let response = await Loaction.reverseGeocodeAsync({
                latitude,
                longitude
            })

            //console.log(response)

            for(let item of response){
                let address = `${item.name},${item.city},${item.postalCode}`
                setdisplayCurrentAddress(address)
            }
        }
    };

    const product=useSelector((state)=>state.product.product)
    useEffect(()=>{

        if(product.length >0) return

        const fecthProducts=()=>{
            services.map((service)=>
            dispatch(getProducts(service)))
        }
        fecthProducts()

    },[])

    //console.log(product)

    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
          name: "shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
          name: "T-shirt",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
          name: "dresses",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
          name: "jeans",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
          name: "Sweater",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
          name: "shorts",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
          name: "Sleeveless",
          quantity: 0,
          price: 10,
        },
      ];


    return(
        <>
        <ScrollView style={{marginTop:30}}>
            {/* Loaction and profile*/}
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="location" size={30} color="#fd5c63" />
                <View>
                    <Text style={{fontSize:18,fontWeight:"600"}}>Home</Text>
                    <Text>{displayCurrentAddress}</Text>
                </View>
                
                <Pressable onPress={()=>navigation.navigate("profileScreen")}
                style={{marginLeft:"auto",marginRight:7}}>
                    <Image 
                    style={{width:40,height:40,borderRadius:25}}
                    source={{uri:'https://yt3.ggpht.com/6AXwQypoSUMC2pBBR2ioE9j3L4a4kYZrbV05whP9RbmUAgBIgQ8FxVRRwBHoGx7dliTAEf0tHQ=s88-c-k-c0x00ffffff-no-rj'}} />
                </Pressable>
            </View>

            {/* serach bar*/}

            <View style={{
            padding:10,
            margin:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            borderWidth:0.8,
            borderColor:'#c0c0c0',
            borderRadius:7


            
            }}>
                <TextInput placeholder="serach for items"/>
                <Feather name="search" size={24} color="#fd5c63" />
            </View>

            <Carouser />

            <Services />
            

            {product.map((item,index)=>(
                    <DressItems item={item} key={index} />
                ))}
            </ScrollView>
        
            {total=== 0 ? (
                null
            ):(
                <Pressable style={{backgroundColor:"#088F8F",
        padding:10,
        marginBottom:20,
        margin:5,
        borderRadius:7,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    
    }}>
            <View>
                <Text style={{
                    fontSize:17,
                    fontWeight:"600",
                    color:'white',

                }}
                >{cart.length} items | ${total}</Text>
                    <Text style={{
                        fontSize:10,
                        fontWeight:"400",
                        color:'white',
                        marginVertical:6
                    }}
                    >
                        extra charges might apply
                    </Text>
                
            </View>

            <Pressable onPress={()=>navigation.navigate("pickup")}>
                <Text style={{
                    fontSize:15,
                    fontWeight:'600',
                    color:'white'
                }}>Proceed to Pickup</Text>
            </Pressable>
        </Pressable>

            )}


        
        </>
    )
}

export default HomeScreen