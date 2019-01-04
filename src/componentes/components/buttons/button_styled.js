import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
const ButtonStyled = (props) => {
  return (
    <Button
      style={props.styleBotton}
      onPress={props.onPressButton}
      disabled={props.statusButton}
      rounded

    >
      <Text>{props.TextBotton}</Text>
      {/* <Icon name='arrow-forward' /> */}
    </Button>
  )
}
export default ButtonStyled