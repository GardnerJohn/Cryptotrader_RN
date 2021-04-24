import React, { useContext } from 'react';
import { State } from '../state/State';
import { StyleSheet, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Software = (props) => {
	const softwareimport = useContext(State);
	const softwarepagecontent = softwareimport.softwarepagecontent[0];

	const renderSoftware = ({ item }) => {
		return (
			<ScrollView>
				<View>
					<Text style={styles.heading}>{item.heading}</Text>
					<Image style={styles.image} source={require('../public/images/6.jpg')} />
					<Text style={styles.content}>{`${item.content1}`}</Text>
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
		<ImageBackground source={'../public/images/9.jpg'} style={{ resizeMode: 'contain', justifyContent: 'center' }}>
			<FlatList renderItem={renderSoftware} data={softwarepagecontent} keyExtractor={(item) => item.id.toString()} />
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	heading: {
		color: 'white'
	},
	image: {
		width: 250
	},
	content: {
		color: 'white',
		textAlign: 'center'
	}
});

export default Software;
