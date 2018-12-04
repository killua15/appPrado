import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Row } from 'native-base';
import { View } from 'react-native'
import { connect } from 'react-redux'
import Inputs from '../../components/form_login/inputs'
import ButtonStyled from '../../components/buttons/button_styled';

class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: 'ID',
            pass: 'Password'
        }
    }
    onFocus = (input) => {
        if (input == 'user') {
            this.setState({ usuario: '' })
        }
        if (input == 'pass') {
            this.setState({ pass: '' })
        }


    }
    onBlur = (input) => {
        if (input == 'user') {
            if (this.state.usuario == '') {
                this.setState({ usuario: 'ID' })
            }
        }
        if (input == 'pass') {
            if (this.state.pass == '') {
                this.setState({ pass: 'Password' })
            }
        }
    }
    onChangeText = (input, val) => {
        if (input == 'user') {
            this.setState({ usuario: val })
        }
        if (input == 'pass') {
            this.setState({ pass: val })
        }
    }
    onPressButtonLogin = () => {
        console.log("loging")
    }
    onPressButtonRegister = () => {
       this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View>
                <Inputs
                    nameInput='user'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.usuario}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}
                />
                <Inputs
                    nameInput='pass'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.pass}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}

                />
                <ButtonStyled
                    styleBotton={styles.bottonLogin}
                    TextBotton='Login'
                    onPressButton={this.onPressButtonLogin}
                >
                </ButtonStyled>

                <ButtonStyled
                    styleBotton={styles.bottonRegister}
                    TextBotton='Registrar'
                    onPressButton={this.onPressButtonRegister}
                >
                </ButtonStyled>
            </View>

        )
    }
}

const styles = StyleSheet.create({


    labelContain: {
        marginBottom: 10,
        alignItems: 'center'
        // width: Dimensions.get('screen').width - 50,
        // backgroundColor:"#fff"
    },
    label: {
        color: 'blue',

    },
    container_form_imput: {
        width: Dimensions.get('screen').width - 70,
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ededed',
        marginLeft: 0,
        //alignItems:'center' 
    },
    text_form_input: {
        marginLeft: 10
    },
    bottonLogin: {
        marginTop: 20,
        width: Dimensions.get('screen').width - 70,
        paddingLeft: 10,
    },
    bottonRegister: {
        marginTop: 10,
        width: Dimensions.get('screen').width - 70,
        backgroundColor: 'red'
    }
})

export default FormLogin