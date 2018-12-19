import React, { Component } from 'react'
import { View, Platform, Image,BackHandler ,Alert,StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
import HeaderBar from '../components/headerBar/headerBar';
import FlatListFiesta from '../containers/listFiesta/flatListFiesta';
import ListItemFiesta from '../components/listFiesta/listItemFiesta';
import DetailFiesta from '../components/detallesFiesta/detailFiesta';
var id = 0
class DetallesFiesta extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const { navigation } = this.props
        id = navigation.getParam('id', "")
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }
    onHandleBackButton = () => {
        this.props.navigation.goBack()
        BackHandler.addEventListener('hardwareBackPress', this.backPressedList);
    }
    backPressed = () => {
        console.log(this.props)
        this.props.navigation.goBack()
        BackHandler.addEventListener('hardwareBackPress', this.backPressedList);
        return true;
    }
    backPressedList = () =>{
       
            console.log(this.props)
          Alert.alert(
            'Cerrar  AppPrado',
            'Decea cerrar la app?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false });
            return true;
        
    }
    render() {
        console.log(id)
        return (

            <View >
                <HeaderBar
                    hasTabs
                    color='red'
                    title='Detalles'
                    backIcon={true}
                    MenuIcon={true}
                    onHandleBackButton={this.onHandleBackButton}
                />
                <View style={styles.container}>
                    <DetailFiesta idFiesta={id}></DetailFiesta>
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
export default DetallesFiesta
