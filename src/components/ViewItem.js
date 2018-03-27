import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text } from 'native-base';

import Header from './Header';

const ImageHeader = props => (
	<Image source={{ uri: props.img  }} style={{ flex: 1 }}/>
);

export default class ViewItem extends Component {
	static navigationOptions = ( props ) => {
		const { title, img } = props.navigation.state.params.data;

		return {
			title       : title,
			header      : ( props ) => <ImageHeader {...props} img={img}/>,
			headerStyle : {
				backgroundColor: 'transparent'
			},
			headerTitleStyle : {
				width     : '70%',
				textAlign : 'center',
			}
		}
	};

    render() {
        return (
        	<Text/>
        );
    }
}