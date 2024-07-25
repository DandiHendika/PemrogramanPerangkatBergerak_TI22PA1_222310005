import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import FriendlistUI from '../widgets/FriendlistUI';
import { Userss } from '../../const-data/User2';

const ExpSectionList = ({Users}) => {
    const data = [{title : "Suggested", data: Users},
                 {title : "Followers", data: Userss}];
    return (
        <SectionList sections={data}
                     renderItem={({item}) => <FriendlistUI items={item} />}
                     renderSectionHeader={({section: {title}}) => (
                     <Text style={{ color:"white"}}>{title}</Text>
                     )}/>
    );
}

const styles = StyleSheet.create({})

export default ExpSectionList;
