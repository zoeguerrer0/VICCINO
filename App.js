
import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Tabs from '../src/component/tab.justifyContent';

export default function App() {
  return (  
    <ScrollView>
      <View style={styles.container}>
    <Tabs/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
