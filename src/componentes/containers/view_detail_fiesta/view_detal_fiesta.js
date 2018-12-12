import React,{Component} from 'react'
import { View, StyleSheet, Dimensions,Text,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';
import { material } from 'react-native-typography'
import {Tab} from 'native-base'
export default class ViewDetailFiesta extends Component{
   constructor(props){
      super(props)
   }
   render(){
      return (
         <ScrollView style={styles.scrollView}> 
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
         </ScrollView>
 
         )
   }
        
      
}
const styles = StyleSheet.create({
     scrollView:{
       marginTop:10,
       marginRight:10,
       marginLeft:10,
       height:(Dimensions.get('screen').height * 65)/100
     },
     view_main:{ 
         backgroundColor:'#fff', 
         //width:Dimensions.get('screen').width,
         flexDirection:'row',
         alignItems:'center',
         paddingRight:10,
         marginBottom:20
    },
    icon_main: {
        fontSize: 30,
         color: 'black',
         //marginRight:20,
    },
    texto_main: {
        color:'#000', 
        ...material.body2,
        marginLeft:20,
        
        paddingRight:20
       
    }
})