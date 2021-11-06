import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Categories from "../screens/Categories";
import Sport from "../screens/Sport";
import Tools from "../screens/Tools";
import OnePost from "../screens/OnePost";
import Navbar from "./Navbar";
import NewPost from "../screens/NewPost";
import RenterAgreement from "../screens/RenterAgreement";
import CheckingOut from "../screens/CheckingOut"
import BookAndPay from "../screens/BookAndPay";

const Stack = createNativeStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen 
               name = { "Navbar" } 
               component = { Navbar }
               options = { { headerShown: false } }
                />
               <Stack.Screen 
               name = { "Welcome" } 
               component = { WelcomeScreen }
               options = { { headerShown: false } }
                />
               <Stack.Screen 
               name = { "Categories" } 
               component = { Categories }
               options = { { headerShown: false } }
                />
               <Stack.Screen 
               name = { "Sport" } 
               component = { Sport }
               options = { { headerShown: false } }
                />
               <Stack.Screen 
               name = { "Tools" } 
               component = { Tools }
               options = { { headerShown: false } }
                />
                <Stack.Screen 
                    name = { "Post" }
                    component = { OnePost }
                    options = { { headerShown: false } }
                />
                <Stack.Screen
                    name = { "NewPost" }
                    component = { NewPost }
                />
                <Stack.Screen
                    name = { "RenterAgreement" }
                    component = { RenterAgreement }
                    options = { { headerShown: false } }
                />
                <Stack.Screen
                    name = { "CheckingOut" }
                    component = { CheckingOut }
                    options = { { headerShown: false } }
                />
                <Stack.Screen
                    name = { "BookAndPay" }
                    component = { BookAndPay }
                    options = { { headerShown: false } }
                    />
           </Stack.Navigator>
       </NavigationContainer>
    );
};

export default Router;