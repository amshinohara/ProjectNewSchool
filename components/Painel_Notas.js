import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Card } from 'react-native-paper';
import { DataContext } from '../DataContext';
import { styles } from './Utils';
import { fetchNotas, calcularStatus } from '../services/Painel_Model';

export default function NotasPorDisciplina() {
  const { disciplinas } = useContext(DataContext);
  const [selectedDisciplina, setSelectedDisciplina] = useState('');
  const [notas, setNotas] = useState([]);

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

  const notasFiltradas = notas.filter(
    (nota) => nota.nome_disciplina === selectedDisciplina
  );

  return (
    <ScrollView style={styles.scrollview}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>NewSchool</Text>
      </Card>
      <Card style={styles.card}>
        <Image source={require('../assets/banner.png')} style={styles.image} />
      </Card>
      <Card style={styles.formContainer}>
        <Text style={styles.titulo2}>Selecione a disciplina:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedDisciplina(value)}
          items={disciplinas.map((disciplina) => ({
            label: disciplina.nome_disciplina,
            value: disciplina.nome_disciplina,
          }))}
          placeholder={{ label: 'Selecione uma disciplina', value: null }}
          value={selectedDisciplina}
        />
      </Card>
      {selectedDisciplina !== '' && (
        <Card style={styles.card}>
          <Text style={styles.itemtitulo}>{selectedDisciplina}</Text>
          <FlatList
            data={notasFiltradas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.notacontainer}>
                <Text style={styles.itemText}>Nome: {item.nome_aluno}</Text>
                <Text style={styles.itemText}>Nota: {item.nota_final}</Text>
                <Text
                  style={[
                    styles.itemText,
                    {
                      color:
                        calcularStatus(item.nota_final) === 'Aprovado'
                          ? 'blue'
                          : 'red',
                    },
                  ]}>
                  {calcularStatus(item.nota_final)}
                </Text>
                <View style={styles.separator}></View>
              </View>
            )}
          />
        </Card>
      )}
    </ScrollView>
  );
}
