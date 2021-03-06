import React, { Component } from 'react'
import { View, Platform, Dimensions, StyleSheet, FlatList,AsyncStorage } from 'react-native'
import { material } from 'react-native-typography'
import ListItemFiesta from '../../components/listFiesta/listItemFiesta';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fiestaAction } from '../../../redux/actions/listFiestaAction'
import { Spinner } from 'native-base';
class FlatListFiesta extends Component {
  static navigationOptions = {
    header: null
  }
  async componentWillMount() {
    await this.getDataList()
  }

  onHandleDetalleFiesta = (item) => {
    this.props.navigation.navigate('DetallesFiesta', { id: item.id })
  }
  getUserToken = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('tokenUser') || 'none';
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
    console.log(userId)
    return userId;

}
  renderRow = ({ item }) => {
    console.log(item)
    return (
      <ListItemFiesta
        item={item}
        onHandleDetalleFiesta={this.onHandleDetalleFiesta}
      />
    )
  }
  getDataList = async () => {
    //console.log(this.props)
    var token = await this.getUserToken();
    await this.props.fiestaAction(token)
  }
  render() {
    const { fiestas } = this.props
    //console.log(fiestas)
    var listFiestas = []
    //console.log(fiestas.isFeching)
    if (fiestas.isFeching == false) {
      if (fiestas.data != null) {
        console.log(fiestas)
        listFiestas = fiestas.data.data
        // console.log(listFiestas)

      }
    }

    return (

      fiestas.isFeching == true ?
        <Spinner color='blue'></Spinner>
        :
        <FlatList 
          style={{height:Platform.OS == 'ios' ? Dimensions.get('screen').height-100 : Dimensions.get('screen').height - 140 }}
          data={fiestas.data}
          renderItem={this.renderRow}
          keyExtractor={item => item.id}
        />

    )
  }
}
const mapStateToProps = (state) => {
  const { fiestas } = state
  return { fiestas }
}
const mapDispatchToProps = dispatch => {
  return {
    fiestaAction: (token) => dispatch(fiestaAction(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatListFiesta)
