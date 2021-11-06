import React, { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import MyCheckbox from "../components/checkbox";



const NewPost = (props) => {
    const nav = useNavigation();
    const [text, setText] = useState('');
    return(
       <ScrollView style = { styles.Background }>
            {/* Banner */}
            <View style = { styles.bannerContainerContainer }>
                <View style = { styles.bannerContainer }>
                    <View style = { styles.banner }>
                        <Text style = { styles.bannerText }>
                            Lägg upp annons
                        </Text>
                    </View>
                </View>
            </View>

            {/**Kategorier */}
            <View style = { styles.container }>
                <Text style = { styles.title }>
                    1. Kategori
                </Text>
                <View style = { styles.inputNormal }>
                    <TextInput 
                        placeholder = "Kategori"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input}
                    />
                </View>
            </View>

            {/**Beskriv varan */}
            <View style = { styles.container}>
                <Text style = { styles.title }>
                    2. Beskriv varan
                </Text>
                <View style = { styles.inputNormal }>
                    <TextInput 
                        placeholder = "Rubrik"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input }
                    />
                </View>
                <View style = { styles.emptySpace }/>
                <View style = { styles.inputBig }>
                    <TextInput
                        multiline 
                        placeholder = "Beskrivning"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input }
                    />
                </View>
            </View>

            {/**bilder */}
            <View style = { styles.container }>
                <Text style = { styles.title }>
                    3. Bilder
                </Text>
                <Pressable > 
                        <Icon 
                            name='camera'
                            type='font-awesome'
                            color= {colors.peach}
                            size = {50}
                        /> 
                </Pressable>
            </View>
            {/**pris */}
            <Text style = { styles.title }>
                    4. Pris
                </Text>
                <View style = { styles.inputNormal }>
                    <TextInput 
                        keyboardType = "number-pad"
                        placeholder = "Pris per dag"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input }
                    />
                    <TextInput 
                        keyboardType = "number-pad"
                        placeholder = "Pris för 3 dagar"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input }
                    />
                    <TextInput 
                        
                        placeholder = "Pris för 5 dagar"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input }
                    />
                </View>

            {/**alternativ för upphämtning */}
            <View style = { styles.container }>
                <Text style = { styles.title }>
                    5. Alternativ för upphämtning
                </Text>
                <View style = { styles.checkboxContainer}>
                <Checkbox/>
                <View style = { styles.checkboxLabelContainer }>
                <Text style = { styles.checkboxLabel }>Upphämtning</Text>
                <TextInput
                    defaultValue = {text}
                    onChangeText = { text => setText(text)}
                    placeholder = "Adress"
                    style = { styles.addressInput }
                    />
                     {/* <Text style={{padding: 10, fontSize: 42}}>
                        {text.split(' ').map((word) => word && text).join(' ')}
                    </Text> */}
                </View>
                </View>
                <View style = { styles.checkboxContainer}>
                <MyCheckbox/>
                <View style = { styles.checkboxLabelContainer }>
                <Text style = { styles.checkboxLabel }>Leverans</Text>
                </View>
                </View>
                    <Text style = { styles.deliveryText }>
                        Splendid erbjuder användare ett miljövänligt
                        leveransalternativ för att göra lånadet mer 
                        tillgänligt för de som saknar möjligheter för 
                        upphämtning. {"\n"}
                        Se hur vi arbetar genom att följa länken. 
                    </Text>
                    <Pressable style = { styles.deliveryTextLinkContainer }>
                        <Text style = { styles.deliveryTextLink }>
                            Läs om vår leveransprocess -> 
                        </Text>
                        <Image 
                            source = {{ uri: "https://previews.123rf.com/images/yevgenijd/yevgenijd1708/yevgenijd170800003/83237779-ecology-logo-eco-world-symbol-icon-eco-friendly-concept-for-company-logo-vector.jpg" }}
                            style = { styles.img }
                        />
                    </Pressable>
            </View>

            {/**vilkor för avbokning */}
            <View style = { styles.container }>
                <Text style = { styles.title }>
                    6. Vilkor för avbokning
                </Text>
                <View style = { styles.inputNormal }>
                    <TextInput 
                        placeholder = "Vilkor"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input}
                    />
                </View>
            </View>

            {/**produkten värde */}
            <View style = { styles.container }>
                <Text style = { styles.title }>
                    7. Produktens Värde
                </Text>
                <View style = { styles.inputNormal }>
                    <TextInput 
                        keyboardType = "number-pad"
                        placeholder = "Värde"
                        placeholderTextColor = { colors.txtColor }
                        style = { styles.input}
                    />
                </View>
            </View>

            {/**publisera knapp */}

            <Pressable 
                    style = { styles.Button }
                    onPress = { () => nav.navigate("Categories")}>
                    <Text style = { styles.ButtonText }>
                        Publisera annons
                    </Text>
            </Pressable>

       </ScrollView>
    );
};

const styles = StyleSheet.create({
    addressInput: {
        paddingLeft: 5
    },
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
        paddingLeft: 14
    },
    checkboxLabel: {
        color: colors.txtColor,
        paddingLeft: 5
        
    },
    checkboxLabelContainer: {
        paddingTop: 8
        
    },
    container: {
        paddingTop: 20,
        
    },
    deliveryText: {
        backgroundColor: colors.white,
        color: colors.txtColor,
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    deliveryTextLink: {
        color: colors.primary,
        fontSize: 15,
        backgroundColor: colors.white,
        
    },
    deliveryTextLinkContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.white,
    },
    emptySpace: {
        backgroundColor: colors.primaryLight,
        padding: 8,
    },
    img: {
        height: 50,
        aspectRatio: 1/1
    },
    input: {
        color: colors.txtColor,
        fontSize: 17,
        marginVertical: 5,
    },
    inputBig: {
        backgroundColor: colors.white,
        paddingLeft: 10,
        paddingBottom: 18,       
        textAlignVertical: "top",

    },
    inputNormal: {
        backgroundColor: colors.white,
        paddingLeft: 10,
    },
    title: {
        color: colors.txtColor,
        fontSize: 18,
        paddingLeft: 10,
        paddingBottom: 10,
    }
})

export default NewPost;