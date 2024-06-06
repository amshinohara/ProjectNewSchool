import firebase from '../Firebase';

export const fetchAlunos = async () => {
  try {
    const response = await firebase.firestore().collection('alunos').get();
    return response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Erro ao buscar alunos: ' + error);
  }
};

export const fetchDisciplinas = async () => {
  try {
    const response = await firebase.firestore().collection('disciplinas').get();
    return response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Erro ao buscar disciplinas: ' + error);
  }
};

export const fetchNotas = async () => {
  try {
    const response = await firebase.firestore().collection('notas').get();
    return response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Erro ao buscar notas: ' + error);
  }
};

export const registrarNota = async (aluno, disciplina, notaNumber) => {
  try {
    await firebase.firestore().collection('notas').add({
      nome_aluno: aluno.nome_aluno,
      nome_disciplina: disciplina.nome_disciplina,
      nota_final: notaNumber,
    });
  } catch (error) {
    throw new Error('Erro ao cadastrar nota: ' + error);
  }
};

export const excluirNota = async (notaId) => {
  try {
    await firebase.firestore().collection('notas').doc(notaId).delete();
  } catch (error) {
    throw new Error('Erro ao excluir nota: ' + error);
  }
};

export const loadData = async (setAlunos, setDisciplinas, setNotas) => {
  try {
    const alunosData = await fetchAlunos();
    setAlunos(alunosData);
    const disciplinasData = await fetchDisciplinas();
    setDisciplinas(disciplinasData);
    const notasData = await fetchNotas();
    setNotas(notasData);
  } catch (error) {
    console.error(error.message);
  }
};

export const handleRegistrarNota = async (
  alunos,
  disciplinas,
  notas,
  selectedAluno,
  selectedDisciplina,
  notaFinal,
  setSelectedAluno,
  setSelectedDisciplina,
  setNotaFinal,
  loadData
) => {
  if (selectedAluno && selectedDisciplina && notaFinal !== '') {
    const notaNumber = parseFloat(notaFinal);
    if (notaNumber >= 0 && notaNumber <= 10) {
      try {
        const aluno = alunos.find((aluno) => aluno.id === selectedAluno);
        const disciplina = disciplinas.find(
          (disciplina) => disciplina.id === selectedDisciplina
        );
        if (aluno && disciplina) {
          const notaExistente = notas.find(
            (nota) =>
              nota.nome_aluno === aluno.nome_aluno &&
              nota.nome_disciplina === disciplina.nome_disciplina
          );
          if (notaExistente) {
            await atualizarNota(notaExistente.id, notaNumber);
            alert('Sucesso: Nota atualizada com sucesso!');
          } else {
            await registrarNota(aluno, disciplina, notaNumber);
            alert('Sucesso: Nota cadastrada com sucesso!');
          }
          setSelectedAluno('');
          setSelectedDisciplina('');
          setNotaFinal('');
          await loadData();
        } else {
          alert('Erro: Aluno ou disciplina não encontrados!');
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Atenção: A nota deve estar entre 0 e 10!');
    }
  } else {
    alert('Atenção: Preencha todos os campos!');
  }
};

export const handleExcluirNota = async (notaId, setNotas, loadData) => {
  try {
    await excluirNota(notaId);
    alert('Sucesso: Nota excluída com sucesso!');
    await loadData();
  } catch (error) {
    alert(error.message);
  }
};

export const notasPorDisciplina = (notas) => {
  return notas.reduce((acc, nota) => {
    acc[nota.nome_disciplina] = acc[nota.nome_disciplina] || [];
    acc[nota.nome_disciplina].push(nota);
    return acc;
  }, {});
};

export const atualizarNota = async (notaId, novaNota) => {
  try {
    await firebase.firestore().collection('notas').doc(notaId).update({
      nota_final: novaNota,
    });
  } catch (error) {
    throw new Error('Erro ao atualizar nota: ' + error);
  }
};
