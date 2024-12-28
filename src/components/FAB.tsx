import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

type FABProps = {
  label: string;

  position?: 'left' | 'right';

  onPress: () => void;
  onLongPress?: () => void;
};

export const FAB = ({
  label,
  position = 'right',
  onPress,
  onLongPress,
}: FABProps) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.fabButton,
        position === 'left' ? styles.fabButtonLeft : styles.fabButtonRight,
        pressed && { backgroundColor: '#2c2c2c' },
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

// casi como CSS para el estilo
const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
    bottom: 20,
    // right: 20,
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    padding: 20,
    borderRadius: 12,

    // // sombra en Android e iOS igual:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 4,
    shadowRadius: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  fabButtonRight: {
    right: 20,
  },
  fabButtonLeft: {
    left: 20,
  },
});
