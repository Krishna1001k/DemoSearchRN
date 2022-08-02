import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/reducer/Store';
import Route from './src/Redux/router';
import sagaStore from './src/Redux/saga/sagaStore';
const App = () => {
  return (
    <Provider store={sagaStore}>
      <Route />
    </Provider>
  );
};

export default App;
