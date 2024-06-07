# Projeto de desenvolvimento de um sistema para Gerenciamento de Notas de Alunos

## Descrição

Este projeto é uma aplicação de Gerenciamento de Notas de Alunos. A aplicação permite que professores possam gerenciar as informações de alunos, disciplinas e notas, utilizando operações básicas de CRUD (Create, Read, Update e Delete).

## Tecnologias Utilizadas

- **Linguagem de Programação**: JavaScript
- **Frontend**: React Native com Expo
- **Backend**: Node.js
- **Banco de Dados**: Firebase Firestore
- **Autenticação**: Firebase Authentication
- **Testes Automatizados**: Jest e React Native Testing Library.

## Objetivo da Aplicação

O objetivo desta aplicação é fornecer uma ferramenta simples e eficiente para que professores possam gerenciar as notas dos alunos em diferentes disciplinas. A aplicação inclui funcionalidades para gerenciar alunos, disciplinas e notas.

## Configuração do Ambiente de Desenvolvimento

1. Instalação do VSCode:
  - Faça o download e instale o Visual Studio Code a partir do site oficial: Download VSCode: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. Instale as seguintes extensões recomendadas:
   - **ESLint**
   - **Prettier - Code formatter**
   - **React Native Tools**
   - **Firebase**
   - **GitLens**

