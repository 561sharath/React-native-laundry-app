import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carouser = ()=>{
    const images=[
        "https://img.freepik.com/free-vector/laundry-room-equipment-wash-dry-clothes-cartoon-set-washing-machine-basket-detergent-bottles-powder-rope-with-hanging-underwear-shirts-isolated-white-wall_107791-5924.jpg",
        "https://t3.ftcdn.net/jpg/01/02/30/38/360_F_102303854_IituC6UgJ58EkK6SXJqTkgDAl4W6MOVU.jpg",
        "https://reviewed-com-res.cloudinary.com/image/fetch/s--WsgpFCd6--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1627909735000/1.png",
        "https://i.pinimg.com/originals/aa/ed/2a/aaed2a08af68fb31ee31d7e472fcea72.jpg",

    ]
    return(
        <View>
            <SliderBox 
            images={images} 
            autoplay 
            circleLoop 
            dotColor={'#13274f'}
            inactiveDotColor="#90a4ae" 
            ImageComponentStyle={{
                borderRadius:6,
                width:"94%"
            }}/>
        </View>
    )
}

export default Carouser