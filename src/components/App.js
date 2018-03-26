import React, { Component } from 'react';
import { Container, Content, Drawer, StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';

import Header from './Header';
import SideBar from './Sidebar';
import Items from './Items';

export default class App extends Component<Props> {
    closeDrawer = () => {
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Drawer
                        ref={(ref) => { this.drawer = ref; }}
                        content={<SideBar navigator={this.navigator} />}
                        onClose={() => this.closeDrawer()} >
                        <Header openDrawer={this.openDrawer.bind(this)}/>
                        <Content>
                            <Items/>
                        </Content>
                    </Drawer>
                </Container>
            </StyleProvider>
        );
    }
}