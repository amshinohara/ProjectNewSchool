import React, { useState, useEffect } from 'react';
import {
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import {
  registrarNovoUsuario,
  verificarCampos,
} from '../services/Usuario_Model';

export default function CadastrarUsuario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  const limparCampos = () => {
    setEmail('');
    setSenha('');
    setCamposPreenchidos(false);
  };

  useEffect(() => {
    setCamposPreenchidos(verificarCampos(email, senha));
  }, [email, senha]);

  const handleRegistrarUsuario = () => {
    registrarNovoUsuario(email, senha, limparCampos);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image source={require('../assets/banner.png')} style={styles.image} />
        <Text style={styles.titulo}>Cadastrar Novo Usuário</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>Informe o e-mail para cadastro:</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Informe o E-mail"
          value={email}
          label="email"
        />
        <Text style={styles.label}>Informe a senha:</Text>
        <TextInput
          onChangeText={(text) => setSenha(text)}
          style={styles.input}
          placeholder="Informe a Senha"
          value={senha}
          label="senha"
          secureTextEntry={true}
        />
        <Button
          mode="contained"
          color="#001f3f"
          title="Registrar Usuário"
          onPress={handleRegistrarUsuario}
          disabled={!camposPreenchidos}
        />
      </Card>
    </ScrollView>
  );
}
