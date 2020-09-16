import React from 'react';
import { View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../Tabs/Tabs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from '../../redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function App() {
	return (
    <Provider store = {store}>
      <View style = {{ width: windowWidth, height: windowHeight }}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </Provider>
	);
}

export default App;