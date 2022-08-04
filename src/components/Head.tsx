import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {COLORS} from "../theme/colors";



export const Head =()=>{
    return(
        <View>

        <View style={styles.container}>
            <TextInput style={styles.Input} placeholder="Enter Movie Name ..." onChangeText={()=>{}}  placeholderTextColor={COLORS.sun}></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontFamily:"Montserrat-Medium",fontSize:20,color:COLORS.sun}}>Search</Text>
          </TouchableOpacity>
        </View>
        </View>
    ); 
}


const styles =StyleSheet.create({
    container:{
        
        flexDirection:"row",
      
       
    },
    Input:{
        flex:1,
       borderRightColor:COLORS.sun,
       backgroundColor:COLORS.spaceCadet,
       borderTopLeftRadius:5,
       borderBottomLeftRadius:5,
       borderRightWidth:2,
       fontFamily:"Montserrat-Medium",
       color:COLORS.white,
       fontSize:15
    },
    btn:{
        backgroundColor:COLORS.cloudBurst,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        width:70
    }
})

