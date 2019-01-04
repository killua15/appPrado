import React, { Component } from 'react'
import { View, ImageBackground, Text, Dimensions, StyleSheet, AsyncStorage, Image,TouchableOpacity } from 'react-native'
import { Grid, Row, Form, Item, Input, Spinner, Left } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
var token = null
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
    }
    async componentWillMount() {
        console.log(this.props.navigation)
        token = await this.getUserToken()
        if (token != 'none') {
            //BackHandler.exitApp()
            this.props.navigation.navigate('ListFiesta')
        } else {
            this.setState({ token: token })
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

                <ImageBackground
                source={require('../../images/backimage.jpg')}
                    style={styles.view_imageBackgroud}
                    imageStyle={styles.imageStyleImageBackgroudn}
                >
                    <View>
                       <Image style={styles.logo} source={require('../../images/logo2.png')}></Image>
                    </View >
                    <FormLogin navigation={this.props.navigation} style={{ flex: 1 }}></FormLogin>
                    <View style={styles.bottomMenu}>
                    {/* <Left><TouchableOpacity><Text style={styles.textMenu}>Registrarse</Text></TouchableOpacity></Left> */}
                    {/* <Left><TouchableOpacity><Text style={styles.textMenu}>Ayuda</Text></TouchableOpacity></Left> */}
                    </View >
                </ImageBackground>

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
    logo:{
         width: Dimensions.get('screen').width ,
         height: (Dimensions.get('screen').height * 30)/100,
         resizeMode: 'stretch'
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

    },
    view_imageBackgroud: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomMenu:{
       
    },
    textMenu:{
       
    }
}) 
