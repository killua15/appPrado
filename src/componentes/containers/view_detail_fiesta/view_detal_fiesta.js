import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, ScrollView,Platform } from 'react-native'
import { Icon } from 'react-native-elements';
import { material } from 'react-native-typography'
import { Tab } from 'native-base'
export default class ViewDetailFiesta extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <View style={{marginLeft:10,height:Platform.OS == 'ios' ? Dimensions.get('screen').height :Dimensions.get('screen').height }}>
            <View style={styles.view_main}>
               <Icon name='align-left' type='foundation' size={25} style={styles.icon_main}></Icon>
               <Text style={styles.texto_main}>{this.props.Item[0].text}</Text>
            </View>
            <View style={styles.view_main}>
               <Icon name='clock' type='foundation' size={25} style={styles.icon_main}></Icon>
               <Text style={styles.texto_main}>{this.props.Item[0].starts} del {this.props.Item[0].date}</Text>
            </View>
            <View style={styles.view_main}>
               <Icon name='dollar-bill' type='foundation' size={25} style={styles.icon_main}></Icon>
               <Text style={styles.texto_main}>Entrada Free</Text>
            </View>
            <View style={styles.view_main}>
               <Icon name='map' type='foundation' size={25} style={styles.icon_main}></Icon>
               <Text style={styles.texto_main}>{this.props.Item[0].location}</Text>
            </View>
           
         </View>

      )
   }


}
const styles = StyleSheet.create({

   view_main: {
      backgroundColor: '#fff',
      //height:Dimensions.get('screen').height,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
      marginBottom: 20
   },
   icon_main: {
      fontSize: 30,
      color: 'black',
      //marginRight:20,
   },
   texto_main: {
      color: '#000',
      ...material.body2,
      marginLeft: 20,

      paddingRight: 20

   }
})