import React, { Component } from 'react'
import { View, Platform, Dimensions, StyleSheet, FlatList } from 'react-native'
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
    await this.props.fiestaAction()
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
          style={{height:Dimensions.get('screen').height}}
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
    fiestaAction: () => dispatch(fiestaAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatListFiesta)
