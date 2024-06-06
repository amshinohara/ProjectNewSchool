import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  Image,
  Button,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import {
  handleAutenticarLogin,
  handleEsqueceuSenha,
} from '../services/Login_Model';
import { auth } from '../Firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image source={require('../assets/banner.png')} style={styles.image} />
      </Card>
      <Text style={styles.titulo}>Tela de Login</Text>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Bem-Vindo!</Text>
        <Text style={styles.text}>
          Para acesso ao Aplicativo, faça o Login.
        </Text>
        <Card style={styles.formContainer}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Informe seu e-mail."
            value={email}
          />
          <Text style={styles.label}>Informe a senha:</Text>
          <TextInput
            onChangeText={setSenha}
            style={styles.input}
            placeholder="Informe a Senha"
            value={senha}
            secureTextEntry
          />
          <Button
            mode="contained"
            color="#001f3f"
            title="Entrar"
            onPress={() => handleAutenticarLogin(email, senha, navigation)}
          />
          <Text style={styles.link} onPress={() => handleEsqueceuSenha(email)}>
            Esqueceu sua senha? Clique aqui
          </Text>
        </Card>
        <Card style={styles.cardCadastro}>
          <Text style={styles.textCadastro}>Ainda não tem uma conta?</Text>
          <Button
            mode="contained"
            color="#ff7f50"
            title="Criar Conta"
            onPress={() => navigation.navigate('Cadastro de Usuário')}
          />
        </Card>
      </Card>
    </ScrollView>
  );
}
