/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Drawer } from 'native-base';

import Header from './Header';
import SideBar from './Sidebar';

export default class App extends Component<Props> {
    closeDrawer = () => {
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
        return (
            <Container>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={() => this.closeDrawer()} >
                    <Header openDrawer={this.openDrawer.bind(this)}/>
                    <Content padder/>
                </Drawer>
            </Container>
        );
    }
}