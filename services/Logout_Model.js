import { auth } from '../Firebase';
import { Alert } from 'react-native';

export const handleLogout = async (navigation) => {
  try {
    await auth.signOut();
    Alert.alert('Sucesso', 'Logout efetuado com sucesso!');
    navigation.navigate('Login');
  } catch (error) {
    Alert.alert('Erro', error.message);
  }
};
