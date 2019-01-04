import React from 'react'
import { Header, Left, Icon, Button, Right, Body, Title } from 'native-base'
import { StyleSheet, AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
var buttonBack
var buttonMenu



const salirApp = async () => {
    try {
        await AsyncStorage.removeItem('tokenUser');
        console.log("token eliminado");
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
}
const HeaderBar = (props) => {
    const { title, color, backIcon, MenuIcon, opacityHeader } = props
    if (backIcon == false) {

        buttonBack = color

    } else {
        buttonBack = '#fff'

    }
    if (MenuIcon == false) {

        buttonMenu = color
    } else {
        buttonMenu = 'black'
    }
    menuIcon2 = () => {
        return (<Button
            onPress={() => salirApp()}
            transparent>
            <Icon name='menu' style={{ color: buttonMenu }} />
        </Button>)
    }
    return (
        <Header style={{ backgroundColor: color, opacity: opacityHeader }}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#A40031', '#1D182B']}
                style={[StyleSheet.absoluteFill, styles.linearGradient]}
            >


            </LinearGradient>
            <Left >
                <Button transparent
                    onPress={props.onHandleBackButton} >
                    <Icon name='arrow-back' style={{ color: buttonBack }} />
                </Button>
            </Left>
            <Body>
                <Title style={{ color: '#fff', fontSize: 18 }}>{title}</Title>
            </Body>
            <Right>
                {
                    MenuIcon == true ?
                        this.menuIcon2()
                        :
                        console.log('No hay menu')

                }
            </Right>

        </Header>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A4A7D',
        borderBottomWidth: 0
    }
});

export default HeaderBar