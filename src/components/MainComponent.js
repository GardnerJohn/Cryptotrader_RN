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
	Order: {
		screen: OrderNavigator,
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
	ContactUs: {
		screen: ContactUsNavigator,
		navigationOptions: {
			drawerLabel: 'Contact',
			drawerIcon: ({ tintColor }) => <Icon name="address-card" type="font-awesome" size={24} color={tintColor} />
		}
	}
});

const LoginNavigator = createStackNavigator(
	{
		Login: { screen: Login }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon
					name="sign-in"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon name="home" type="font-awesome" iconStyle={styles.stackIcon} onPress={() => navigation.toggleDrawer()} />
			)
		})
	}
);

const SoftwareNavigator = createStackNavigator(
	{
		Software: { screen: Software }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon
					name="database"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const OrderNavigator = createStackNavigator(
	{
		Order: { screen: Order }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon
					name="shopping-bag"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const AboutNavigator = createStackNavigator(
	{
		About: { screen: About }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon
					name="id-badge"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const ContactUsNavigator = createStackNavigator(
	{
		ContactUs: { screen: ContactUs }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'fff',
			headerTintStyle: {
				color: 'fff'
			},
			headerLeft: (
				<Icon
					name="address-card"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {
	return (
		<View>
			<AppNavigator />
		</View>
	);
};

const styles = StyleSheet.create({
	stackIcon: {
		color: '#d9d9d9',
		marginLeft: 15,
		fontSize: 24
	}
});

export default Main;
