import React, { useContext } from 'react';
import { ImageBackground, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { State } from '../state/State';

const Home = (props) => {
	const homeimport = useContext(State);
	const homepagecontent = homeimport.homepagecontent;

	const renderHome = ({ item }) => {
		return (
			<ScrollView>
				<View>
					<Text style={styles.heading}>{item.heading}</Text>
					<Image style={styles.image} source={require('./images/11.jpg')} /> {/* Text under picture */}
					<Text style={styles.content}>{`${item.content1} ${item.content2}`}</Text>
					<TouchableOpacity>
						onPress={() => {
							props.navigate(item.link);
						}};
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	};

	return (
		<ImageBackground source={'./images/5.jpg'} style={{ resizeMode: 'contain', justifyContent: 'center' }}>
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
