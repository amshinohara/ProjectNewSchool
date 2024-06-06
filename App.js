import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cadastrar_Aluno from './components/Cadastrar_Aluno';
import Cadastrar_Disciplina from './components/Cadastrar_Disciplina';
import Atribuir_Nota from './components/Atribuir_Nota';
import Painel_Notas from './components/Painel_Notas';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Cadastrar_Usuario from './components/Cadastrar_Usuario';
import Context from './DataContext';
import { styles } from './components/Utils';
import firebase from './Firebase';

const Drawer = createDrawerNavigator();

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAutenticado(true);
      } else {
        setAutenticado(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.containersafe}>
      <Context autenticado={autenticado} setAutenticado={setAutenticado}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={autenticado ? 'Home' : 'Login'}>
            {autenticado ? (
              <>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen
                  name="Cadastrar Disciplina"
                  component={Cadastrar_Disciplina}
                />
                <Drawer.Screen
                  name="Cadastrar Aluno"
                  component={Cadastrar_Aluno}
                />
                <Drawer.Screen name="Atribuir Nota" component={Atribuir_Nota} />
                <Drawer.Screen
                  name="Painel Notas dos Alunos"
                  component={Painel_Notas}
                />
                <Drawer.Screen name="Logout" component={Logout} />
              </>
            ) : (
              <>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen
                  name="Cadastro de Usuário"
                  component={Cadastrar_Usuario}
                />
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </Context>
    </SafeAreaView>
  );
}
