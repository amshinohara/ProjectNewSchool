import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  Button,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { DataContext } from '../DataContext';
import { styles } from './Utils';
import {
  loadData,
  handleRegistrarNota,
  handleExcluirNota,
  notasPorDisciplina,
  fetchNotas,
} from '../services/Nota_Model';

export default function AtribuirNota() {
  const { alunos, setAlunos, disciplinas, setDisciplinas } =
    useContext(DataContext);
  const [selectedAluno, setSelectedAluno] = useState('');
  const [selectedDisciplina, setSelectedDisciplina] = useState('');
  const [notaFinal, setNotaFinal] = useState('');
  const [notas, setNotas] = useState([]);
  const [expandedDisciplina, setExpandedDisciplina] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const notasData = await fetchNotas();
        setNotas(notasData);
        loadData(setAlunos, setDisciplinas);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadData();
  }, [setAlunos, setDisciplinas]);

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Cadastrar Nota</Text>
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.label}>Aluno:</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(itemValue) => setSelectedAluno(itemValue)}
            items={alunos.map((aluno) => ({
              label: aluno.nome_aluno,
              value: aluno.id,
            }))}
            placeholder={{ label: 'Selecione um aluno', value: '' }}
            value={selectedAluno}
          />
        </View>
        <Text style={styles.label}>Disciplina:</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(itemValue) => setSelectedDisciplina(itemValue)}
            items={disciplinas.map((disciplina) => ({
              label: disciplina.nome_disciplina,
              value: disciplina.id,
            }))}
            placeholder={{ label: 'Selecione uma disciplina', value: '' }}
            value={selectedDisciplina}
          />
        </View>
        <Text style={styles.label}>Nota Final:</Text>
        <TextInput
          onChangeText={setNotaFinal}
          style={styles.input}
          placeholder="Nota Final"
          value={notaFinal}
          keyboardType="numeric"
        />
        <Button
          mode="contained"
          color="#ff7f50"
          title="Registrar Nota"
          onPress={() =>
            handleRegistrarNota(
              alunos,
              disciplinas,
              notas,
              selectedAluno,
              selectedDisciplina,
              notaFinal,
              setSelectedAluno,
              setSelectedDisciplina,
              setNotaFinal,
              () => loadData(setAlunos, setDisciplinas, setNotas)
            )
          }
          disabled={!selectedAluno || !selectedDisciplina || !notaFinal}
        />
      </Card>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Notas Cadastradas</Text>
        {Object.entries(notasPorDisciplina(notas)).map(
          ([disciplina, notasDaDisciplina]) => (
            <View key={disciplina}>
              <TouchableOpacity
                onPress={() =>
                  setExpandedDisciplina(
                    expandedDisciplina === disciplina ? null : disciplina
                  )
                }
                style={styles.touchableOpacity}>
                <Icon name="bars" size={18} color="#999" style={styles.icon} />
                <Text style={styles.itemtitulo}>{disciplina}</Text>
              </TouchableOpacity>
              {expandedDisciplina === disciplina && (
                <View>
                  {notasDaDisciplina.map((nota) => (
                    <View key={nota.id} style={styles.notaContainer}>
                      <Text style={styles.itemText}>
                        Aluno: {nota.nome_aluno}
                      </Text>
                      <Text style={styles.itemText}>
                        Nota Final: {nota.nota_final}
                      </Text>
                      <Button
                        onPress={() =>
                          handleExcluirNota(nota.id, setNotas, () =>
                            loadData(setAlunos, setDisciplinas, setNotas)
                          )
                        }
                        title="Excluir"
                        color="#ff4500"
                      />
                    </View>
                  ))}
                </View>
              )}
            </View>
          )
        )}
        {Object.keys(notasPorDisciplina(notas)).length === 0 && (
          <Text style={styles.itemtitulo}>Nenhuma nota cadastrada!</Text>
        )}
      </Card>
    </ScrollView>
  );
}
