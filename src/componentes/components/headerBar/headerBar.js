import React from 'react'
import { Header, Left, Icon, Button, Right, Body, Title } from 'native-base'
import {StyleSheet,AsyncStorage} from 'react-native'
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
    const {title,color,backIcon,MenuIcon,opacityHeader} = props
    if(backIcon == false){
     
        buttonBack=color
        
    }else{
        buttonBack='black'
        
    }
    if(MenuIcon==false){
       
        buttonMenu=color
    }else{
        buttonMenu='black'
    }
    
    return (
        <Header style={{backgroundColor: color, opacity:opacityHeader}}>
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
                     onPress={()=>salirApp()}
                     transparent>
                    <Icon name='menu' style={{color:buttonMenu}}/>
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