3. Instalação das Bibliotecas e Frameworks Necessários:

   1. **Node.js e npm**:
      - Faça o download e instale o Node.js a partir do site oficial: [https://nodejs.org/](https://nodejs.org/)
      - Verifique a instalação usando os seguintes comandos:
      ```bash
      node -v
      ```
      ```bash
      npm -v
      ```

   2. **Instalação do Expo CLI**:
      - Instale o Expo CLI globalmente:
      ```bash
      npm install -g expo-cli
      ```
   
   3. **Inicialização do Projeto com Expo**:
      - Crie um novo projeto utilizando Expo:
      ```bash
      expo init ProjectNewSchool
      ```
      - Selecionar blanck e aperte a tecla Enter para continuar, após acesse a pasta criada:
      ```bash
      cd ProjectNewSchool
      ```

   4. **Instalação do Firebase**:
      - Adicione o Firebase ao seu projeto
      ```bash
      npm install firebase
      ```

   5. **Instalação de Outras Dependências**:
      - Instale as bibliotecas adicionais necessárias:
      ```bash
      expo install expo-constants
      npm install @react-navigation/native @react-navigation/stack
      npm install @react-native-community/masked-view
      npm install react-native-gesture-handler
      npm install react-native-reanimated
      npm install react-native-screens
      npm install react-native-safe-area-context
      npm install @expo/vector-icons
      npm install react-native-paper
      npm install react-native-reanimated@latest
      npm install react-native-safe-area-context
      npm install @react-navigation/drawer
      npm install @react-navigation/drawer
      npm install @react-navigation/bottom-tabs
      npm install react-native-picker-select
      ```

   6. **Inicialização do Expo**:
      - Inicie o ambiente de desenvolvimento do Expo executando o seguinte comando:
      ```bash
      expo start
      npx start
      ```
   
## Instruções de Instalação e Execução da Aplicação Usando snack.expo.dev

1. Criação de Conta no Snack Expo:
   - Acesse o site:  [https://expo.dev/](https://expo.dev/)
   - Clique em "Snacks" no menu de acesso no lado esquerdo e em seguida clique em "New Snack" no canto superior direito para criar um novo projeto.
   - Um novo editor será aberto, já com um esqueleto básico de um aplicativo React Native.

2. Criação de um Novo Projeto:
   - Após fazer login, você será direcionado à página principal do Snack.
   - Clique em "Snacks" no menu de acesso no lado esquerdo e em seguida clique em "New Snack" no canto superior direito para criar um novo projeto.
   - Um novo editor será aberto, já com um esqueleto básico de um aplicativo React Native.

3. Inserir Código no Projeto:
   - No editor do Snack, você verá vários arquivos padrão como App.js, package.json, entre outros.
   - Neste local, clique nos três pontinhos e clique em "Import git repository".
   - Cole o repositório do projeto [[https://github.com/amshinohara/ProjectNewSchool](https://github.com/amshinohara/ProjectNewSchool)] no local indicado e clique em "Import repository".

4. Configuração de Dependências:
   - No editor do Snack, na barra inferior da tela clique em "Add dependency" para instalar as dependências necessárias.

5. Executando o Projeto:
   - Após adicionar o código e as dependências, clique em Save no canto superior direito do editor.
   - Em seguida, o aplicativo será exibido em um emulador diretamente no navegador, permitindo que você utilize o aplicativo em tempo real.
 
6. Teste no Dispositivo Móvel:
   - Para testar o aplicativo em um dispositivo físico, clique em "My Device" no canto superior direito.
   - Você verá um QR code. Escaneie o QR code com o aplicativo Expo Go instalado no seu dispositivo móvel (disponível na App Store e Google Play Store).
   - O aplicativo será carregado no seu dispositivo.

## Acesso ao projeto:

O projeto desta aplicação está salvo e pode ser acessada através do seguinte link:

[https://snack.expo.dev/@amshinohara/newschool-](https://snack.expo.dev/@amshinohara/newschool-)

## Especificação Técnica do Projeto

1. Linguagem de Programação
   - JavaScript: O projeto foi desenvolvido em JavaScript, uma linguagem de programação amplamente utilizada para desenvolvimento web e mobile devido à sua flexibilidade e capacidade de ser executada tanto no cliente quanto no servidor.
     
2. Frontend
   - React Native com Expo: React Native: Uma biblioteca JavaScript criada pelo Facebook que é usada para desenvolver aplicativos móveis para iOS e Android. Utiliza componentes nativos em vez de componentes web, proporcionando uma experiência de usuário mais próxima do nativo.
   - Expo: Um conjunto de ferramentas e serviços criados em torno do React Native que facilita o desenvolvimento, construção e implantação de aplicativos. O Expo fornece uma série de APIs e componentes prontos para uso, além de um ambiente de desenvolvimento simplificado.
     
3. Backend
   - Node.js: Uma plataforma construída sobre o motor JavaScript V8 que permite a execução de código JavaScript no lado do servidor. Node.js é conhecido por sua capacidade de lidar com um grande número de conexões simultâneas com alta performance e eficiência.
     
4. Banco de Dados
   - Firebase Firestore: Um banco de dados NoSQL oferecido pelo Firebase, que é uma plataforma de desenvolvimento de aplicativos móveis e web fornecida pelo Google. O Firestore é altamente escalável e flexível, permitindo armazenamento e sincronização de dados em tempo real.
   - Autenticação com Firebase Authentication: Um serviço de autenticação fornecido pelo Firebase que facilita a implementação de autenticação de usuários. Oferece suporte a vários métodos de autenticação, incluindo e-mail/senha, autenticação de terceiros (Google, Facebook, etc.) e autenticação anônima.

5. Teste Automatizados
   - Jest: Um framework de teste de JavaScript mantido pelo Facebook, com foco na simplicidade. Ele é amplamente utilizado para testar aplicações React e React Native devido às suas funcionalidades robustas e facilidade de configuração.
   - React Native Testing Library: Uma extensão do React Testing Library para aplicações React Native. Ela promove práticas de teste que simulam o comportamento do usuário final, focando em interações com os elementos da interface do usuário

## Requisitos do Sistema

- **Sistema Operacional**: Windows, macOS ou Linux
- **Node.js**: Versão 14 ou superior
- **npm**: Versão 6 ou superior
- **Expo CLI**: Versão mais recente.
- **Editor de Código**: Visual Studio ou outro de 
- **Conexão com a Internet** para utilizar os serviços do Firebase

## Práticas de Código Limpo

O desenvolvimento deste projeto aplicou algumas práticas de código limpo para garantir um código de alta qualidade, legível e fácil de manter, incluindo:

- **Nomeação Descritiva:**: Variáveis, funções e componentes têm nomes claros e descritivos que indicam seu propósito e uso.
- **Funções Pequenas**: Funções são mantidas pequenas e focadas em uma única tarefa.
- **Componentização**: O código foi modularizado em componentes reutilizáveis para promover a reutilização e facilitar a manutenção.
- **Separação das Estruturas**: A lógica de negócio foi separada da apresentação, mantendo o código organizado e estruturado.
- **Simplificação de Condicionais**: Uso de condicionais simples e claras para melhorar a legibilidade do código.
- **Revisão de Código**: O código foi revisado e refatorado para melhorar a sua legibilidade.

## Padrão de Projeto Utilizado:

### Context API (State Management)

1. Descrição:
   - O padrão Context API é um método para gerenciar o estado global em uma aplicação React. Ele permite que dados sejam compartilhados entre componentes sem a necessidade de passar explicitamente props através da árvore de componentes. Isso é especialmente útil em aplicações React Native, onde múltiplos componentes podem precisar acessar e modificar o mesmo estado global.

2. Aplicação no Projeto:
   - No projeto, o Context API é utilizado para gerenciar o estado de autenticação do usuário. O estado de autenticação (autenticado) é compartilhado entre vários componentes, permitindo que a aplicação controle o acesso a diferentes telas e funcionalidades com base no status de login do usuário.

3. Benefícios:
   - Permite que o estado de autenticação seja centralizado, facilitando o gerenciamento e a consistência dos dados.
   - Evita a necessidade de passar props manualmente através de múltiplos níveis da árvore de componentes.
   - Facilita a manutenção e a escalabilidade do código, já que o estado global é gerenciado em um único lugar.
   - Ao utilizar o Context API para gerenciar o estado de autenticação, o projeto adota um padrão de projeto de software que melhora a estrutura e a organização do código, resultando em uma aplicação mais robusta e fácil de manter.

## Criação de Testes Automatizados para a Aplicação

1. Instalação do Framework de Testes
   - Primeiro, precisamos instalar o Jest, um popular framework de testes em JavaScript, junto com o React Native Testing Library:
   ```bash
   Copiar código
   npm install --save-dev jest react-test-renderer @testing-library/react-native
   npm install --save-dev react-test-renderer --legacy-peer-deps
   npm audit fix
   ```
   
2. Configuração do Jest
   - Depois de instalar as dependências, crie ou atualize o arquivo jest.config.js na raiz do seu projeto com a seguinte configuração:
   ```
   module.exports = {
     preset: 'react-native',
     setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
     transformIgnorePatterns: [
       'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@expo|expo-.*|@unimodules|@redux-saga|@react-native-firebase|react-navigation)',
     ],
   };
   ```
 
3. Criação dos Testes Automatizados
   - Organize seus testes em uma pasta dedicada. Por convenção, é utilizado a pasta __tests__ para armazenar os arquivos de testes. Crie esta pasta na raiz do projeto:
   ```bash
   - mkdir __tests__
   ```

   - Dentro desta pasta, crie os artefatos que serão utilizados testar o seu código, como por exemplo o artefato App.test.js:
   ```
   import React from 'react';
   import { render } from '@testing-library/react-native';
   import App from '../App';
   
   test('renders correctly', () => {
     const { getByText } = render(<App />);
     expect(getByText('Open up App.js to start working on your app!')).toBeTruthy();
   });
   ```

4. Inclusão do Jest no packagr.json
   - Adicione um script de teste no arquivo package.json:
   ```bash
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```
  
5. Executando os Testes
   - Finalmente, para rodar os testes, use o comando:
   ```bash
   npm test
   ```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
6. Caso encontre algum erro ou bug, sinta-se livre para criar uma Issue detalhando o problema para que possamos resolvê-lo.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
