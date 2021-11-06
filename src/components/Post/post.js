import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { Icon } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



import colors from "../../config/colors"

const Post = (props) => {

    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate("Post", {postId: post.id})
    }

    return (
        <View style = { styles.cardContainer }>
            <Pressable onPress = {goToPostPage}>
                <Text style = { styles.cardTitle }>{post.title.toUpperCase()}</Text>
                <View style = { styles.cardTextContainer }>
                <Text style = { styles.cardPrice }>{post.price}/dag</Text>
                <Text style = { styles.cardLocation }>{ post.location.toUpperCase()}</Text>
                </View>
                <Image 
                    style = { styles.image }
                    source = { { uri: post.image } }
                />
                <Text style = { styles.cardHyrHar }>HYR HÄR!</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get("screen").width -15 ,
        //justifyContent: "center",
        //alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.white,
        marginBottom: 30,
        elevation: 5,
        borderRadius: 10,
    },
    cardHyrHar: {
        color: colors.peach,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        paddingVertical: 15,
        paddingLeft: 10
    },
    cardLocation: {
        color: colors.txtColor,
        fontSize: 16,
        fontWeight: "bold",

    },
    cardPrice: {
        color: colors.txtColor,
        fontSize: 16,
        fontWeight: "bold",
        
    },
    cardTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 30,
        paddingBottom: 20
    },
    cardTitle: {
        color: colors.txtColor,
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingBottom: 3,
        paddingTop: 8
    },
    image: {
        width: "100%",
        aspectRatio: 3 / 2,
        resizeMode: "cover",

    },
})

export default Post;