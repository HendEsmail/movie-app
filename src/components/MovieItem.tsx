import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/colors";


interface Props {
    data: {Poster: string,
            Title: string,
            Type: string,
            Year: string,
            imdbID: string} 
  }

export const MovieItem =(props:Props)=>{
   
    return(
        <View style={styles.container}>
            <View style={styles.ContentContainer}>

            <Text style={styles.title}>{props.data.Title}</Text>
            <Text style={styles.release}>Released:{props.data.Year}</Text>
         </View>
            <View style={styles.ImageContainer}>

            <Image style={{width:100,height:130,borderRadius:10}} source={{uri:props.data.Poster}}/>
            </View>
          </View>
             
    )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:10,
    },
    ImageContainer:{
        position: 'absolute',
        marginHorizontal:10,
        

},
    ContentContainer:{
        backgroundColor:COLORS.spaceCadet,
        position:"relative",
        marginTop:40,
        height:120,
        borderRadius:10,
       
        
    },
    title:{
        marginLeft:130,
        marginTop:10,
        color:COLORS.white,
        fontFamily:"IBMPlexSans-Bold",
        fontSize:20

    },
    release:{
        marginLeft:130,
        marginTop:5,
        color:COLORS.white,
        fontFamily:"Montserrat-Regular",
        fontSize:10

    }
})