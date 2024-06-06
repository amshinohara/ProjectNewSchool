import { auth } from '../Firebase';

export const autenticarLogin = async (email, senha) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, senha);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const esqueceuSenha = async (email) => {
  if (!email.trim()) {
    throw new Error('Por favor, insira um e-mail válido.');
  }

  try {
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    throw error;
  }
};

export const handleAutenticarLogin = async (email, senha, navigation) => {
  try {
    const user = await autenticarLogin(email, senha);
    Alert.alert('Sucesso', `Logado com sucesso com o email: ${user.email}`);
    navigation.navigate('Home');
  } catch (error) {
    Alert.alert('Erro', `Erro ao inserir: ${error.message}`);
  }
};

export const handleEsqueceuSenha = async (email) => {
  try {
    await esqueceuSenha(email);
    Alert.alert(
      'Sucesso',
      'Um e-mail de redefinição de senha foi enviado para o endereço fornecido.'
    );
  } catch (error) {
    Alert.alert(
      'Erro',
      `Ocorreu um erro ao enviar o e-mail de redefinição de senha. ${error.message}`
    );
  }
};
