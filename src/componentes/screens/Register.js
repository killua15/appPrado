import React, { Component } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import { Grid, Row, Form, Item, Label, Input } from 'native-base';
import FormRegister from '../containers/form_register/form_register';
import { material } from 'react-native-typography'
import HeaderBar from '../components/headerBar/headerBar';
export default class Register extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    static navigationOptions = {
        header: null
    }
    onHandleBackButton = () =>{
          this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    onHandleBackButton={this.onHandleBackButton}
                    color='red'
                    title='Registro'
                    backIcon={true}
                    MenuIcon={false}/>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <FormRegister style={{ flex: 1 }}> </FormRegister>
                </View>

            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 80,
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
