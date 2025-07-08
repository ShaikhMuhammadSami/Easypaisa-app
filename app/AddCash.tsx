import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function SendMoney() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipient Name"
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        editable={false}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Message (optional)"
        editable={false}
      /> */}
      <TouchableOpacity style={styles.button} disabled>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222f3e',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#c8d6e5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#10ac84',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
