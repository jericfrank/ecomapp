import _ from 'lodash';
import React, { Component } from 'react';
import GridView from 'react-native-super-grid';
import { Text } from 'native-base';

import CardItem from './CardItem';

const ITEM = [
    {
        title       : 'title 1',
        description : 'text description',
        img         : 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/iStock-157528129.jpg?itok=4c0IDJjH&resize=1100x619'
    },
    {
        title       : 'title 2',
        description : 'text description',
        img         : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CZAv6BSn7yYuskGAUCpG0zOQwwKxXqr8c-Tk47EC8U4LbiQ9OQ'
    },
    {
        title       : 'title 3',
        description : 'text description',
        img         : 'https://images.unsplash.com/photo-1519682214708-973477a2529a?ixlib=rb-0.3.5&s=98716638d3e6680c81d6bb200d66aa4c&w=1000&q=80'
    },
    {
        title       : 'title 4',
        description : 'text description',
        img         : 'https://i.pinimg.com/736x/8d/41/bf/8d41bf690002fd5ab9259ded038de920--unique-things-to-do-in-chicago-to-do-chicago.jpg'
    },
    {
        title       : 'title 5',
        description : 'text description',
        img         : 'https://images.unsplash.com/photo-1470425434529-0e0b08156f0d?ixlib=rb-0.3.5&s=e24ebc3ee08614b5136714e429bb301b&dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb'
    },
    {
        title       : 'title 6',
        description : 'text description',
        img         : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Wz8MWEB_pFhUfMZGsl5kgBTSsQ87KVJoZBpNOzQ7uJaR2QiFiA'
    },
    {
        title       : 'title 7',
        description : 'text description',
        img         : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUkzyFhDa7ulxKduswMslJamBjodKJ8jTltkF0QuYQTHfMsis'
    },
    {
        title       : 'title 8',
        description : 'text description',
        img         : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORjsOzgFxvM1LBW_tjz-yYG6jBWugNx8UMRX88AXO0P3uC-9KZg'
    }
];

export default class Items extends Component {
    render() {
        return (
            <GridView
                spacing={2}
                itemDimension={130}
                items={ITEM}
                renderItem={item => (<CardItem navigation={this.props.navigation} data={item} />)}
            />
        );
    }
}