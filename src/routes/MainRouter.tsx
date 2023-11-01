import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Login from "@screens/Login/Login";
import Register from "@screens/Register/Register";
import MainFlow from "./MainFlow";
import LoadingScreen from "@screens/LoadingScreen/LoadingScreen";
import ForgotPassword from "@screens/ForgotPassword/ForgotPassword";

interface ComponentNameProps {

}


const Stack = createNativeStackNavigator();

export default function ComponentName(props: ComponentNameProps) {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                >
                <Stack.Screen 
                    name="LoadingScreen"
                    component={LoadingScreen}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    name="MainFlow"
                    component={MainFlow}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}