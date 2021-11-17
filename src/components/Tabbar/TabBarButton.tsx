import React from 'react';
import { TouchableOpacityProps, Platform } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface TabButtonProps extends TouchableOpacityProps {
  Icon: React.ReactElement;

  isFocused: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({
  Icon,

  testID,
  isFocused,

  onPress,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      testID={testID}
      style={[styles.container]}
    >
      {isFocused ? (
        <View style={styles.selectedCursor} />
      ) : (
        <View style={styles.unselectedCursor} />
      )}

      {Icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    color: '#2D2942',
  },
  icon: {
    marginBottom: 7,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Lato',
    color: '#9694A0',
  },
  selectedCursor: {
    width: 40,
    borderBottomWidth: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: -2,
    marginBottom: 4,
  },
  unselectedCursor: {
    width: 40,
    borderBottomWidth: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: -2,
    borderColor: '#FAFAFA',
    marginBottom: 4,
  },
  selected: {
    alignItems: 'center',
    color: '#2D2942',
  },
  countBadge: {
    position: 'absolute',
    top: 2,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 32 / 2,
    borderColor: 'white',
    borderWidth: 1,
    alignContent: 'center',
  },
  countText: {
    alignSelf: 'center',
    fontFamily: 'Lato',
    fontSize: 11,
    bottom: Platform.OS === 'android' ? 1 : 0,
  },
});

export default TabButton;
