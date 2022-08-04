import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/colors";

export const Title =()=>{
    return(
        <View style={styles.container}>

        <Text style={{fontFamily:"Roboto-Bold",fontSize:20,color:COLORS.white}}>Recent Searches</Text>
        </View>
        );
}
const styles=StyleSheet.create({
    container:{
        borderBottomColor:COLORS.sun,
        borderBottomWidth :2,
        alignSelf:"flex-start",
        padding:7,
        margin:5,

    }
})
