import React, { Component } from 'react';
import { Container, Content, Drawer, StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';

import Header from './Header';
import SideBar from './Sidebar';
import Items from './Items';

export default class App extends Component<Props> {
    static navigationOptions = {
        header: false
    };

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
                        <Header onPress={this.openDrawer.bind(this)} icon="menu" title="Menu"/>
                        <Content>
                            <Items navigation={this.props.navigation}/>
                        </Content>
                    </Drawer>
                </Container>
            </StyleProvider>
        );
    }
}