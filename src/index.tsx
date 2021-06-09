import React from 'react';
import {View, Text} from 'react-native';

import {test} from './pages/test/test/index';

test();

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>app</Text>
      </View>
    );
  }
}

export default App;
