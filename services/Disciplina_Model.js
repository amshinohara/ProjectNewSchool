import firebase from '../Firebase';

export const carregarDisciplinas = async () => {
  const disciplinasSnapshot = await firebase.firestore().collection('disciplinas').get();
  return disciplinasSnapshot.docs.map((doc) => ({
    id: doc.id,
    nome_disciplina: doc.data().nome_disciplina,
  }));
};

export const excluirDisciplina = async (disciplinaId, disciplinaNome) => {
  const notasSnapshot = await firebase.firestore().collection('notas').where('nome_disciplina', '==', disciplinaNome).get();
  if (!notasSnapshot.empty) {
    throw new Error('Não é possível excluir a disciplina, pois existem notas atribuídas a ela.');
  }
  await firebase.firestore().collection('disciplinas').doc(disciplinaId).delete();
};

export const registrarDisciplina = async (nomeDisciplina, disciplinaParaEditar) => {
  const disciplinasSnapshot = await firebase.firestore().collection('disciplinas').where('nome_disciplina', '==', nomeDisciplina).get();

  if (!disciplinasSnapshot.empty) {
    if (!disciplinaParaEditar || disciplinasSnapshot.docs[0].id !== disciplinaParaEditar.id) {
      throw new Error('Já existe uma disciplina cadastrada com esse nome!');
    }
  }

  if (disciplinaParaEditar) {
    const disciplinaId = disciplinaParaEditar.id;
    const nomeDisciplinaAntigo = disciplinaParaEditar.nome_disciplina;

    await firebase.firestore().collection('disciplinas').doc(disciplinaId).update({
      nome_disciplina: nomeDisciplina,
    });

    const notasSnapshot = await firebase.firestore().collection('notas').where('nome_disciplina', '==', nomeDisciplinaAntigo).get();
    const batch = firebase.firestore().batch();

    notasSnapshot.docs.forEach((doc) => {
      const notaRef = firebase.firestore().collection('notas').doc(doc.id);
      batch.update(notaRef, { nome_disciplina: nomeDisciplina });
    });

    await batch.commit();
  } else {
    await firebase.firestore().collection('disciplinas').add({
      nome_disciplina: nomeDisciplina,
    });
  }
};

export const handleCorrigir = (disciplina, setNomeDisciplina, setDisciplinaParaEditar) => {
  setNomeDisciplina(disciplina.nome_disciplina);
  setDisciplinaParaEditar(disciplina);
};

export const handleExcluir = async (disciplinaId, disciplinaNome, setDisciplinas) => {
  try {
    await excluirDisciplina(disciplinaId, disciplinaNome);
    alert('Disciplina excluída com sucesso!');
    const disciplinasData = await carregarDisciplinas();
    setDisciplinas(disciplinasData);
  } catch (error) {
    if (error.message === 'Não é possível excluir a disciplina, pois existem notas atribuídas a ela.') {
      alert(error.message);
    } else {
      alert('Erro ao excluir disciplina: ' + error.message);
    }
  }
};

export const handleRegistrar = async (nomeDisciplina, disciplinaParaEditar, setNomeDisciplina, setDisciplinaParaEditar, setDisciplinas) => {
  if (nomeDisciplina.trim() !== '') {
    try {
      await registrarDisciplina(nomeDisciplina, disciplinaParaEditar);
      alert(disciplinaParaEditar ? 'Disciplina atualizada com sucesso!' : 'Disciplina registrada com sucesso!');
      setNomeDisciplina('');
      setDisciplinaParaEditar(null);
      const disciplinasData = await carregarDisciplinas();
      setDisciplinas(disciplinasData);
    } catch (error) {
      alert('Erro ao registrar disciplina: ' + error.message);
    }
  } else {
    alert('Informe o nome da disciplina!');
  }
};

