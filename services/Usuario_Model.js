import { auth } from '../Firebase';

export const registrarUsuario = async (email, senha) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      senha
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const verificarCampos = (email, senha) => {
  return email.trim() !== '' && senha.trim() !== '';
};

export const registrarNovoUsuario = async (email, senha, limparCampos) => {
  try {
    const user = await registrarUsuario(email, senha);
    alert('Registro inserido com sucesso!');
    limparCampos();
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert(
        'Erro ao inserir: O endereço de email já está em uso por outra conta.'
      );
    } else {
      alert('Erro ao inserir: ' + error.message);
    }
  }
};
