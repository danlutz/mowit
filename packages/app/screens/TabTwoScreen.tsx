import * as React from 'react';
import { StyleSheet } from 'react-native';
import CameraPreview from '../components/CameraPreview';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CameraPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
