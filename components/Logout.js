import {
  Text,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import { handleLogout } from '../services/Logout_Model';

const LogoutScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Image source={require('../assets/banner.png')} style={styles.image} />
      </Card>
      <Text style={styles.titulo}>Tela de Logout</Text>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Gostaria de Deslogar?</Text>
        <Text style={styles.text}>Para deslogar, clique no botão abaixo.</Text>
        <Button
          mode="contained"
          color="#001f3f"
          title="Deslogar"
          onPress={() => handleLogout(navigation)}
        />
      </Card>
    </ScrollView>
  );
};

export default LogoutScreen;
