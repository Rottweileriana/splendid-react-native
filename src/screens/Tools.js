import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Post from "../components/Post/post";
import data from "../assets/data/data";
import colors from "../config/colors";

const Tools = (props) => {
    const str = "tools"
    const arr = [str]
    
    let filteredData = data.filter(key => arr.includes(key.category))
    console.log(filteredData);
    
    // filteredData.filter(Filter)

    // function Filter(word) {
    //     return word == str
    // }
   
    return (
        <View style = { styles.Background }>
            {/* Banner */}
            <View style = { styles.bannerContainerContainer }>
                <View style = { styles.bannerContainer }>
                    <View style = { styles.banner }>
                        <Text style = { styles.bannerText }>
                            Verktyg
                        </Text>
                    </View>
                </View>
            </View>




            <FlatList
                data = { filteredData }
                renderItem = {({item}) => <Post post = { item } />}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    Background: {
        flex: 1,
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
        paddingBottom: 40,
        backgroundColor: colors.primaryLight,
        
    },  
    bannerContainerContainer: {
        elevation: 15,
        backgroundColor: "transparent",
        paddingBottom: 40
        
    },  
    bannerText: {
        color: colors.white,
        fontSize: 32,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 12,
        zIndex: 10,
    },
});

export default Tools;