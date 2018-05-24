/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Navigator, NativeModules, StatusBar, ScrollView
} from 'react-native';
import { Toolbar, Button, COLOR } from 'react-native-material-ui';
import ThemeProvider from "react-native-material-ui/src/styles/ThemeProvider.react";
import Container from "react-native-material-ui/src/Container/index";
import BottomNavigation from "react-native-material-ui/src/BottomNavigation/BottomNavigation.react";
import Subheader from "react-native-material-ui/src/Subheader/Subheader.react";
import ListItem from "react-native-material-ui/src/ListItem/ListItem.react";
import Dialog from "react-native-material-ui/src/Dialog/Dialog.react";
import DialogDefaultActions from "react-native-material-ui/src/Dialog/DialogDefaultActions.react";
const uiTheme = {
    palette: {
        primaryColor: COLOR.white,
        ascentColor : COLOR.green300
    },
    toolbar: {
        container: {
            height: 60,
        },
    },
};
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = { checked: true };
    }
    componentWillUpdate
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Container >
                    <View style={styles.toolbar}>
                        <Toolbar
                            leftElement="menu"
                            centerElement="Bottom navigation"
                        />
                    </View>
                    <View style={styles.mainView }>
                        <Dialog>
                            <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                            <Dialog.Content>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <DialogDefaultActions
                                    actions={['Dismiss', 'Keep']}
                                    onActionPress={() => {}}
                                />
                            </Dialog.Actions>
                        </Dialog>
                    </View>
                    <BottomNavigation active={this.state.active} >
                        <BottomNavigation.Action
                            key="today"
                            icon="today"
                            label="Today"
                            onPress={() => this.setState({ active: 'today' })}
                        />
                        <BottomNavigation.Action
                            key="people"
                            icon="people"
                            label="People"
                            onPress={() => this.setState({ active: 'people' })}
                        />
                        <BottomNavigation.Action
                            key="bookmark-border"
                            icon="bookmark-border"
                            label="Bookmark"
                            onPress={() => this.setState({ active: 'bookmark-border' })}
                        />
                        <BottomNavigation.Action
                            key="settings"
                            icon="settings"
                            label="Settings"
                            onPress={() => this.setState({ active: 'settings' })}
                        />
                    </BottomNavigation>
                </Container>
            </ThemeProvider>

        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    toolbar:{
    },
    container:{
        flex:1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
