import React, { useState, createContext, useEffect } from 'react';
import firebase from './Firebase';

export const DataContext = createContext();

const Context = ({ children }) => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [disciplinas, setDisciplinas] = useState([]);
  const [autenticado, setAutenticado] = useState(false);
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const response = await firebase.firestore().collection('alunos').get();
      const alunosData = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlunos(alunosData);
    };

    const fetchDisciplinas = async () => {
      const response = await firebase
        .firestore()
        .collection('disciplinas')
        .get();
      const disciplinasData = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDisciplinas(disciplinasData);
    };

    const fetchNotas = async () => {
      const response = await firebase.firestore().collection('notas').get();
      const notasData = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotas(notasData);
    };

    fetchAlunos();
    fetchDisciplinas();
    fetchNotas();
  }, []);

  return (
    <DataContext.Provider
      value={{
        nomeAluno,
        setNomeAluno,
        email,
        setEmail,
        telefone,
        setTelefone,
        alunos,
        setAlunos,
        nomeDisciplina,
        setNomeDisciplina,
        disciplinas,
        setDisciplinas,
        autenticado,
        setAutenticado,
        notas,
        setNotas,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
