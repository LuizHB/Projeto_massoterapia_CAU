# Projeto de Massoterapia para a Comunidade de Caruaru

MyMassotherapyApp é um aplicativo mobile desenvolvido em React Native, projetado para auxiliar na gestão de serviços de massoterapia para uma comunidade de baixa renda. Ele permite que usuários registrem-se, visualizem serviços disponíveis, façam agendamentos e obtenham informações sobre massoterapeutas, tipos de massagem, e o espaço de atendimento.

## 📱 Funcionalidades

   * Cadastro e Login de Usuários: Registro e autenticação de usuários para acesso seguro.
   * Listagem de Serviços de Massoterapia: Exibição de tipos de massagem disponíveis, detalhando cada tipo.
   * Agendamento de Sessões: Permite que os usuários escolham data e horário para realizar uma sessão com um massoterapeuta.
   * Informações sobre os Massoterapeutas: Lista massoterapeutas cadastrados com detalhes sobre formação e especialização.
   * Informações do Espaço e Contato: Dados sobre a localização do espaço de atendimento e telefones para contato.

## 🚀 Começando
### Pré-requisitos

Para rodar o projeto, você precisará de:

* Node.js (versão 14 ou superior)
* React Native CLI (ou Expo CLI, caso prefira usar Expo)
* Android Studio (para rodar em emulador Android) ou Xcode (para rodar no iOS)
* Conta no Firebase para configurar o backend do app

## Instalação

1. Clone o repositório:

````bash
git clone https://github.com/seu-usuario/MyMassotherapyApp.git
cd MyMassotherapyApp
````

2. Instale as dependências do projeto:

````bash
npm install
````

3. Configure o Firebase:

* No console do Firebase, crie um novo projeto.
* Adicione um aplicativo Android e/ou iOS ao projeto do Firebase e siga as instruções para obter o arquivo de configuração google-services.json (para Android) e GoogleService-Info.plist (para iOS).
* Coloque o arquivo google-services.json na pasta android/app e GoogleService-Info.plist na pasta ios.

4. Instale as dependências Firebase e navegação:

````bash
npm install @react-navigation/native @react-navigation/stack @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-community/datetimepicker
````
5. Inicie o servidor de desenvolvimento:

````bash
npx react-native run-android # para Android
npx react-native run-ios     # para iOS
````


## 🌐 Dependências Principais

* React Native: Framework para desenvolvimento mobile.
* React Navigation: Gerenciamento de navegação no aplicativo.
* Firebase: Autenticação e armazenamento de dados (Firestore).
* React Native Community DateTime Picker: Seleção de data/hora para agendamentos.

