import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/reducer/Store';
import Route from './src/Redux/router';
const App = () => {
  return (
    <Provider store={Store}>
      <Route />
    </Provider>
  );
};

export default App;
