import React from 'react';
import { StackNavigator } from 'react-navigation';

import App from './App';
import ViewItem from './ViewItem';

const Navigation = StackNavigator({
	Home: {
		screen: App
	},
	ViewItem: {
		screen: ViewItem
	}
});

export default Navigation;