import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default class CardItemComponent extends Component {
	render() {
		const { data, navigation } = this.props;
		const { img, title, description } = data;
		
		return (
			<Card style={{ height: 220 }}>
				<Image source={{ uri: img  }} style={{ flex: 1 }}/>
				<CardItem button onPress={() => navigation.navigate('ViewItem', { data })}>
					<Body>
	                	<Text>{title}</Text>
	                	<Text note>{description}</Text>
	                </Body>
				</CardItem>
			</Card>
		);
	}
}