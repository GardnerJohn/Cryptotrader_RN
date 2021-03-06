import React, { useState } from 'react';
import { Input, CheckBox } from 'react-native-elements';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
	const ContactForm = () => {
		const resetForm = {
			userName: '',
			password: '',
			remember: ''
		};

		const [ form, setForm ] = useState(resetForm);

		const onLogon = () => {
			// Check all fields filled out
			if (form.username === '' || form.password === '') {
				Alert.alert('All Fields Must Be Filled Out', [
					{
						text: 'OK',
						style: 'cancel',
						onPress: () => console.log('Cancel Was Pressed')
					}
				]);
				return;

				// If filled out
			} else {
				Alert.alert('You are now logged in, Redirecting', [
					{
						text: 'OK',
						style: 'cancel',
						onPress: () => setForm(resetForm)
					}
				]);
				props.navigation('Home');
			}
		};

		return (
			<View style={styles.section}>
				<Text style={styles.heading}>Enter Login and Password</Text>
				<Input
					style={styles.input}
					inputStyle={{ color: '#fff' }}
					placeholder="Username"
					leftIcon={<Icon style={styles.icon} name="user" size={30} color="#fff" />}
					onChangeText={(text) => setForm({ ...form, userName: text })}
					value={form.userName}
				/>
				<Input
					style={styles.input}
					inputStyle={{ color: '#fff' }}
					placeholder="Password"
					secureTextEntry={true}
					leftIcon={<Icon style={styles.icon} name="key" size={22} color="#fff" />}
					secureTextEntry={true}
					onChangeText={(text) => setForm({ ...form, password: text })}
					value={form.password}
				/>
				<CheckBox
					title="Remember Me"
					checked={form.remember}
					size={24}
					center
					checkedColor="#333333"
					onPress={() => setForm({ ...form, remember: !form.remember })}
					containerStyle={{ backgroundColor: '#fff' }}
				/>
				<TouchableOpacity style={styles.content} onPress={() => onLogin()}>
					<Text style={styles.button}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View>
			<ImageBackground source={require('../public/images/1.jpg')} style={styles.imageBackground}>
				<ContactForm />
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	content: {
		color: '#fff',
		textAlign: 'center'
	},
	section: {
		backgroundColor: 'hsl(0, 70%, 28%)',
		marginTop: 100,
		marginBottom: 30,
		margin: 15,
		alignItems: 'center',
		paddingBottom: 30,
		opacity: 0.7
	},
	input: {
		backgroundColor: '#fff',
		color: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		marginRight: 20
	},
	button: {
		backgroundColor: 'hsla(0, 70%, 20%, .7)',
		alignItems: 'center',
		color: 'white',
		padding: 24,
		width: 300,
		marginTop: 20
	},
	imageBackground: {
		resizeMode: 'cover',
		justifyContent: 'center',
		flex: 1,
		paddingBottom: 500
	}
});
export default Login;
