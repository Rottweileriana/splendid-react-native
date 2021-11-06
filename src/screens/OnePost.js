import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/core";
import DetailedPost from "../components/Post/detailedPost";


import data from "../assets/data/data";


const OnePost = (props) => {
    const route = useRoute();
    const post = data.find(item => item.id === route.params.postId);
    return (
        <View>
        <DetailedPost post={post}/>
        </View>
    );
};

export default OnePost;