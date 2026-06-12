import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const habilidades = [
  'React Native',
  'JavaScript',
  'HTML',
  'CSS',
  'Git e GitHub',
  'Node.js',
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
         Habilidades
      </Text>

      <FlatList
        data={habilidades}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.texto}>
              💻 {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 25,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  texto: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
  },
});