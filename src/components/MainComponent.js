import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const MainNavigator = createDrawerNavigator({
	Login: {},
	Home: {
		screen: HomeNavigator,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={24} color={tintColor} />
		}
	},
	Software: {},
	Ordering: {},
	About: {},
	Contact: {}
});

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {
	return (
		<ScrollView>
			<Text>CryptoTrader</Text>
		</ScrollView>
	);
};

export default Main;
