import React, { useContext } from 'react';
import { State } from '../state/State';
import { ImageBackground, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Software = (props) => {
	const softwareimport = useContext(State);
	const softwarepagecontent = softwareimport.softwarepagecontent;

	const renderSoftware = ({ item }) => {
		return (
			<View style={styles.section}>
				<Text style={styles.heading}>{item.heading}</Text>
				<Image style={styles.mainImage} source={require('../public/images/6.jpg')} />
				<Text style={styles.content}>{`${item.content1}\n\n${item.content2}\n\n${item.content3}\n`}</Text>
				<TouchableOpacity
					onPress={() => {
						props.navigation(item.link);
					}}
				>
					<Text style={styles.button}>{item.button}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<ImageBackground source={require('../public/images/9.jpg')} style={styles.imageBackground}>
			<FlatList renderItem={renderSoftware} data={softwarepagecontent} keyExtractor={(item) => item.id.toString()} />
		</ImageBackground>
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
		backgroundColor: 'hsl(0, 70%, 28%)',
		marginBottom: 20,
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
	}
});

export default Software;
