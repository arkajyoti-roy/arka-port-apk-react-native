import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    // <View>
     <View style={styles.container}> 
      <WebView 
        source={{ uri: 'https://arkajyoti.shop' }} 

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
