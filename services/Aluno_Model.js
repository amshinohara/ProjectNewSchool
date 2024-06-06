import firebase from '../Firebase';

export const fetchAlunos = async () => {
  const response = await firebase.firestore().collection('alunos').get();
  return response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const registrarAluno = async (
  nomeAluno,
  email,
  telefone,
  alunoParaEditar
) => {
  if (!alunoParaEditar) {
    const nomeQuerySnapshot = await firebase
      .firestore()
      .collection('alunos')
      .where('nome_aluno', '==', nomeAluno)
      .get();
    const emailQuerySnapshot = await firebase
      .firestore()
      .collection('alunos')
      .where('email', '==', email)
      .get();

    if (!nomeQuerySnapshot.empty || !emailQuerySnapshot.empty) {
      throw new Error('Já existe um aluno cadastrado com esse nome ou e-mail!');
    }
  }

  const matricula = Math.floor(Math.random() * 10000000000)
    .toString()
    .padStart(10, '0');

  if (alunoParaEditar) {
    const alunoId = alunoParaEditar.id;

    await firebase
      .firestore()
      .collection('alunos')
      .doc(alunoId)
      .update({
        nome_aluno: nomeAluno,
        email: email,
        telefone: telefone,
      });

    const notasSnapshot = await firebase
      .firestore()
      .collection('notas')
      .where('nome_aluno', '==', alunoParaEditar.nome_aluno)
      .get();

    const batch = firebase.firestore().batch();
    notasSnapshot.forEach((doc) => {
      const notaRef = firebase.firestore().collection('notas').doc(doc.id);
      batch.update(notaRef, { nome_aluno: nomeAluno });
    });
    await batch.commit();
  } else {
    await firebase.firestore().collection('alunos').add({
      nome_aluno: nomeAluno,
      email: email,
      telefone: telefone,
      matricula: matricula,
    });
  }
};

export const excluirAluno = async (alunoId) => {
  try {
    const alunoDoc = await firebase.firestore().collection('alunos').doc(alunoId).get();
    const nomeAluno = alunoDoc.data().nome_aluno;

    await excluirNotasDoAluno(nomeAluno);

    await firebase.firestore().collection('alunos').doc(alunoId).delete();
  } catch (error) {
    throw new Error('Erro ao excluir aluno: ' + error.message);
  }
};

export const handleCorrigir = (
  aluno,
  setNomeAluno,
  setEmail,
  setTelefone,
  setAlunoParaEditar
) => {
  setNomeAluno(aluno.nome_aluno);
  setEmail(aluno.email);
  setTelefone(aluno.telefone);
  setAlunoParaEditar(aluno);
};

export const handleRegistrar = async (
  nomeAluno,
  email,
  telefone,
  alunoParaEditar,
  setNomeAluno,
  setEmail,
  setTelefone,
  setAlunoParaEditar,
  setAlunos
) => {
  if (nomeAluno !== '' && email !== '' && telefone !== '') {
    try {
      await registrarAluno(nomeAluno, email, telefone, alunoParaEditar);
      alert(
        alunoParaEditar
          ? 'Aluno atualizado com sucesso!'
          : 'Aluno cadastrado com sucesso!'
      );
      setNomeAluno('');
      setEmail('');
      setTelefone('');
      setAlunoParaEditar(null);
      const alunosData = await fetchAlunos();
      setAlunos(alunosData);
    } catch (error) {
      alert('Erro ao cadastrar aluno: ' + error.message);
    }
  } else {
    alert('Preencha todos os campos!');
  }
};

export const excluirNotasDoAluno = async (nomeAluno) => {
  const notasSnapshot = await firebase
    .firestore()
    .collection('notas')
    .where('nome_aluno', '==', nomeAluno)
    .get();

  const batch = firebase.firestore().batch();
  notasSnapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
};

export const handleExcluirAluno = async (alunoId, setAlunos) => {
  try {
    await excluirAluno(alunoId);
    alert('Aluno excluído com sucesso!');
    const alunosData = await fetchAlunos();
    setAlunos(alunosData);
  } catch (error) {
    alert('Erro ao excluir aluno: ' + error.message);
  }
};
