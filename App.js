import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { MyWebComponent } from './components/MyWebView';


const App = () => {
  return (
    <View style={styles.view}>
      <MyWebComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
}
});

export default App;
