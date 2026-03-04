import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.display}></Text>
      </View>
      <View>
        <View style={styles.row}>
        <TouchableOpacity>7</TouchableOpacity>
        <TouchableOpacity>8</TouchableOpacity>
        <TouchableOpacity>9</TouchableOpacity>
        <TouchableOpacity>/</TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity>4</TouchableOpacity>
        <TouchableOpacity>5</TouchableOpacity>
        <TouchableOpacity>6</TouchableOpacity>
        <TouchableOpacity>*</TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity>1</TouchableOpacity>
        <TouchableOpacity>2</TouchableOpacity>
        <TouchableOpacity>3</TouchableOpacity>
        <TouchableOpacity>-</TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity>0</TouchableOpacity>
        <TouchableOpacity>√</TouchableOpacity>
        <TouchableOpacity>=</TouchableOpacity>
        <TouchableOpacity>+</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  display: {
    borderColor: 'black'
  }
});
