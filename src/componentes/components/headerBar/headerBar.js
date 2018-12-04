import React from 'react'
import { Header, Left, Icon, Button, Right, Body, Title } from 'native-base'
import {StyleSheet} from 'react-native'
var buttonBack 
const HeaderBar = (props) => {
    const {title,color,backIcon} = props
    if(backIcon == false){
     
        buttonBack=color
    }else{
        buttonBack='black'
    }
    
    return (
        <Header style={{backgroundColor: color}}>
            <Left >
                <Button transparent
                    onPress={props.onHandleBackButton} >
                    <Icon name='arrow-back'  style={{color : buttonBack}}/>
                </Button>
            </Left>
            <Body>
                <Title style={{fontSize:18}}>{title}</Title>
            </Body>
            <Right>
                <Button 
                     transparent>
                    <Icon name='menu' style={{color:'#000'}}/>
                </Button>
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