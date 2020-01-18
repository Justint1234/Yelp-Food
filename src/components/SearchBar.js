import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AndroidIcon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.background}>
      {/* <AndroidIcon styles={styles.iconStyle} name="search" size={40} /> */}
      <TextInput 
      style={styles.inputStyle} 
      placeholder="Search" 
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
