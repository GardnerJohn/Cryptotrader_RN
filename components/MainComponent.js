import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
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
import { Platform } from 'react-native';

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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

const LoginNavigator = createStackNavigator(
	{
		Login: { screen: Login }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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

const OrderNavigator = createStackNavigator(
	{
		Order: { screen: Order }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#333333'
			},
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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
			headerTintColor: '#fff',
			headerTintStyle: {
				color: '#fff'
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

const CustomDrawerComponent = (props) => (
	<ScrollView>
		<View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
			<View style={styles.drawerHeader}>
				<Image style={styles.drawerImage} source={require('../public/images/logo.png')} />
			</View>
			<DrawerItems {...props} />
		</View>
	</ScrollView>
);

const MainNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeNavigator,
			navigationOptions: {
				drawerLabel: 'Home',
				drawerIcon: () => <Icon name="home" type="font-awesome" size={24} color="#fff" />
			}
		},
		Software: {
			screen: SoftwareNavigator,
			navigationOptions: {
				drawerLabel: 'Software',
				drawerIcon: () => <Icon name="database" type="font-awesome" size={24} color="#fff" />
			}
		},
		Order: {
			screen: OrderNavigator,
			navigationOptions: {
				drawerLabel: 'Order',
				drawerIcon: () => <Icon name="shopping-bag" type="font-awesome" size={24} color="#fff" />
			}
		},
		About: {
			screen: AboutNavigator,
			navigationOptions: {
				drawerLabel: 'About',
				drawerIcon: () => <Icon name="id-badge" type="font-awesome" size={24} color="#fff" />
			}
		},
		ContactUs: {
			screen: ContactUsNavigator,
			navigationOptions: {
				drawerLabel: 'ContactUs',
				drawerIcon: () => <Icon name="address-card" type="font-awesome" size={24} color="#fff" />
			}
		},
		Login: {
			screen: LoginNavigator,
			navigationOptions: {
				drawerLabel: 'Login',
				drawerIcon: () => <Icon name="sign-in" type="font-awesome" size={24} color="#fff" />
			}
		}
	},
	{
		initialRouteName: 'Home',
		drawerBackgroundColor: '#333333',
		contentComponent: CustomDrawerComponent
	}
);

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {
	return (
		<View style={styles.container}>
			<AppNavigator />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
	},
	stackIcon: {
		color: '#d9d9d9',
		marginLeft: 15,
		fontSize: 24
	},
	drawerHeader: {
		backgroundColor: '#333333',
		height: 140,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1
	},
	drawerImage: {
		height: 50,
		width: 250
	}
});

export default Main;
