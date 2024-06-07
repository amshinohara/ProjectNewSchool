import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../components/Home';
import { NavigationContainer } from '@react-navigation/native';

test('renders HomeScreen component correctly', () => {
  const { getByText } = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );

  expect(getByText('NewSchool')).toBeTruthy();
  expect(getByText('Cadastrar Disciplina')).toBeTruthy();
  expect(getByText('Cadastrar Aluno')).toBeTruthy();
  expect(getByText('Atribuir Nota')).toBeTruthy();
  expect(getByText('Painel Notas dos Alunos')).toBeTruthy();
  expect(getByText('Área para cadastrar novas disciplinas')).toBeTruthy();
  expect(getByText('Área para cadastrar novos alunos')).toBeTruthy();
  expect(getByText('Área para atribuir notas aos alunos')).toBeTruthy();
  expect(getByText('Área para visualizar notas dos alunos')).toBeTruthy();
});
