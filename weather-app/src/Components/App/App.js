import React from 'react';
import { View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../Tabs/Tabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
	return (
    <View style = {{ width: windowWidth, height: windowHeight }}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
	);
}