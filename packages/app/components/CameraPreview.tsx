import React, { useState, useEffect ,} from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera, Constants } from 'expo-camera';
import { Text, View } from "./Themed"


const CameraPreview = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera type={type} style={{ width: width, height: width }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                  );
                }}>
                  <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraPreview
