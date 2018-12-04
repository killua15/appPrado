import React from 'react'
import {View} from 'react-native'
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

const RadioGenero = (props) => {
  
    return (
        <View>
            <ListItem>
            <Left>
              <Text>Mujer</Text>
            </Left>
            <Right>
              <Radio onPress={props.onPress} selected={!props.genero_radio} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Hombre</Text>
            </Left>
            <Right>
              <Radio onPress={props.onPress} selected={props.genero_radio} />
            </Right>
          </ListItem>
        </View>
    )
} 
export default RadioGenero