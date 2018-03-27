import React, { Component } from 'react';
import { Button, Icon, Title } from 'native-base';

import { Header, Left, Right, Body } from '../styles/header';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header noShadow>
                <Left>
                    <Button transparent onPress={()=>this.props.onPress()}>
                        <Icon name={this.props.icon} />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}