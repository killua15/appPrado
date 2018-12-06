import React, { Component } from 'react'
import { View, Platform, Text, StyleSheet, FlatList } from 'react-native'
import { material } from 'react-native-typography'
import ListItemFiesta from '../../components/listFiesta/listItemFiesta';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fiestaAction } from '../../../redux/actions/listFiestaAction'
class FlatListFiesta extends Component {
  static navigationOptions = {
    header: null
  }
  componentWillMount() {
     this.getDataList()
  }

  onClickItemFiesta = () => {

  }
  renderRow({ item }) {
    return (
      <ListItemFiesta
        onClickItemFiesta={this.onClickItemFiesta}
        item={item}
      />
    )
  }
  getDataList = async  () => {
    await this.props.fiestaAction()    
  }
  render() {
    const {fiestas} = this.props
    var listFiestas
    //console.log(fiestas.isFeching)
    if(fiestas.isFeching== false){
      if(fiestas.data != null){
       // console.log(fiestas.data.artist)
        listFiestas=fiestas.data.artist

      }
    }
    
    return (
      <FlatList
        data={listFiestas}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
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
