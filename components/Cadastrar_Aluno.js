import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  Button,
  ScrollView,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Utils';
import { DataContext } from '../DataContext';
import {
  fetchAlunos,
  handleRegistrar,
  handleExcluirAluno,
  handleCorrigir,
} from '../services/Aluno_Model';

export default function CadastrarAluno() {
  const { alunos, setAlunos } = useContext(DataContext);
  const [nomeAluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [alunoParaEditar, setAlunoParaEditar] = useState(null);

  useEffect(() => {
    const loadAlunos = async () => {
      try {
        const alunosData = await fetchAlunos();
        setAlunos(alunosData);
      } catch (error) {
        console.error('Error fetching alunos: ', error);
      }
    };

    loadAlunos();
  }, [setAlunos]);

  useEffect(() => {
    const loadNotas = async () => {
      try {
        const notasData = await fetchNotas();
        setNotas(notasData);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadNotas();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Cadastrar Aluno</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>Nome do Aluno:</Text>
        <TextInput
          onChangeText={setNomeAluno}
          style={styles.input}
          placeholder="Nome do Aluno"
          value={nomeAluno}
        />
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="E-mail"
          value={email}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          onChangeText={setTelefone}
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
        />
        <Button
          mode="contained"
          color="#ff7f50"
          title={alunoParaEditar ? 'Atualizar Aluno' : 'Registrar Aluno'}
          onPress={() =>
            handleRegistrar(
              nomeAluno,
              email,
              telefone,
              alunoParaEditar,
              setNomeAluno,
              setEmail,
              setTelefone,
              setAlunoParaEditar,
              setAlunos
            )
          }
        />
      </Card>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Alunos Cadastrados</Text>
        {alunos.length > 0 ? (
          <FlatList
            data={alunos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                  style={styles.touchableOpacity}>
                  <Icon
                    name="user"
                    size={18}
                    color="#999"
                    style={styles.icon}
                  />
                  <Text style={styles.itemtitulo}>{item.nome_aluno}</Text>
                </TouchableOpacity>
                {expandedId === item.id && (
                  <View style={styles.cursoContainer}>
                    <Text style={styles.label}>Email: {item.email}</Text>
                    <Text style={styles.label}>Telefone: {item.telefone}</Text>
                    <Text style={styles.label}>
                      Matrícula: {item.matricula}
                    </Text>
                    <Button
                      onPress={() =>
                        handleCorrigir(
                          item,
                          setNomeAluno,
                          setEmail,
                          setTelefone,
                          setAlunoParaEditar
                        )
                      }
                      title="Corrigir"
                      color="#3366ff"
                    />
                    <Button
                      onPress={() => handleExcluirAluno(item.id, setAlunos)}
                      title="Excluir"
                      color="#ff4500"
                    />
                  </View>
                )}
              </View>
            )}
          />
        ) : (
          <Text style={styles.itemtitulo}>Nenhum Aluno Cadastrado!</Text>
        )}
      </Card>
    </ScrollView>
  );
}
