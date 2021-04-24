import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import ContactUs from './ContactUsComponent';
import Login from './LoginComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

const LoginNavigator = createStackNavigator(
	{
		Login: { screen: Login }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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
			headerTintColor: 'white',
			headerTintStyle: {
				color: 'white'
			},
			headerLeft: () => (
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

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {
	return (
		<View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
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
