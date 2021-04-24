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
			<View>
				<Text style={styles.heading}>{item.heading}</Text>
				<Image style={styles.image} source={require('../public/images/11.jpg')} />
				<Text style={styles.content}>{`${item.content1} ${item.content2}`}</Text>
				<TouchableOpacity>
					onPress={() => {
						props.navigation(item.link);
					}};
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<ImageBackground source={'../public/images/5.jpg'} style={{ resizeMode: 'contain', justifyContent: 'center' }}>
			<FlatList renderItem={renderHome} data={homepagecontent} keyExtractor={(item) => item.id.toString()} />
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	heading: {
		color: 'white'
	},
	image: {
		width: 250
	},
	content: {
		color: '#fff',
		textAlign: 'center'
	}
});

export default Home;
