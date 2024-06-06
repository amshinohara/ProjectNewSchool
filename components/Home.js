import {
  Text,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>NewSchool</Text>
      </Card>
      <Card style={styles.card}>
        <Image source={require('../assets/banner.png')} style={styles.image} />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Cadastrar Disciplina</Text>
        <Text style={styles.text}>Área para cadastrar novas disciplinas</Text>
        <Button
          mode="contained"
          color="#ff7f50"
          title="Cadastrar Disciplina"
          onPress={() => navigation.navigate('Cadastrar Disciplina')}
        />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Cadastrar Aluno</Text>
        <Text style={styles.text}>Área para cadastrar novos alunos</Text>
        <Button
          mode="contained"
          color="#ff7f50"
          title="Cadastrar Aluno"
          onPress={() => navigation.navigate('Cadastrar Aluno')}
        />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Atribuir Nota</Text>
        <Text style={styles.text}>Área para atribuir notas aos alunos</Text>
        <Button
          mode="contained"
          color="#ff7f50"
          title="Atribuir Nota"
          onPress={() => navigation.navigate('Atribuir Nota')}
        />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Painel Notas dos Alunos</Text>
        <Text style={styles.text}>Área para visualizar notas dos alunos</Text>
        <Button
          mode="contained"
          color="#ff7f50"
          title="Painel Notas dos Alunos"
          onPress={() => navigation.navigate('Painel Notas dos Alunos')}
        />
      </Card>
    </ScrollView>
  );
}
