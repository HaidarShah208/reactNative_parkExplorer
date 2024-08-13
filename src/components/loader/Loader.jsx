import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.loadingAnimation}>
      <View style={styles.loadingRow}>
        <View style={styles.loadingBarLong} />
        <View style={styles.loadingBarShort} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingAnimation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust height for the parent container
    backgroundColor: '#f0f0f0', // Light background color
  },
  loadingRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end', // Align bars at the bottom
  },
  loadingBarLong: {
    width: 8,
    height: 50,
    marginHorizontal: 5,
    backgroundColor: '#0D6EFD',
    animation: 'loading 1s infinite ease-in-out',
  },
  loadingBarShort: {
    width: 8,
    height: 30,
    marginHorizontal: 5,
    backgroundColor: '#0D6EFD',
    animation: 'loading 1s infinite ease-in-out',
  },
});
