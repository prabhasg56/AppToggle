import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBox = ({ value, onChangeText, placeholder = "Search" }) => {
  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#888"
      />

      {value.length === 0 ? (
        <Ionicons name="search" size={20} color="#888" style={styles.iconRight} />
      ) : (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons name="close-circle" size={20} color="#888" style={styles.iconRight} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  iconRight: {
    marginLeft: 8,
  },
});
