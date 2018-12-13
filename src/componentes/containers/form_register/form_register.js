import React, { Component } from 'react'
import { StyleSheet, Dimensions,AsyncStorage,ScrollView } from 'react-native'
import { Spinner, Icon, Left, Item, Input } from 'native-base';
import { View } from 'react-native'
import { connect } from 'react-redux'
import { registerAction } from '../../../redux/actions/registerAction'
import Inputs from '../../components/form_login/inputs'
import ButtonStyled from '../../components/buttons/button_styled';
import DatePickerInput from '../../components/date_picker/date_picker_input';
import RadioGenero from '../../components/radio_buttons/radio_genero';
class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: 'Nombre y Apellidos',
            errorName: '',
            ID: 'Documento sin puntos ni guiones',
            errorID: '',
            date_birth: 'Fecha Nacimiento',
            email: 'Email',
            errorEmail: '',
            cod_rrpp: '',
            phone_cel: 'Celular',
            errorCelular: '',
            genero: 'Genero',
            genero_radio: true,
            statusButton: true,
            danger: true
        }
    }
    saveTokenUser = async userId => {
        try {
          await AsyncStorage.setItem('tokenUser', userId);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      };
    shouldComponentUpdate(nP, nS) {
        if (JSON.stringify(this.props.register) !== JSON.stringify(nP.register)) {
            const { register } = nP
            console.log(nP)
            if(nP.register.isFeching==false){
                if (nP.register.data[1] == 201) {
                    console.log("entro")
                    this.saveTokenUser(nP.register.data[0].token)
                    this.props.navigation.navigate('ListFiesta')
                }else{
                    alert("Error de Conexion")
                }
            }
        }

        return true

    }

    onFocus = (input) => {
        if (input == 'nombre') {
            if (this.state.nombre == '' || this.state.nombre == "Nombre y Apellidos") {
                this.setState({ nombre: '' })
            }
        }
        if (input == 'ID') {
            if (this.state.ID == '' || this.state.ID == "Documento sin puntos ni guiones") {
                this.setState({ ID: '' })
            }
        }
        if (input == 'email') {
            if (this.state.email == '' || this.state.email == "Email") {
                this.setState({ email: '' })
            }
        }
        if (input == 'cel_phone') {
            this.setState({ phone_cel: '' })
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
                this.setState({ nombre: 'Nombre y Apellidos' })
            }
        }
        if (input == 'ID') {
            if (this.state.ID == '') {
                this.setState({ ID: 'Documento sin puntos ni guiones' })
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
        if (input == 'cel_phone') {
            if (this.state.phone_cel == '') {
                this.setState({ phone_cel: 'No Celular' })
            }
        }
        if (input == 'email') {
            var patt = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/)
            var res = patt.test(this.state.email);
            console.log(res)
            if (res) {
                //this.setState({ email: this.state.email })
                this.setState({ errorEmail: '' })
            } else {
                this.setState({ errorEmail: 'Inserte Email Valido' })
            }
        }
    }
    onChangeText = (input, val) => {
        if (input == 'nombre') {
            var patt = new RegExp(/^[A-Za-z\s]+$/g)
            var res = patt.test(val);
            console.log(res)
            if (res) {
                this.setState({ nombre: val })
                this.setState({ errorName: '' })
            } else {
                this.setState({ errorName: 'Solo letras desde la A - Z' })
            }

        }
        if (input == 'ID') {
            var patt = new RegExp(/^[0-9\s]+$/g)
            var res = patt.test(val);
            console.log(res)
            if (res) {
                this.setState({ ID: val })
                this.setState({ errorID: '' })
            } else {
                this.setState({ errorID: 'Solo digitos del 0-9' })
            }

        }
        if (input == 'cel_phone') {
            var patt = new RegExp(/^[0-9\s]+$/g)
            var res = patt.test(val);
            console.log(res)
            if (res) {
                this.setState({ phone_cel: val })
                this.setState({ errorCelular: '' })
            } else {
                this.setState({ errorCelular: 'Solo digitos del 0-9' })
            }

        }
        if (input == 'email') {
            this.setState({ email: val })
        }
        if (input == 'email') {
            this.setState({ email: val })
        }
    }
    onPressButtonRegister =  async () => {
        if (this.state.date_birth == null && this.state.errorCelular == '' &&
            this.state.errorEmail == '' && this.state.errorID == '' && this.state.errorName == '') {
            alert("Errores en los Campos")
        } else {
             await this.props.registerAction(this.state.nombre,this.state.ID,
                             this.state.date_birth,this.state.email,
                              this.state.cod_rrpp,this.state.phone_cel,this.state.genero)
        }
    }
    onChangeTextPrrCode = (val) =>{
        this.setState({cod_rrpp:val})
    }
    onDateChange = (val) => {
        this.setState({ date_birth: val })
    }
    onPressRadio = () => {
        console.log("select")
        this.setState({ genero_radio: !this.state.genero_radio })
    }
    onClickButtonAlertCodigo = () => {
        alert("Ha pinchado boton RRPP")
    }
    renderComponents = () => {
        return(
          
            <View style={{alignItems:'center', height:((Dimensions.get('screen').height*100)/100)+150}}>
                <Inputs
                    nameInput='nombre'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.nombre}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    errorMessage={this.state.errorName}
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
                    errorMessage={this.state.errorID}
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
                    errorMessage={this.state.errorEmail}
                    onChangeText={this.onChangeText}

                />
                <Inputs
                    nameInput='cel_phone'
                    ContainerStyleLabel={styles.labelContain}
                    LabelStyleLabel={styles.label}
                    ContainerStyleFormImput={styles.container_form_imput}
                    valueInput={this.state.phone_cel}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    errorMessage={this.state.errorCelular}
                    onChangeText={this.onChangeText}

                />
                <RadioGenero genero_radio={this.state.genero_radio} onPress={this.onPressRadio} style={{ marginTop: 5 }}></RadioGenero>
                <Item regular style={styles.item_input_text}>
                    <Input 
                    placeholder='Codigo RRPP' 
                    onChangeText={this.onChangeTextPrrCode}
                    >{this.state.cod_rrpp}
                    </Input>
                    <Icon onPress={this.onClickButtonAlertCodigo} style={{ marginLeft: 5 }} name='checkmark-circle' />
                </Item>
                <ButtonStyled
                    styleBotton={styles.bottonRegister}
                    TextBotton='Registrar'
                    onPressButton={this.onPressButtonRegister}
                >
                </ButtonStyled>
            </View>
            
        )

    }
    render() {
        const { register } = this.props
        return (
            register.isFeching == true ?
            <Spinner color='blue'></Spinner>
            :
            this.renderComponents()

        )
    }
}

const styles = StyleSheet.create({


    labelContain: {
        // marginBottom: ,
        // alignItems: 'center'
        width: Dimensions.get('screen').width -100,
        // backgroundColor:"#fff"
    },
    label: {
        color: 'blue',

    },
    item_input_text: {
        marginBottom: 15,
        width: Dimensions.get('screen').width - 70,
        borderBottomWidth: 0,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ededed',
        backgroundColor: "#fff",
        marginLeft: 0,
    },
    container_form_imput: {
        width: Dimensions.get('screen').width - 50,
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
        width: Dimensions.get('screen').width - 70,

    },
    bottonLogin: {
        marginTop: 20,
        width: Dimensions.get('screen').width - 70,
        paddingLeft: 10,
    },
    bottonRegister: {
        marginTop: 10,
        alignSelf:'center',
        width: Dimensions.get('screen').width - 70,
        // backgroundColor: 'red'
    }
})
const mapStateToProps = (state) => {
    const { register } = state
    return { register }
}
const mapDispatchToProps = dispatch => {
    return {
        registerAction: (name, idDoc, birth, email, prCode, mobile, gender) =>
            dispatch(registerAction(name, idDoc, birth, email, prCode, mobile, gender))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormRegister) 