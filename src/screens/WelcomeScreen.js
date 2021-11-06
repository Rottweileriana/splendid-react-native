import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native"
import { Icon } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

import colors from "../config/colors"

function WelcomeScreen(props) {
    const navigation = useNavigation();

    return (
        <View style = { styles.background }>
        <View style = { styles.banner }>
            <Text style = { styles.splendid }>
                SPLENDID
            </Text>
        </View>
        
        <View style = { styles.txtContainer }>
            <Text style = { styles.title }>Välkommen till Splendid!</Text>
            <Text style = { styles.bodyText }>Om du vill hyra prylar så har du kommit rätt. Allt du behöver tänka på är vad du vill hyra och så sköter vi resten. Du kan även hyra ut. </Text>
        </View>
        <View>
        <Pressable 
            style = { styles.startSearchButton }
            onPress = { () => navigation.navigate("Categories")}>
        <Text style = { styles.buttonText }>börja leta</Text>
        </Pressable>
        <View style = { styles.navbar }>
            <Pressable 
                style = { styles.explore}
                onPress = { () => console.log("explore")}
                >
                <Icon 
                    name='compass'
                    type='font-awesome'
                    color= {Colors.white}
                    size = {50}
                />
            </Pressable>
            
            <Pressable 
                style = { styles.newPost}
                onPress = { () => console.log("new")}
                >
                <Icon 
                    name='plus'
                    type='font-awesome'
                    color= {Colors.white}
                    size = {50}
                />
            </Pressable>
        </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primaryLight,
        justifyContent: "flex-end",
    },
    banner: {
        width: "100%",
        height: 70,
        backgroundColor: colors.peach,
        position: "absolute",
        top: 55,
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    explore: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 10,
        //marginLeft: 40,
        width: "50%",
        //backgroundColor: colors.peach,
    },
    navbar: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        flexDirection: 'row',
    },
    newPost: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "50%",
        //backgroundColor: colors.primaryDark,
        //marginLeft: 40
    },
    splendid: {
        color: colors.white,
        fontSize: 32,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 12,
    },
    startSearchButton: {
        width: Dimensions.get("screen").width - 50,
        height: 40,
        backgroundColor: colors.peach,
        alignSelf: "center",
        bottom: 55,
        borderRadius: 20
    },
    title: {
        fontSize: 25,
        
        color: colors.primaryDarkest,
        textAlign:"center",
        justifyContent: "center",

    },
    txtContainer: {
        width: "85%",
        height: "57%",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center"
    },
    bodyText: {
        color: colors.txtColor,
        fontSize: 18,
        marginTop: 15,
        lineHeight: 28,
        alignSelf: "center",
        textAlign: "center"
    }
    
    
    
    

})

export default WelcomeScreen;