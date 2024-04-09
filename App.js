import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();

    Animated.timing(backgroundAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation, backgroundAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0,1],
    outputRange: ['0%', '79.5%']
  });

  const moonColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['yellow', 'orange', 'black', 'orange', 'yellow']
  });

  const backgroundColor = backgroundAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#87CEEB', '#4682B4', '#00008B', '#4682B4', '#87CEEB']
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Eclipse 2024 🌒</Text>
      <View style={styles.sun} />
      <Animated.View style={[styles.moon, { left: moonLeft, backgroundColor: moonColor }]} />
    </Animated.View>
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
    marginBottom: 20,
    marigintop:'150%'
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'orange',
  },
});
