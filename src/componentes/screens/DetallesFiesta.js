import React, { Component } from 'react'
import { View, Platform, Image,StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import FormLogin from '../containers/form_login/form_login';
import { material } from 'react-native-typography'
import HeaderBar from '../components/headerBar/headerBar';
import FlatListFiesta from '../containers/listFiesta/flatListFiesta';
import ListItemFiesta from '../components/listFiesta/listItemFiesta';
export default class DetallesFiesta extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        // const { navigation } = this.props
        // item = navigation.getParam('item', "")
    }
    onHandleBackButton = () => {
        this.props.navigation.goBack()
    }
    render() {
        console.log(this.props.item)
        return (

            <View >
                <HeaderBar
                    color='red'
                    title='Detalles'
                    backIcon={true}
                    MenuIcon={true}
                    onHandleBackButton={this.onHandleBackButton}
                />
                <View style={styles.container}>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
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
