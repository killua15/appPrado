import React, { Component } from 'react'
import { View, Alert,StyleSheet, Dimensions, ImageBackground, Platform, ScrollView,AsyncStorage} from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Text } from 'react-native-elements'
import { itemAction } from '../../../redux/actions/itemAction'
import { goingAction } from '../../../redux/actions/goingAction'
import { Spinner } from 'native-base';
import { material } from 'react-native-typography'
import ViewDetailFiesta from '../../containers/view_detail_fiesta/view_detal_fiesta';
import { Button, Tabs, Tab } from 'native-base';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


class DetailFiesta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cod_f : ''
        }
    }
    async componentWillMount() {
        console.log(this.props.idFiesta)
        var token = await this.getUserToken()
        await this.props.itemAction(this.props.idFiesta,token)
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
    onClickAsistir = async () => {
        console.log("asdasdsd")
         var token = await this.getUserToken()
        if(this.state.cod_f != ''){
            await this.props.goingAction(this.state.cod_f,this.props.idFiesta,token)
            this.setState({cod_f:''})
            Alert.alert(
                'Informacion',
                'ya te has anotado a la lista del evento...',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ]);
        }else{
            Alert.alert(
                'Advertencia',
                'Debe llenar el campo de Codigo',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 
                ]);
        }
      
    }
    onChangeTextCod = (val) =>{
           this.setState({cod_f:val})
    }
    
    renderDetails = () => {
        const { image, title, date, text } = this.props.itemFiesta.data[0]
        console.log(image)
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: `http://nocheynoche.com/storage/${image}` }}
                    style={styles.view_imageBackgroud}
                    imageStyle={styles.imageStyleImageBackgroudn}>

                    <View style={styles.view_text}>
                        <Item > 
                            <Input placeholder='Codigo Evento'  onChangeText={this.onChangeTextCod}></Input>
                        </Item>
                    </View>
                    <View style={{ alignSelf: 'center', width: (Dimensions.get('screen').width * 70) / 100 }}>


                        {
                            this.props.itemFiesta.data[1] == true ?
                                <Button block danger
                                     onPress={this.onClickAsistir}>
                                    <Text>Asistir</Text>
                                </Button>
                                :
                                <Button block primary  onPress={this.onClickAsistir}>
                                    <Text>Asistir</Text>
                                </Button>
                        }

                    </View>
                </ImageBackground>
                <View style={{ width: Dimensions.get('screen').width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'grey', height: (Dimensions.get('screen').width * 15) / 100 }}>
                    <View>
                        <Text style={{ marginLeft: 5, fontSize: Platform.OS == 'ios' ? 16 : 10 }}>IFORMACION</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: Platform.OS == 'ios' ? 16 : 10 }}> UBICACION </Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: Platform.OS == 'ios' ? 16 : 10 }}>COMENTARIOS </Text>
                    </View>
                </View>
                <ScrollView style={{ marginTop: 10, height: Platform.OS == 'ios' ? Dimensions.get('screen').height : Dimensions.get('screen').height - 50 }}>
                    <ViewDetailFiesta Item={this.props.itemFiesta.data} />
                </ScrollView>

            </View>
        )
    }
    render() {
        console.log(this.props)
        return (
            this.props.itemFiesta.isFeching == true ?
                <Spinner></Spinner>
                :
                this.renderDetails()
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // marginTop:(Dimensions.get('screen').height*3)/100,
    },
    image_main: {
        height: (Dimensions.get('screen').height * 40) / 100,
        width: Dimensions.get('screen').width
    },
    view_imageBackgroud: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height * 35) / 100,
        alignContent: 'center',
        justifyContent: 'center',

    },
    imageStyleImageBackgroudn: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height * 35) / 100,
        resizeMode: 'stretch'
    },
    view_text_fecha: {
        flex: 0.3,
        alignContent: 'center',
        backgroundColor: '#F10915',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.8,
    },
    view_text: {
        flex: 0.3,
        marginBottom: 10,
        marginLeft:20,
        marginRight:20,
        alignContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        //opacity: 0.,
    },
    text_title: {
        ...material.headline,
        color: '#fff',
        alignSelf: 'center'
    },
    text_fecha: {
        ...material.headline,
        color: '#fff',
        alignSelf: 'center'
    },
})
const mapStateToProps = (state) => {
    const { itemFiesta,going } = state
    return { itemFiesta,going }
}
const mapDispatchToProps = dispatch => {
    return {
       
            itemAction: (id,token) => dispatch(itemAction(id,token)),   
            goingAction: (cod_f,id_f) => dispatch(goingAction(cod_f,id_f))
          
       
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailFiesta) 