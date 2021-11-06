import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import MyCheckbox from "../components/checkbox";




const BookAndPay = (props) => {
    const nav = useNavigation();
    
   
    return(
        <ScrollView style = { styles.Background }>
            {/* Banner */}
            <View style = { styles.bannerContainerContainer }>
                <View style = { styles.bannerContainer }>
                    <View style = { styles.banner }>
                        <Text style = { styles.bannerText }>
                            Boka och betala
                        </Text>
                    </View>
                </View>
            </View>

            <View styles = { styles.titleContainer }>
                <Text style = { styles.title }> 
                    Utyharen har godkänt din förfrågan!
                </Text>
            </View>

            <View styles = { styles.checkboxContainerContainer}>
                <Text style = { styles.checkboxContainerTitle }>
                    Välj leveransalternativ:
                </Text>
                <View style = { styles.checkboxContainer}>
                <MyCheckbox/>
                    <View style = { styles.checkboxLabelContainer }>
                        <Text style = { styles.checkboxLabel }>Boka bud</Text>
                    </View>
                </View>
                <View style = { styles.checkboxContainer}>
                    <MyCheckbox/>
                    <View style = { styles.checkboxLabelContainer }>
                        <Text style = { styles.checkboxLabel }>Hämta själv</Text>
                    </View>
                </View>
            </View>
            <View styles = { styles.checkboxContainerContainer}>
                <Text style = { styles.checkboxContainerTitle }>
                    Betala med:
                </Text>
                <View style = { styles.checkboxContainer}>
                <MyCheckbox/>
                    <View style = { styles.checkboxLabelContainer }>
                        <Text style = { styles.checkboxLabel }>Swish</Text>
                    </View>
                </View>
                <View style = { styles.checkboxContainer}>
                <MyCheckbox/>
                    <View style = { styles.checkboxLabelContainer }>
                        <Text style = { styles.checkboxLabel }>Kontantkort</Text>
                    </View>
                </View>
            </View>
            <Pressable 
                style = { styles.Button }
                onPress = { () => nav.navigate("Categories")}
                >
                    <Text style = { styles.ButtonText }>
                        Boka och betala
                    </Text>
            </Pressable>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    Background: {
        backgroundColor: colors.primaryLight,
    },
    banner: {
        width: "100%",
        height: 70,
        backgroundColor: colors.peach,
        position: "absolute",
        top: 55,
        zIndex: 10,
        
    },
    bannerContainer: {
        paddingTop: 60,
        backgroundColor: colors.primaryLight,
        
    },  
    bannerContainerContainer: {
        //elevation: 15,
        //backgroundColor: "transparent",
        paddingBottom: 60
        
    },  
    bannerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        marginTop: 12,
        zIndex: 10,
        paddingLeft: 10
    },
    Button: {
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: colors.primary,
        borderRadius: 10,
        height: 70,
        justifyContent: "center",
        marginVertical: 30,
        width: Dimensions.get("screen").width -44,
    },
    ButtonText: {
        alignContent: "center",
        alignSelf: "center",
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold"
    },
    checkboxContainer: {
        backgroundColor: colors.white,
        flexDirection: "row",
        paddingLeft: 10
    },
    checkboxContainerContainer: {

    },checkboxContainerTitle: {
        fontSize: 20,
        color: colors.txtColor,
        textDecorationLine: "underline",
        paddingLeft: 10
    },
    checkboxLabel: {
        color: colors.txtColor,
        paddingLeft: 5
        
    },
    checkboxLabelContainer: {
        paddingTop: 8
        
    },
    title: {
        fontSize: 25,
        padding: 20,
        textAlign: "center" 
    },
    titleContainer: {
        backgroundColor: colors.test,
        padding: 20,
        
    },
})

export default BookAndPay;