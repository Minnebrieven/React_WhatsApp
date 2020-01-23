import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Container, List, ListItem, View, Thumbnail, Header, Fab, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Button, Title, ScrollableTab } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18}}> <Icon style={{color:'white'}} name='camera'/> </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}