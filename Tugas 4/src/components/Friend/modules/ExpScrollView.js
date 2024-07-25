import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FriendlistUI from "../widgets/FriendlistUI";

const ExpScrollView = ({ Users }) => {
	return (
		<ScrollView>
			{Users.map((v, index) => (
				<FriendlistUI items={v} key={index} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

export default ExpScrollView;