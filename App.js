import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [display, setDisplay] = useState('0')

  function updateDisplay(num){
    return setDisplay( )
  }

  return (
    <View style={styles.container}>
      <View style={styles.display} >
        <Text style={styles.digito}>{display}</Text>
      </View>
      <View>
        <View style={styles.linha}>
          <TouchableOpacity onPress={()=> updateDisplay(7)}>
            <Text style={styles.row}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> updateDisplay(8)}>
            <Text style={styles.row}>8</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=> updateDisplay(9)}>
            <Text style={styles.row}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity onPress={()=> updateDisplay(4)}>
            <Text style={styles.row}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> updateDisplay(5)}>
            <Text style={styles.row}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> updateDisplay(6)}>
            <Text style={styles.row}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity onPress={()=> updateDisplay(1)}>
            <Text style={styles.row}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> updateDisplay(2)}>
            <Text style={styles.row}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> updateDisplay(3)}>
            <Text style={styles.row}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity onPress={()=> updateDisplay(0)}>
            <Text style={styles.row}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>√</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.row}>+</Text>
          </TouchableOpacity>
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
  linha: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 2
  },
  row: {
    fontSize: 40,
    padding: 20,
    paddingHorizontal: 27,
  },
  display: {
    backgroundColor: '#000000ff',
    width: 300,
    padding: 30,
  },
  teclado: {
    marginTop: 10
  },
  digito: {
    color: '#FFFFFF'
  }
});
