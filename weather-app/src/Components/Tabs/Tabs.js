import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForecastPage from '../ForecastPage/ForecastPage';
import HistoryPage from '../HistoryPage/HistoryPage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name = 'Forecast' component = {ForecastPage} />
			<Tab.Screen name = 'History' component = {HistoryPage} />
		</Tab.Navigator>
	);
}

export default Tabs;