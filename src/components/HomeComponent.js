import React, { useContext } from 'react';
import { ImageBackground, FlatList, View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import { State } from '../state/State';

const Home = (props) => {
	const homeimport = useContext(State);
	const homepagecontent = homeimport.homepagecontent;

	const renderHome = ({ item }) => {
		return (
			<ScrollView>
				<View style={{}}>
					<Text style={{}}>{item.heading}</Text>
					<Image style={{}} source={'./images/11.jpg'} /> {/* Text under picture */}
					<Text style={{}}>{`${item.content1} ${item.content2}`}</Text>
					<Button style={{}}>
						onPress={() => {
							NavigationEvents(item.link);
						}};
					</Button>
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

const styles = StyleSheet.create({});

export default Home;
