import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Row, Icon, Left, Item, Input } from 'native-base';
import { View } from 'react-native'
import { connect } from 'react-redux'
import Inputs from '../../components/form_login/inputs'
import ButtonStyled from '../../components/buttons/button_styled';
import DatePickerInput from '../../components/date_picker/date_picker_input';
import RadioGenero from '../../components/radio_buttons/radio_genero';

class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: 'Nombre Completo',
            ID: 'ID',
            date_birth: 'Fecha Nacimiento',
            email: 'Email',
            cod_rrpp: 'Codigo RRPP',
            phone_cel: 'No Celular',
            genero: 'Genero',
            genero_radio:true
        }
    }
    onFocus = (input) => {
        if (input == 'nombre') {
            this.setState({ nombre: '' })
        }
        if (input == 'ID') {
            this.setState({ ID: '' })
        }
        if (input == 'email') {
            this.setState({ email: '' })
        }
        if (input == 'cod_rrpp') {
            this.setState({ cod_rrpp: '' })
        }
        if (input == 'phone_cel') {
            this.setState({ phone_cel: '' })
        }


    }
    onBlur = (input) => {
        if (input == 'nombre') {
            if (this.state.nombre == '') {
                this.setState({ nombre: 'Nombre Completo' })
            }
        }
        if (input == 'ID') {
            if (this.state.ID == '') {
                this.setState({ ID: 'ID' })
            }
        }
        if (input == 'email') {
            if (this.state.email == '') {
                this.setState({ email: 'Email' })
            }
        }
        if (input == 'cod_rrpp') {
            if (this.state.cod_rrpp == '') {
                this.setState({ cod_rrpp: 'Codigo RRPP' })
            }
        }
        if (input == 'phone_cel') {
            if (this.state.phone_cel == '') {
                this.setState({ phone_cel: 'No Celular' })
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
    onDateChange = (val) => {
        this.setState({ date_birth: val })
    }
    onPressRadio = () =>{
        console.log("select")
       this.setState({genero_radio:!this.state.genero_radio})
    }
    render() {
        return (
            <View>
                <Inputs
                    nameInput='nombre'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.nombre}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}
                />
                <Inputs
                    nameInput='ID'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.ID}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}

                />
                <DatePickerInput onDateChange={this.onDateChange}></DatePickerInput>
                <Inputs
                    nameInput='email'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.email}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}

                />

                <Item regular style={styles.item_input_text}>
                    <Input  placeholder='Codigo RRPP' />
                    <Icon style={{marginLeft:5}} name='checkmark-circle' />
                </Item>

                <Inputs
                    nameInput='cel_phone'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.phone_cel}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}

                />
                <RadioGenero genero_radio={this.state.genero_radio} onPress={this.onPressRadio} style={{marginTop:5}}></RadioGenero>
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
        // marginBottom: ,
        // alignItems: 'center'
        // width: Dimensions.get('screen').width - 50,
        // backgroundColor:"#fff"
    },
    label: {
        color: 'blue',

    },
    item_input_text:{
        marginBottom:15,
        width: Dimensions.get('screen').width - 70,
        borderBottomWidth: 0,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ededed',
        backgroundColor: "#fff",
        marginLeft: 0,
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
        marginLeft: 10,

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

export default FormRegister