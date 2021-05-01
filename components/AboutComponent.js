import React, { useContext } from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { State } from '../state/State';

const About = (props) => {
	const aboutimport = useContext(State);
	const aboutpagecontent = aboutimport.aboutpagecontent;

	const renderAbout = ({ item }) => {
		return (
			<View style={styles.section}>
				<Text style={styles.heading}>{item.heading}</Text>
				<Image style={styles.mainImage} source={require('../public/images/8.jpg')} />
				<Text style={styles.content}>{`${item.content1}\n\n${item.content2}\n\n${item.content3}\n`}</Text>
				<TouchableOpacity
					onPress={() => {
						props.navigation(item.link1);
					}}
				>
					<Text style={styles.button}>{item.button1}</Text>
				</TouchableOpacity>
				<View style={styles.space} />
				<TouchableOpacity
					onPress={() => {
						props.navigation(item.link2);
					}}
				>
					<Text style={styles.button}>{item.button2}</Text>
				</TouchableOpacity>
				<View style={styles.space} />
				<TouchableOpacity
					onPress={() => {
						props.navigation(item.link3);
					}}
				>
					<Text style={styles.button}>{item.button3}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<ImageBackground source={require('../public/images/5.jpg')} style={styles.imageBackground}>
			<FlatList renderItem={renderAbout} data={aboutpagecontent} keyExtractor={(item) => item.id.toString()} />
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	heading: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	content: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20
	},
	imageBackground: {
		resizeMode: 'cover',
		justifyContent: 'center',
		flex: 1
	},
	mainImage: {
		width: 353,
		height: 240
	},
	section: {
		backgroundColor: 'hsl(0, 0%, 20%)',
		margin: 20,
		alignItems: 'center',
		paddingBottom: 15,
		opacity: 0.8
	},
	button: {
		color: 'white',
		fontSize: 15,
		backgroundColor: 'black',
		padding: 20,
		borderRadius: 10
	},
	space: {
		width: 10,
		height: 10
	}
});

export default About;
