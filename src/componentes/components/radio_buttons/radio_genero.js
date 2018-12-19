import React from 'react'
import { View, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
const RadioGenero = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
     
        <TouchableOpacity style={styles.radio_view} onPress={ () => props.onPress("male")}>
          <Text>Hombre</Text>
          <Radio onPress={() => props.onPress("male") } style={{ marginLeft: 30 }} selected={props.genero_radio} />
        </TouchableOpacity>
    
      
        <TouchableOpacity  style={styles.radio_view} onPress={ () => props.onPress("female")}>
          <Text>Mujer</Text>
          <Radio onPress={() => props.onPress("female") }  style={{ marginLeft: 30 }} selected={!props.genero_radio} />
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    //flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 80,
    marginBottom:10
  },
  radio_view: {
    flexDirection: 'row',
  }

})
export default RadioGenero