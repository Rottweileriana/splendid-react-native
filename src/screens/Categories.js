import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, ScrollView } from "react-native";
import colors from "../config/colors";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Post from "../components/Post/post";
import data from "../assets/data/data";


const Categories = (props) => {
    const nav = useNavigation();
return (
    <View style = { styles.background }>
        {/* Banner */}
        <View style = { styles.bannerContainerContainer }>
        <View style = { styles.bannerContainer }>
            <View style = { styles.banner }>
                <Text style = { styles.bannerText }>
                    SPLENDID
                </Text>
            </View>
        </View>
        </View>
        
        {/* Categories */}
        <View style = { styles.categoriesContainer }>
            <Text style = { styles.categoriesTitle }>Kategorier</Text>
            <View style = { styles.categoryTitleButtonContainerContainer }>
                    <Pressable 
                        style = { styles.categoryTitleButtonContainer }
                        onPress = { () => nav.navigate("Sport")}>
                        <View
                            
                            >
                            <Text style = { styles.categoryTitle }>Sport och fritid</Text>
                        </View>
                        <View>
                            <Icon 
                                name='angle-right'
                                type='font-awesome'
                                color= {colors.txtColor}
                                size = {25}
                            />
                        </View>
                    </Pressable>
                </View>
            <View style = { styles.categoryTitleButtonContainerContainer }>
                    <Pressable 
                        style = { styles.categoryTitleButtonContainer }
                        onPress = { () => nav.navigate("Tools")}>
                        <View>
                            <Text style = { styles.categoryTitle }>Verktyg</Text>
                        </View>
                        <View>
                            <Icon 
                                name='angle-right'
                                type='font-awesome'
                                color= {colors.txtColor}
                                size = {25}
                            />
                        </View>
                    </Pressable>
                </View>
        </View> 
        
       
        {/* Rekomenderade produkter */}
        <Text style = { styles.categoriesTitle }>Rekomenderade produkter</Text>
        <FlatList
                data = { data }
                renderItem = {({item}) => <Post post = { item } />}

            />
        
        {/* Navbar */}
        {/* <View style = { styles.navbar }>
            <Pressable 
                style = { styles.explore}
                onPress = { () => console.log("explore")}
                >
                <Icon 
                    name='compass'
                    type='font-awesome'
                    color= {colors.white}
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
                    color= {colors.white}
                    size = {50}
                />
            </Pressable>
        </View> */}
    </View>
)
};

const styles = StyleSheet.create({
background: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    
    //justifyContent: "flex-end",
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
categoriesContainer: {
    width: "100%" ,
    height: 150,
},
categoryTitle: {
    fontSize: 20,
    marginLeft: 10,
    color: colors.txtColor,
},
categoryTitleButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width - 10,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 10,
},
categoryTitleButtonContainerContainer: {
    backgroundColor:colors.white,
    width: "100%",
    elevation: 4,
    marginVertical: 2
},
categoriesTitle: {
    color: colors.primary,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    paddingTop: 25,
    paddingBottom: 13,        
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
    zIndex: 1,
},
newPost: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
    //backgroundColor: colors.primaryDark,
    //marginLeft: 40
},
})

export default Categories;