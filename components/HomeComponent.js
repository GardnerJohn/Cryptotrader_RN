import React, { useContext } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { State } from '../state/State';

const Home = (props) => {
	const homeimport = useContext(State);
	const homepagecontent = homeimport.homepagecontent;

	const renderHome = ({ item }) => {
		return (
			<View style={styles.section}>
				<Text style={styles.heading}>{item.heading}</Text>
				<View>
					<Image
						style={styles.mainImage}
						source={
							item.id === 1 ? (
								require('../public/images/11.jpg')
							) : item.id === 2 ? (
								require('../public/images/8.jpg')
							) : (
								require('../public/images/13.jpg')
							)
						}
					/>
				</View>
				<Text style={styles.content}>{`${item.content1}\n\n${item.content2}\n\n`}</Text>
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
		<ImageBackground source={require('../public/images/5.jpg')} style={styles.imageBackground}>
			<FlatList renderItem={renderHome} data={homepagecontent} keyExtractor={(item) => item.id.toString()} />
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
		color: '#fff',
		textAlign: 'center'
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
		opacity: 0.7
	},
	button: {
		color: 'white',
		fontSize: 15,
		backgroundColor: 'black',
		padding: 20,
		alignItems: 'center',
		borderRadius: 10
	}
});

export default Home;
