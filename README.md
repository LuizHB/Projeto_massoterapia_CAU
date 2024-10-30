# Projeto de Massoterapia para a Comunidade de Caruaru

Este é um projeto de extensão de massoterapia desenvolvido para oferecer serviços acessíveis de massagem terapêutica e cuidados de saúde à comunidade carente da cidade de Caruaru. A aplicação permite que usuários vejam os serviços disponíveis, benefícios e agendem sessões de massagem.

---

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Descrição do Projeto

O projeto de massoterapia tem como objetivo facilitar o acesso a serviços de bem-estar para a comunidade carente da cidade de Caruaru. Com esta plataforma, os usuários podem visualizar os serviços oferecidos, conhecer os benefícios de cada tipo de massagem e agendar sessões. O público-alvo inclui pessoas de baixa renda, residentes da área local, de diferentes idades e escolaridade, interessados em melhorar sua saúde física e mental.

## Tecnologias Utilizadas

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js com Express (se necessário)
- **Estilização**: CSS e TailwindCSS (opcional)
- **Gerenciamento de Estado**: Context API
- **Configuração de Build**: Vite

## Funcionalidades

1. **Página Inicial**:
   - Apresentação dos serviços de massoterapia disponíveis, com detalhes e descrições.
   
2. **Serviços Disponíveis**:
   - Descrição detalhada dos tipos de massagem (Relaxante, Terapêutica, Drenagem Linfática).
   
3. **Benefícios da Massoterapia**:
   - Explicação dos benefícios para a saúde e bem-estar.

4. **Agendamento**:
   - Opção de agendar sessões de massagem.
   - (Futuramente) Integração com um sistema de agendamento de datas.

5. **Galeria de Imagens**:
   - Imagens ilustrativas dos serviços e sessões de massagem para informar e engajar a comunidade.

## Estrutura do Projeto

O projeto é organizado em uma estrutura de componentes para facilitar a escalabilidade e a manutenção do código.

````plaintext
massoterapia-app/
├── public/
│   ├── index.html                # Template HTML principal
│   └── assets/                   # Recursos estáticos (imagens, ícones)
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Cabeçalho da aplicação
│   │   ├── Footer.tsx            # Rodapé da aplicação
│   │   ├── Services.tsx          # Descrição dos serviços de massagem
│   │   ├── Benefits.tsx          # Benefícios da massoterapia
│   │   ├── Agendamento.tsx       # Página de agendamento de sessões
│   │   └── Galeria.tsx           # Galeria de imagens
│   ├── App.tsx                   # Componente raiz do React
│   ├── main.tsx                  # Ponto de entrada do React
│   └── vite-env.d.ts             # Tipagens para o Vite
├── package.json                  # Configurações e dependências do projeto
├── tsconfig.json                 # Configurações do TypeScript
└── vite.config.ts                # Configuração do Vite
````

## Instalação e Execução

Para configurar e rodar o projeto localmente, siga os passos abaixo.
### Pré-requisitos

* Node.js e npm instalados na máquina. (Instale a versão mais recente do Node.js: https://nodejs.org/)

### Passo a Passo
---
1. Clonar o Repositório

````bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
````
2. Instalar Dependências
````bash
npm install
````

3. Executar o Projeto

Inicie o servidor de desenvolvimento:

````bash
npm run dev
````

4. Acessar o Projeto

Abra seu navegador e acesse http://localhost:5173.

## Componentes e Paginação
### Header

* Contém o nome do projeto e links para as seções principais do site.

### Services

* Apresenta uma lista de serviços disponíveis para a comunidade, com explicações e informações detalhadas.

### Benefits

* Mostra os benefícios da massoterapia para o público-alvo, destacando as melhorias para a saúde e qualidade de vida.

### Agendamento

* Permite que os usuários vejam como agendar serviços de massoterapia. Um alerta simula o futuro agendamento diretamente pela plataforma.

### Galeria

* Uma galeria visual com imagens de massoterapia para atrair o público e mostrar a prática.

### Footer

* Contém informações de contato e um aviso de direitos autorais.

### Futuras Implementações

* Sistema de Agendamento Online: Integração com um backend para criar um sistema de agendamento completo.
* Autenticação de Usuários: Permitir que usuários façam login e visualizem seus agendamentos.
* Integração com Pagamentos: Possibilidade de realizar pagamentos diretamente na plataforma.

---
<br>
Este projeto foi desenvolvido com a intenção de ajudar a comunidade de Caruaru, fornecendo serviços de massoterapia e cuidados de saúde acessíveis. Esperamos que esta plataforma melhore o acesso e a conscientização sobre os benefícios da massagem terapêutica.