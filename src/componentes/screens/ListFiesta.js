import React, { Component } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import { Grid, Row, Form, Item, Label, Input } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
import HeaderBar from '../components/headerBar/headerBar';
import FlatListFiesta from '../containers/listFiesta/flatListFiesta';
export default class ListFiesta extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (

            <View >
                <HeaderBar
                    color='red'
                    title='Fiestas'
                    backIcon={false}
                    MenuIcon={true}
                />
                <View style={styles.container}>
                   <FlatListFiesta></FlatListFiesta>
                </View>

            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 5,
       // alignItems: 'center',
        //flex: 1

    },
    text_color: {
        color: '#f3f3f3'
    },
    form: {
        backgroundColor: '#fff'
    },
    text_prado: {
        ...material.display1,
        marginTop: 100,

    }
}) 
