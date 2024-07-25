import { FlatList } from "react-native"
import React from "react"
import FriendlistUI from "../widgets/FriendlistUI"

const ExpFlatList = ({Users}) => {
    return(
        <FlatList data={Users} renderItem={({item}) => <FriendlistUI items={item} />} />
    )
}

export default ExpFlatList