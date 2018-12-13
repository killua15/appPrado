import React, { Component } from 'react'
import { View, Platform, Dimensions,Text, StyleSheet,ScrollView} from 'react-native'
import { Grid, Row, Form, Item, Label, Input } from 'native-base';
import FormRegister from '../containers/form_register/form_register';
import { material } from 'react-native-typography'
import HeaderBar from '../components/headerBar/headerBar';
export default class Register extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    static navigationOptions = {
        header: null
    }
    onHandleBackButton = () => {
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
                    MenuIcon={false} />
              
                   <ScrollView style={{marginTop: 20,height:Dimensions.get('screen').height-100}}>
                        <FormRegister navigation={this.props.navigation}> </FormRegister>
                   </ScrollView>
               

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
