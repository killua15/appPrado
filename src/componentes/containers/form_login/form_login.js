import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Row, Spinner } from 'native-base';
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loginAction } from '../../../redux/actions/loginAction'
import Inputs from '../../components/form_login/inputs'
import ButtonStyled from '../../components/buttons/button_styled';

class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: 'ID',
            pass: 'Password',
            errorUser: '',
            errorPass: '',
        }
    }
    shouldComponentUpdate(nP, nS){
        if(JSON.stringify(this.props.login) !== JSON.stringify(nP.login) ){
            const { login } = nP
            if (login.data[1] == 400) {
                if ('Missing password' === login.data[0].error) {
                    this.setState({ errorPass: 'Missing password'})
                }
                if ('Missing email or username' === login.data[0].error) {
                    this.setState({ errorUser: 'Missing email or ID' })
                }
            }
            if(nP.login.data[1] == 200){
                console.log("entro")
                this.props.navigation.navigate('ListFiesta')
            }

        }
       
        return true
     
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
    onPressButtonLogin = async () => {
        if(this.state.usuario === 'ID'){
            this.setState({usuario:''})
        }
        if(this.state.pass === 'Password'){
            this.setState({pass:''})
        }
       
        await this.props.loginAction(this.state.usuario, this.state.pass)
      
    }
    onPressButtonRegister = () => {
        this.props.navigation.navigate('Register')
    }
    form_login_view = () => {
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
                    errorMessage={this.state.errorUser}
                    labelStyle={{paddingBottom:10}}
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
                    errorMessage={this.state.errorPass}
                    onChangeText={this.onChangeText}
                    labelStyle={{paddingBottom:10}}

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
    render() {
        console.log(this.props)
        const { login } = this.props
        return (
            login.isFeching == true ?
                <Spinner color='blue'></Spinner>
                :
                this.form_login_view()


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
const mapStateToProps = (state) => {
    const { login } = state
    return { login }
}
const mapDispatchToProps = dispatch => {
    return {
        loginAction: (v, u) => dispatch(loginAction(v, u))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin) 