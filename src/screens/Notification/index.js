import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../../libs/scaling';
import { Colors } from '../../themes';

function Notification() {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.red,
		paddingHorizontal: moderateScale(16),
	},
});

export default Notification;
