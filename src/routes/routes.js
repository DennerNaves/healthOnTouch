import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../pages/login/login";
import Main from "../pages/main/main";


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Main' component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
}