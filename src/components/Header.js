import React, { Component } from 'react';
import { Header, Button, Icon, Title } from 'native-base';

import { Left, Right, Body } from '../styles/header';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header noShadow>
                <Left>
                    <Button transparent onPress={()=>this.props.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Menu</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}