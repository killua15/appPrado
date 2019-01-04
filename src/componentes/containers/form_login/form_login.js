import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, AsyncStorage, Platform, TouchableOpacity } from 'react-native'
import { Row, Spinner, Left } from 'native-base';
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loginAction } from '../../../redux/actions/loginAction'
import Inputs from '../../components/form_login/inputs'
import ButtonStyled from '../../components/buttons/button_styled';
import LinearGradient from 'react-native-linear-gradient';
// import { createIconSetFromFontello } from 'react-native-vector-icons';
//  import fontelloConfig from '../../../fonts/user.json';
//  console.log(fontelloConfig)
//  const IconUser = createIconSetFromFontello(fontelloConfig);
class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: 'Usuario',
            pass: 'Password',
            errorUser: '',
            errorPass: '',
        }
        console.log(Dimensions.get('screen').width + "X" + Dimensions.get('screen').height)
        console.log(Dimensions.get('window').width + "X" + Dimensions.get('window').height)

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
        if (JSON.stringify(this.props.login) !== JSON.stringify(nP.login)) {
            const { login } = nP
            if (login.data[1] == 400) {
                if ('Missing password' === login.data[0].error) {
                    this.setState({ errorPass: 'Missing password' })
                }
                if ('Missing email or username' === login.data[0].error) {
                    this.setState({ errorUser: 'Missing email or ID' })
                }
            }
            if (nP.login.data[1] == 200) {
                //console.log("entro")
                //console.log(nP.login.data[0].token)
                this.saveTokenUser(nP.login.data[0].token)
                this.props.navigation.navigate('ListFiesta')




            }
            if (nP.login.error == true) {
                this.setState({ errorMessage: nP.login.data.message })
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
                this.setState({ usuario: 'Usuario' })
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
        this.setState({ errorUser: '' })
        this.setState({ errorPass: '' })
        if (this.state.usuario === 'ID' || this.state.usuario === '') {
            this.setState({ usuario: '' })
            this.setState({ errorUser: 'Campo Requerido' })
        } else if (this.state.pass === 'Password' || this.state.pass === '') {
            this.setState({ pass: '' })
            this.setState({ errorPass: 'Campo Requerido' })
        } else {
            await this.props.loginAction(this.state.usuario, this.state.pass)
        }
    }
    onPressButtonRegister = () => {
        this.props.navigation.navigate('Register')
    }
    form_login_view = () => {
        return (
            <View style={{  marginTop: Platform.OS === 'ios' ? (Dimensions.get('window').height * 15) / 100 : (Dimensions.get('window').height * 5) / 100 }}>
                <Inputs
                    nameInput='user'
                    iconName='User'
                    fillIcon='#A40031'
                    viewBox=''
                    valueInputPlaceholder='Usuario'
                    valueInput={this.state.usuario}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    errorMessage={this.state.errorUser}
                    labelStyle={{ paddingBottom: 10 }}
                    onChangeText={this.onChangeText}
                />
                <Inputs
                    nameInput='pass'
                    iconName='Password'
                    fillIcon='#A40031'
                    viewBox=''
                    valueInputPlaceholder='Password'
                    valueInput={this.state.pass}
                    InputStyleForm={styles.text_form_input}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    errorMessage={this.state.errorPass}
                    onChangeText={this.onChangeText}
                    labelStyle={{ paddingBottom: 10 }}

                />

                <TouchableOpacity onPress={this.onPressButtonLogin} style={{ borderRadius: 100 }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.linearGradient} colors={['#A40031', '#1D182B']}>

                        <Text style={styles.buttonText}>
                            Iniciar Sesion
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{ marginTop: 30, flexDirection: 'row' }}>
                    <TouchableOpacity style={{marginRight:50}} onPress={this.onPressButtonRegister}>
                        <Text style={{ width:Dimensions.get('screen').width/3 ,fontSize: 12, color: '#A40031' }}>Registrarse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ textAlign:'right', width:Dimensions.get('screen').width/3,fontSize: 12, color: '#A40031' }}>Ayuda</Text>
                    </TouchableOpacity>
                </View>

                {/* <ButtonStyled
                    styleBotton={styles.bottonRegister}
                    TextBotton='Registrar'
                    onPressButton={this.onPressButtonRegister}
                >
                </ButtonStyled> */}
                <View style>
                    <Text style={{ marginTop: 30, color: 'red', alignItems: 'center' }}>{this.state.errorMessage}</Text>
                </View>
       
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
        color: 'blue'
    },
    linearGradient: {
        //flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 12,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    text_form_input: {
        marginLeft: 10,
        width: Dimensions.get('screen').width - 100,
        borderColor: '#fff',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        paddingLeft: 5,
        borderRadius: 30,
        opacity: 0.8,
        backgroundColor: '#fff'
    },
    bottonLogin: {
        marginTop: 10,
        marginLeft: 10,
        width: Dimensions.get('screen').width - 100,
        paddingLeft: 10,
        backgroundColor: '#A40031',
        alignContent: 'center'
    },
    bottonRegister: {
        marginTop: 10,
        width: Dimensions.get('screen').width - 70,
        backgroundColor: 'red',
        borderRadius: 30,
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