import React from "react";
import { View, Text, FlatList } from "react-native";

import Post from "../components/Post/post";
import data from "../assets/data/data";

const Allposts = (props) => {
    return (
        <View>
            <FlatList
                data = { data }
                renderItem = {({item}) => <Post post = { item } />}

            />
        </View>
    );
};

export default Allposts;