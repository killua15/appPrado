import React, { Component } from 'react'
import { View, Platform, Text, Dimensions, StyleSheet, AsyncStorage,BackHandler} from 'react-native'
import { Grid, Row, Form, Item, Label, Input, Spinner } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
var token = null
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state = {
            token:''
        }
    }     
    async componentWillMount() {
        console.log(this.props.navigation)
        token = await this.getUserToken()
        if (token != 'none') {
            BackHandler.exitApp()
            this.props.navigation.navigate('ListFiesta')
        }else{
            this.setState({token:token})
        }
    }
    getUserToken = async () => {
        let userId = '';
        try {
            userId = await AsyncStorage.getItem('tokenUser') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        console.log(userId)
        return userId;

    }
    render() {
        if (token == null) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner color="blue"></Spinner>
                    <Text style={{ ...material.display1 }}>Cargando...</Text>
                </View>

            )
        } else {
            return (

                <View style={styles.container}>
                    <View style={{ marginTop: (Dimensions.get('screen').height * 20) / 100 }}>
                        <Text style={styles.text_prado}>PradoAplication</Text>
                    </View >
                    <FormLogin navigation={this.props.navigation} style={{ flex: 1 }}></FormLogin>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 50,
        alignItems: 'center',
        flex: 1

    },
    text_color: {
        color: '#f3f3f3'
    },
    form: {
        backgroundColor: '#fff'
    },
    text_prado: {
        ...material.display1,
        //marginTop: 100,

    }
}) 
