import React from "react";
import {   Dimensions, Image, Pressable, StyleSheet, ScrollView, Text,  View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import colors from "../../config/colors";



const DetailedPost = (props) => {
    let nav = useNavigation();
    const post = props.post;
    return (
        <ScrollView style = { styles.Background }>
            <View style = { styles.PostContainer }>
                {/* reverse button */}
                <Image
                    style = { styles.Image }
                    source = {{ uri: post.image }}  
                />
                <View style = { styles.TitleContainer }>
                    <View>
                        <Text style = { styles.Title }>
                            {post.title}
                        </Text>
                        <Text style = { styles.Price_Day }>
                            {post.price}/dag
                        </Text>
                        <Text style = { styles.Location }>
                            {post.location}
                        </Text>
                    </View>
                    <Image 
                        style = { styles.ProfilePic }
                        source = {{ uri: post.profilePicture }}
                    />
                </View>
                <View style = { styles.DescriptionContainer }>
                    <Text style = { styles.Description }>
                        "{post.description}"
                    </Text>
                </View>
                <View style = { styles.PriceContainer }>
                    <Text style = { styles.PriceTitle }>
                        Priser
                    </Text>
                    <View style = { styles.PriceListContainer }>
                        <Text style = { styles.PriceList }>
                            1 dag
                        </Text>
                        <Text style = { styles.PriceList }>
                            {post.priceOne} kr
                        </Text>
                    </View>
                    <View style = { styles.PriceListContainer }>
                        <Text style = { styles.PriceList }>
                            2 dagar
                        </Text>
                        <Text style = { styles.PriceList }>
                              {post.priceTwo} kr
                        </Text>
                    </View>
                    <View style = { styles.PriceListContainer }>
                        <Text style = { styles.PriceList }>
                            5 dagar
                        </Text>
                        <Text style = { styles.PriceList }>
                            {post.priceFive} kr
                        </Text>
                    </View>
                    <Text style = { styles.PriceBooking }>
                        (Bokningsavgift på 50 kr tillkommer)
                    </Text>
                </View>

                <View style =  { styles.SpecificationContainer}>
                    <Text style = { styles.Renter }>
                        Uthyrare: {post.renter}
                    </Text>
                    <Text style = { styles.Renter }>
                        Annonsnummer: {post.id}
                    </Text>
                </View>

                <Pressable onPress = { () => nav.navigate("RenterAgreement")}>
                    <Text style = { styles.Agreements }>
                        Hyresvillkor
                    </Text>
                </Pressable>
            </View>
                <Pressable 
                    style = { styles.Button }
                    onPress = { () => nav.navigate("CheckingOut")}>
                    <Text style = { styles.ButtonText }>
                        Gör en förfrågan
                    </Text>
                </Pressable>
            
        </ScrollView>
     );
}
const styles = StyleSheet.create({
    Agreements: {
        color: colors.txtColor,
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 40,
        paddingLeft: 22,
        textDecorationLine: "underline"
    },
    Background: {
        backgroundColor: colors.primaryLight
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
    Description:{
        color: colors.txtColor,
        fontSize: 17
    },
    DescriptionContainer: {
        alignSelf: "center",
        paddingRight: 50,
        width: Dimensions.get("screen").width - 44,
    },
    Image: {
        width: "100%",
        aspectRatio: 3 / 2,
        marginTop: 50,
        resizeMode: "cover",
    },
    Location: {
        color: colors.txtColor,
        fontSize: 15,
    },
    PostContainer: {
        backgroundColor: colors.white
    },
    PriceBooking: {
        color: colors.txtColor,
        fontStyle: "italic",
        paddingVertical: 20,
    },
    PriceContainer: {
        marginLeft: 22,
    },
    Price_Day: {
        color: colors.txtColor,
        fontSize: 16,
        fontWeight: "bold"
    },
    PriceTitle: {
        color: colors.txtColor,
        fontSize: 14,
        textDecorationLine: "underline",
    },
    PriceList: {
        color: colors.txtColor,
        
    },
    PriceListContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "50%",
        width: Dimensions.get("screen").width - 22,
        
    },
    ProfilePic: {
        height: 50,
        width: 50,
    },
    Renter: {
        color: colors.txtColor,
        fontSize: 15,
    },
    SpecificationContainer: {
        alignSelf: "center",
        width: Dimensions.get("screen").width - 44,
    },
    Title: {
        color: colors.txtColor,
        fontSize: 25,
        fontWeight: "bold"
    },
    TitleContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 25,
        width: Dimensions.get("screen").width - 44,

    },
})
export default DetailedPost;



            {/* image */}
             {/* 
             */}
                {/* title */} {/* profile image */}
                {/*  */}
                {/* price/day */}
                {/*  */}
                {/* location */}
                {/*
            </View> */}
            {/* description */}
            {/* 

            <View> */}
                {/* prices */}
                {/* */}
                {/* 1 day x kr
                2 days x kr
                5 days x kr */}
                {/*  */}

                {/* (Bokningsavgift på 50 kr tillkommer) */}
                {/* 
            </View>
             */}
                {/* renter */}
                {/*  */}
                {/* Annonsnummer */}
                {/* 
            </View>  */}
            {/* Hyresvillkor (länk) */}
            {/* request button */}
