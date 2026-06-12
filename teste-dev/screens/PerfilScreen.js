import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.logo}>
          🌸 Meu Perfil
        </Text>
      </View>

      <Image
        source={require('../assets/foto-perfil.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        Letícia Gomes
      </Text>

      <Text style={styles.cargo}>
        Desenvolvedora Mobile Júnior
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>📍 São Paulo</Text>
        <Text style={styles.info}>🎓 Técnico em Desenvolvimento de Sistemas</Text>
        <Text style={styles.info}>💻 React Native</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>
          Sobre Mim
        </Text>

        <Text style={styles.texto}>
          Olá! Sou a Letícia, estudante da escola SENAI VALINHOS e estou cursando Técnico em Desenvolvimento de Sistemas. Sou apaixonada por tecnologia e estou focada em me tornar uma desenvolvedora mobile de sucesso.
          Atualmente estudo React Native, JavaScript e Git/GitHub.
          Estou buscando minha primeira oportunidade profissional
          para aplicar meus conhecimentos e continuar evoluindo
          como desenvolvedor.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF7FA',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 25,
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E91E63',
  },

  imagem: {
    width: 170,
    height: 170,
    borderRadius: 85,

    borderWidth: 5,
    borderColor: '#FFFFFF',

    shadowColor: '#F48FB1',
    shadowOpacity: 0.3,
    shadowRadius: 15,

    elevation: 8,
  },

  nome: {
    fontSize: 30,
    fontWeight: '800',
    color: '#E91E63',
    marginTop: 20,
  },

  cargo: {
    fontSize: 17,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 30,
  },

  info: {
    backgroundColor: '#FFE4EC',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,

    color: '#E91E63',
    fontWeight: '600',
  },

  card: {
    width: '100%',
    maxWidth: 500,

    backgroundColor: '#FFFFFF',

    padding: 25,

    borderRadius: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 15,
  },

  texto: {
    fontSize: 16,
    lineHeight: 28,
    color: '#555',
  },
});