import React from 'react'
import { View, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { material } from 'react-native-typography'
const ListItemFiesta = (props) => {

  const {
    thumb,
    title,
    date,
    dateFiesta } = props.item

  console.log(thumb)
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', marginTop: 10 }}
      onPress={() => props.onHandleDetalleFiesta(props.item)}>
      <ImageBackground
        source={{ uri: thumb }}
        style={styles.view_imageBackgroud}
        imageStyle={styles.imageStyleImageBackgroudn}>
        <View style={styles.view_text}>
          <Text style={styles.text_title}>
            {title}
          </Text>
        </View>
        <View style={styles.view_text_fecha}>
          <Text style={styles.text_fecha}>
            {date}
          </Text>
        </View>

      </ImageBackground>


    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  card_main: {
    marginTop: 10
  },
  view_imageBackgroud: {
    width: Dimensions.get('screen').width,
    height: 230,
    alignContent: 'center'
    , justifyContent: 'center'
  },
  imageStyleImageBackgroudn: {
    width: Dimensions.get('screen').width,
    height: 230,
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
    alignContent: 'center',
    backgroundColor: '#F10915',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.8,
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
  }


})
export default ListItemFiesta