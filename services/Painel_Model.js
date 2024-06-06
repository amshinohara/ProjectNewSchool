import firebase from '../Firebase';

export const fetchNotas = async () => {
  try {
    const response = await firebase.firestore().collection('notas').get();
    return response.docs.map((doc) => doc.data());
  } catch (error) {
    throw new Error('Error fetching notas: ' + error);
  }
};

export const handleToggleMostrarCampoAtualizar = (
  mostrarCampoAtualizar,
  setMostrarCampoAtualizar,
  setNovaNota
) => {
  setMostrarCampoAtualizar(!mostrarCampoAtualizar);
  if (!mostrarCampoAtualizar) {
    setNovaNota('');
  }
};

export const calcularStatus = (nota) => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado';
};
