import React from 'react';
import {Text, SectionList} from 'react-native';
import FriendlistUI from '../widgets/FriendlistUI';

const ExpSectionList = ({Users}) => {
    const data = [{title: "Suggested", data: Users},
{title: "Followers", data: Users}];
    return (
        <SectionList sections={data}
        renderItem={({item}) => <FriendlistUI items={item}/>}
        renderSectionHeader={({section: {title}}) => (
            <Text style={{color:"white"}}>{title}</Text>
        )}/>
    );
}

export default ExpSectionList;
