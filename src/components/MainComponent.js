import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import ContactUs from './ContactUsComponent';
import { createDrawerNavigator } from 'react-native-drawer';
import { createStackNavigator } from 'react-native-stack';
import { Icon } from 'react-native-elements';

const MainNavigator = createDrawerNavigator({
	Login: {
		screen: LoginNavigator,
		navigationOptions: {
			drawerLabel: 'Login',
			drawerIcon: ({ tintColor }) => <Icon name="sign-in" type="font-awesome" size={24} color={tintColor} />
		}
	},
	Home: {
		screen: HomeNavigator,
		navigationOptions: {
			drawerLabel: 'Home',
			drawerIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={24} color={tintColor} />
		}
	},
	Software: {
		screen: SoftwareNavigator,
		navigationOptions: {
			drawerLabel: 'Software',
			drawerIcon: ({ tintColor }) => <Icon name="database" type="font-awesome" size={24} color={tintColor} />
		}
	},
	Ordering: {
		screen: OrderingNavigator,
		navigationOptions: {
			drawerLabel: 'Order',
			drawerIcon: ({ tintColor }) => <Icon name="shopping-bag" type="font-awesome" size={24} color={tintColor} />
		}
	},
	About: {
		screen: AboutNavigator,
		navigationOptions: {
			drawerLabel: 'About',
			drawerIcon: ({ tintColor }) => <Icon name="id-badge" type="font-awesome" size={24} color={tintColor} />
		}
	},
	Contact: {
		screen: ContactNavigator,
		navigationOptions: {
			drawerLabel: 'Contact',
			drawerIcon: ({ tintColor }) => <Icon name="address-card" type="font-awesome" size={24} color={tintColor} />
		}
	}
});

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {
	return (
		<View>
			<AppNavigator />
		</View>
	);
};

export default Main;
