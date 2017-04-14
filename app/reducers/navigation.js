import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import { AppNavigator } from '../navigation';

export const navReducer = (state, action) => {
  console.log("AppNavigator")
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

connect(state => ({
  nav: state.nav,
}))

export default class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
