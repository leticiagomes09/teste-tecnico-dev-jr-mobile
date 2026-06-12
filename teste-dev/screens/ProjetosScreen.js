import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  const enviarContato = () => {
    Alert.alert(
      'Sucesso 🎉',
      'Mensagem enviada com sucesso!'
    );

    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
  Projetos
</Text>

<View style={styles.card}>
  <Text style={styles.nomeProjeto}>
    🔢 App Contador
  </Text>

  <Text style={styles.descricao}>
    Aplicativo desenvolvido em React Native com
    funcionalidades de incrementar, decrementar e
    resetar valores utilizando gerenciamento de estado
    com React Hooks.
  </Text>
</View>

<View style={styles.card}>
  <Text style={styles.nomeProjeto}>
    📍 App Busca CEP
  </Text>

  <Text style={styles.descricao}>
    Aplicativo que realiza consultas de CEP através de
    API externa, exibindo informações como endereço,
    bairro, cidade e estado de forma rápida e intuitiva.
  </Text>
</View>

<View style={styles.card}>
  <Text style={styles.nomeProjeto}>
    ✅ App Lista de Tarefas
  </Text>

  <Text style={styles.descricao}>
    Aplicação para gerenciamento de tarefas permitindo
    adicionar, visualizar e remover atividades,
    auxiliando na organização do dia a dia.
  </Text>
</View>

<View style={styles.card}>
  <Text style={styles.nomeProjeto}>
    🗺️ Guia Turístico Digital
  </Text>

  <Text style={styles.descricao}>
    Aplicativo desenvolvido para apresentar pontos
    turísticos, informações culturais e locais de
    interesse, proporcionando uma experiência prática
    para visitantes e turistas.
  </Text>
</View>

      <Text style={styles.titulo}>
         Contato
      </Text>

      <View style={styles.card}>
        <Text style={styles.contato}>
           leticia.m.gomes10@aluno.senai.br
        </Text>

        <Text style={styles.contato}>
           github.com/leticiagomes09
        </Text>


        <TextInput
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarContato}
        >
          <Text style={styles.botaoTexto}>
            Enviar Contato
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  nomeProjeto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },

  contato: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
  },

  input: {
    borderWidth: 1,
    borderColor: '#FFD1DC',
    backgroundColor: '#FFF7FA',
    borderRadius: 15,
    padding: 15,
    height: 120,
    marginTop: 15,
    textAlignVertical: 'top',
  },

  botao: {
    backgroundColor: '#E91E63',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});