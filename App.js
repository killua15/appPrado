/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers, addListener } from 'react-navigation'
import { Provider, connect } from 'react-redux'
import configurationStore from './src/redux/store'
import Routes from './src/routes/Routes';
import { Root } from 'native-base'
const Navigation = StackNavigator(Routes, {
  headerMode: 'screen',
  cardStyle: {
    backgroundColor: '#fff'}
  })
const navReducer = (state, action) => {
  const newState = Navigation.router.getStateForAction(action, state)
  return newState || state
}
class App extends Component {
  render() {
    return (
      <Root>
        <Navigation></Navigation>
      </Root>

    );
  }
}

const store = configurationStore(navReducer)
const IndexApp = connect(state => ({ nav: state.nav }))(App)

export default IndexMain = () => {
  return (
    <Provider store={store}>
      <IndexApp />
    </Provider>
  )
}