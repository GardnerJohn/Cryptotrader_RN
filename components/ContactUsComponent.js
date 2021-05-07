import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUs = (props) => {
	const ContactForm = () => {
		const resetForm = {
			firstName: '',
			lastName: '',
			comments: ''
		};

		const [ form, setForm ] = useState(resetForm);

		const submit = () => {
			// Check all fields have input
			if (form.firstName === '' || form.lastName === '' || form.comment === '') {
				Alert.alert('All Fields Must Be Filled Out', [
					{
						text: 'OK',
						style: 'cancel',
						onPress: () => console.log('Cancel Has Been Pressed')
					}
				]);
				return;
			} else {
				Alert.alert('Thank You For Your Comments', [
					{
						text: 'OK',
						style: 'cancel',
						onPress: () => {
							setForm(resetForm);
						}
					}
				]);
				props.navigation('Home');
			}
		};

		return (
			<View style={styles.section}>
				<Text style={styles.heading}>Please Fill Out All Fields and Leave a Comment</Text>
				<Input
					style={styles.input}
					inputStyle={{ color: '#fff' }}
					placeholder="First Name"
					leftIcon={<Icon style={styles.icon} name="user" size={30} color="#fff" />}
					value={form.firstName}
					onChangeText={(text) => setForm({ ...form, firstName: text })}
				/>
				<Input
					style={styles.input}
					inputStyle={{ color: '#fff' }}
					placeholder="Last Name"
					leftIcon={<Icon style={styles.icon} name="user" size={30} color="fff" />}
					value={form.lastName}
					onChangeText={(text) => setForm({ ...form, lastName: text })}
				/>
				<Input
					style={styles.input}
					inputStyle={{ color: '#fff' }}
					placeholder="Comments/Questions"
					leftIcon={<Icon style={styles.icon} name="comment" size={22} color="fff" />}
					value={form.comments}
					onChangeText={(text) => setForm({ ...form, comments: text })}
				/>
				<TouchableOpacity style={styles.button} onPress={() => submit()}>
					<Text style={{ color: '#fff', fontSize: 24 }}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View>
			<ImageBackground source={require('../public/images/14.jpg')} style={styles.imageBackground}>
				<ContactForm />
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	section: {
		backgroundColor: 'hsl(0, 70%, 28%)',
		marginTop: 100,
		marginBottom: 30,
		margin: 20,
		alignItems: 'center',
		paddingBottom: 30
	},
	input: {
		backgroundColor: '#fff',
		color: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		backgroundColor: 'hsla(0, 70%, 20%, .7)',
		marginTop: 20,
		alignItems: 'center',
		color: '#fff',
		padding: 30,
		width: 300
	},
	icon: {
		marginRight: 20
	},
	imageBackground: {
		resizeMode: 'cover',
		justifyContent: 'center',
		flex: 1
	}
});

export default ContactUs;
