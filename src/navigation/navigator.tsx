import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";
import { COLORS } from "../theme/colors";

export type RootStackParamList = {
    Home: undefined;
    MovieDetails:{movie:{Poster: string,
        Title: string,
        Type: string,
        Year: string,
        imdbID: string} };
   
  };

const Stack = createNativeStackNavigator<RootStackParamList>();
export const Navigator =()=>{
    return(
        <NavigationContainer >

      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false,contentStyle:{backgroundColor:COLORS.oxfordBlue}}}
          // options={{ title: 'Welcome' }}
          />
        <Stack.Screen name="MovieDetails" component={MovieDetails}
          options={{title:"",headerTintColor:COLORS.sun,headerStyle:{backgroundColor:COLORS.spaceCadet},contentStyle:{backgroundColor:COLORS.oxfordBlue}}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
