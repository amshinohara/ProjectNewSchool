# Projeto de desenvolvimento de um sistema para Gerenciamento de Notas de Alunos

## Descrição

Este projeto é uma aplicação de Gerenciamento de Notas de Alunos. A aplicação permite que professores possam gerenciar as informações de alunos, disciplinas e notas, utilizando operações básicas de CRUD (Create, Read, Update e Delete).

## Tecnologias Utilizadas

- **Linguagem de Programação**: JavaScript
- **Frontend**: React Native com Expo
- **Backend**: Node.js
- **Banco de Dados**: Firebase Firestore
- **Autenticação**: Firebase Authentication

## Objetivo da Aplicação

O objetivo desta aplicação é fornecer uma ferramenta simples e eficiente para que professores possam gerenciar as notas dos alunos em diferentes disciplinas. A aplicação inclui funcionalidades para gerenciar alunos, disciplinas e notas.

## Configuração do Ambiente de Desenvolvimento

1. Instalação do VSCode:
 - Faça o download e instale o Visual Studio Code a partir do site oficial: Download VSCode: [https:/](https://code.visualstudio.com/)

2. Instale as seguintes extensões recomendadas:
   - **ESLint**
   - **Prettier - Code formatter**
   - **React Native Tools**
   - **Firebase**
   - **GitLens**

3. Instalação das Bibliotecas e Frameworks Necessários:

   1. **Node.js e npm**:
      - Faça o download e instale o Node.js a partir do site oficial: [https:/](https://nodejs.org/)
      - Verifique a instalação usando os seguintes comandos:
         `node -v`
         `npm -v`

    2. **Instalação do Expo CLI**:
         - Instale o Expo CLI globalmente:
           `npm install -g expo-cli`
   
    3. **Inicialização do Projeto com Expo**:
       - Crie um novo projeto utilizando Expo:
         `expo init ProjectNewSchool`
       -Selecionar blanck e aperte a tecla Enter para continuar, após acesse a pasta criada:
         `cd ProjectNewSchool`

    5. **Instalação do Firebase**:
       - Adicione o Firebase ao seu projeto
         `npm install firebase`

    6. **Instalação de Outras Dependências**:
       - Instale as bibliotecas adicionais necessárias:
        ```bash
        expo install expo-constants
        npm install @react-navigation/native @react-navigation/stack
        npm install @react-native-community/masked-view
        npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
        npm install @expo/vector-icons
        npm install react-native-paper
        npm install react-native-reanimated@latest
        npm install react-native-safe-area-context
        npm install @react-navigation/drawer
        npm install @react-navigation/drawer
        npm install @react-navigation/bottom-tabs
        npm install react-native-picker-select
        ```

    7. **Inicialização do Expo**
      - Inicie o ambiente de desenvolvimento do Expo executando o seguinte comando:
        ```bash
        expo start
        npx start
        ```

## Instruções de Instalação e Execução da Aplicação Usando snack.expo.dev

    1. **Criação de Conta no Snack Expo**:
      - Acesse o site:  [https:/](https://expo.dev/)
      - Se você já tiver uma conta Expo, clique em "Log In" no canto superior direito e faça login com suas credenciais. Caso contrário, clique em "Sign Up" para criar uma nova conta e siga as instruções fornecidas para completar o processo de criação da conta.

    2. **Criação de um Novo Projeto**:
      - Após fazer login, você será direcionado à página principal do Snack.
      - Clique em "Snacks" no menu de acesso no lado esquerdo e em seguida clique em "New Snack" no canto superior direito para criar um novo projeto.
      - Um novo editor será aberto, já com um esqueleto básico de um aplicativo React Native.

    3. **Inserir Código no Projeto**:
      - No editor do Snack, você verá vários arquivos padrão como App.js, package.json, entre outros.
      - Neste local, clique nos três pontinhos e clique em "Import git repository".
      - Cole o repositório do projeto [[https:/](https://github.com/amshinohara/ProjectNewSchool)] no local indicado e clique em "Import repository".

    4. **Configuração de Dependências**:
      - No editor do Snack, na barra inferior da tela clique em "Add dependency" para instalar as dependências necessárias.

    5. **Executando o Projeto**:
      - Após adicionar o código e as dependências, clique em Save no canto superior direito do editor.
      - Em seguida, o aplicativo será exibido em um emulador diretamente no navegador, permitindo que você utilize o aplicativo em tempo real.
      
    6. **Teste no Dispositivo Móvel**:
      - Para testar o aplicativo em um dispositivo físico, clique em "My Device" no canto superior direito.
      - Você verá um QR code. Escaneie o QR code com o aplicativo Expo Go instalado no seu dispositivo móvel (disponível na App Store e Google Play Store).
      - O aplicativo será carregado no seu dispositivo.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
