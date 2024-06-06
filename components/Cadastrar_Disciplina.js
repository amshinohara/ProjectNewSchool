import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  Button,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './Utils';
import { DataContext } from '../DataContext';
import {
  carregarDisciplinas,
  handleExcluir,
  handleRegistrar,
  handleCorrigir,
} from '../services/Disciplina_Model';

export default function CadastrarDisciplina() {
  const { disciplinas, setDisciplinas } = useContext(DataContext);
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [disciplinaParaEditar, setDisciplinaParaEditar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      setLoading(true);
      try {
        const disciplinasData = await carregarDisciplinas();
        setDisciplinas(disciplinasData);
      } catch (error) {
        alert('Erro ao carregar disciplinas: ' + error.message);
      }
      setLoading(false);
    };

    fetchDisciplinas();
  }, [setDisciplinas]);

  const handleExcluirClick = async (disciplinaId) => {
    await handleExcluir(disciplinaId, setDisciplinas);
  };

  const handleRegistrarClick = async () => {
    await handleRegistrar(
      nomeDisciplina,
      disciplinaParaEditar,
      setNomeDisciplina,
      setDisciplinaParaEditar,
      setDisciplinas
    );
  };

  const handleCorrigirClick = (disciplina) => {
    handleCorrigir(disciplina, setNomeDisciplina, setDisciplinaParaEditar);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Cadastrar Disciplina</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>Informe o nome da disciplina:</Text>
        <TextInput
          onChangeText={setNomeDisciplina}
          style={styles.input}
          placeholder="Nome da Disciplina"
          value={nomeDisciplina}
        />
        <Button
          mode="contained"
          color="#ff7f50"
          title={
            disciplinaParaEditar
              ? 'Atualizar Disciplina'
              : 'Registrar Disciplina'
          }
          onPress={handleRegistrarClick}
          disabled={!nomeDisciplina.trim()}
        />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.titulo}>Disciplinas Cadastradas</Text>
        {loading ? (
          <Text style={styles.itemtitulo}>Carregando...</Text>
        ) : disciplinas.length > 0 ? (
          disciplinas.map((disciplina) => (
            <View key={disciplina.id} style={styles.cursoContainer}>
              <Text style={styles.itemText}>{disciplina.nome_disciplina}</Text>
              <Button
                onPress={() => handleCorrigirClick(disciplina)}
                title="Corrigir"
                color="#3366ff"
              />
              <Button
                onPress={() => handleExcluir(disciplina.id, disciplina.nome_disciplina, setDisciplinas)}
                title="Excluir"
                color="#ff4500"
              />
            </View>
          ))
        ) : (
          <Text style={styles.itemtitulo}>Nenhuma Disciplina Cadastrada!</Text>
        )}
      </Card>
    </ScrollView>
  );
}
