import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from "react-native-elements";
import FontAwsome from "react-native-vector-icons/FontAwesome" 

import Categories from "../screens/Categories";
import NewPost from "../screens/NewPost"




const Tab = createBottomTabNavigator();

const Navbar = (props) => {
    return ( 
        <Tab.Navigator
        
            screenOptions = 
            {{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveBackgroundColor: "#3cad9b",
                tabBarStyle: {
                    backgroundColor: "#0b9882",
                    height: 60
                }


            }}          
             
            // initialRouteName = "Welcome"
            // activeTintColor = { colors.test }
            
            // barStyle = {{ backgroundColor: colors.primary,
            //     height: 70,
                

            
            //  }}
            >
            <Tab.Screen 
                name = {"Explore"}
                component = { Categories }
                options = {{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='compass'
                            type='font-awesome'
                            color= "#FFFFFF"
                            size = {50}
                        /> )
                }}
            />
            <Tab.Screen 
                name = {"NewPost"}
                component = { NewPost }
                options = {{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='plus'
                            type='font-awesome'
                            color= "#FFFFFF"
                            size = {50}
                        />
                    )}}
            />
            {/* <Tab.Screen 
                name = {"Explore"}
                component = { Categories }
                options = {{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='compass'
                            type='font-awesome'
                            color= {color}
                            size = {50}
                        />
                    ), 
                    tabBarLabel: false,
                    
                
                }}
                
            />
            <Tab.Screen 
                name = {"New"}
                component = {Sport}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='plus'
                            type='font-awesome'
                            color= {color}
                            size = {50}
                        />
                    ), 
                    tabBarLabel: false
                }}
            /> */}
        </Tab.Navigator>
     );
}

export default Navbar;