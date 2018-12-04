import React, { Component } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import { Grid, Row, Form, Item, Label, Input } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        console.log(this.props)
        return (

            <View style={styles.container}>
            <View style={{flex:0.7}}>
                 <Text style={styles.text_prado}>PradoAplication</Text>
            </View>
                <FormLogin navigation={this.props.navigation} style={{flex:1}}></FormLogin>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        flex:1

    },
    text_color: {
        color: '#f3f3f3'
    },
    form: {
        backgroundColor: '#fff'
    },
    text_prado:{
        ...material.display1,
        marginTop:100,

    }
}) 
