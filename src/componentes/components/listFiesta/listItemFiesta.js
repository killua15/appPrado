import React from 'react'
import { View,Image,TouchableOpacity,StyleSheet } from 'react-native'
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


getPicture = (arrayImage) =>{
  return arrayImage.map(el => {
        if(el != null){
          return el
        }   
   })
}


const ListItemFiesta = (props) => {
  const {
    image,
    name,
    textResumeFiesta,
    dateFiesta } = props.item

    var images = []
    images= this.getPicture(image)
    console.log(props)
  return (
    <TouchableOpacity 
      onPress={() => props.onHandleDetalleFiesta(props.item)}
    >
    <Card style={styles.card_main}>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: image[4]['#text']}} />
          <Body>
            <Text>{name}</Text>
            <Text note>10/10/2018</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{ uri: image[4]['#text'] }} style={{ height: 200, width: 200, flex: 1 }} />
          <Text>
          Class leo molestie sollicitudin metus cras ante massa ultricies tincidunt, suspendisse imperdiet cubilia dignissim sociis habitant magnis. Sodales ultricies curae interdum in purus accumsan, urna porttitor aptent blandit semper nulla ac, pretium metus magna habitasse netus. Nisi taciti facilisis urna porta, auctor interdum habitant penatibus netus, ac est tempus.
          </Text>
        </Body>
      </CardItem>
    </Card>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
     card_main : {
         marginTop:10
     }
})
export default ListItemFiesta