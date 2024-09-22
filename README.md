# API de Vagas com Frontend

Este projeto consiste em uma API RESTful para gerenciar listagens de vagas de emprego, juntamente com uma aplicação frontend construída com React. A aplicação permite que os usuários pesquisem por vagas de emprego por localização e categoria, proporcionando uma experiência fluida para os candidatos.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Iniciando](#iniciando)
- [Instalação das Dependências](#instalação-das-dependências)
- [Endpoints da API](#endpoints-da-api)
- [Estrutura do Frontend](#estrutura-do-frontend)
- [Design Responsivo](#design-responsivo)
- [Contribuindo](#contribuindo)

## Funcionalidades

- **Listagens de Vagas**: Os usuários podem visualizar uma lista de vagas disponíveis.
- **Funcionalidade de Busca**: Os usuários podem filtrar as vagas por localização e categoria.
- **Design Responsivo**: A aplicação é projetada para funcionar bem em diferentes tamanhos de tela.
- **Persistência de Dados**: Os dados das vagas podem ser armazenados e recuperados de um arquivo JSON.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Frontend**: React, Vite, Axios
- **Armazenamento de Dados**: Arquivo JSON para dados das vagas
- **Estilização**: CSS para design responsivo

## Iniciando

### Pré-requisitos

- Node.js instalado em sua máquina.
- Um gerenciador de pacotes como npm ou yarn.

### Instalação das Dependências

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/job-listings.git
   cd job-listings

2. Instale as dependências do backend:
git bash
cd backend
npm install

3. Instale as dependências do frontend:
git bash
cd frontend
npm install

4. Tem um arquivo chamado data.json dentro de SRC contendo algumas informações de linstagens de vagas, use-as para fazer a API rodar, seja em postman ou insomnia. 


5. Inicie o servidor backend:
git bash
cd backend
node index.js

6. Inicie a aplicação frontend:
git bash
cd frontend
npm run dev

Endpoints da API
GET /jobs
Recupera todas as listagens de vagas.

GET /jobs?location={localização}
Recupera listagens de vagas filtradas por localização.

GET /jobs?category={categoria}
Recupera listagens de vagas filtradas por categoria.

POST /jobs
Envia uma nova listagem de vaga (os dados devem corresponder à estrutura do arquivo JSON).

Estrutura do Frontend
A aplicação frontend é construída com React e segue uma arquitetura baseada em componentes:

Components: Contém componentes reutilizáveis como Header, Job e Footer.
Pages: Contém as páginas principais da aplicação.
Styles: Contém arquivos CSS para estilizar os componentes.
Os principais componentes incluem:

Header: Exibe o título e a navegação.
Job: Renderiza as listagens individuais de vagas.
Footer: Exibe informações de rodapé.
Design Responsivo
A aplicação é projetada para ser responsiva, garantindo uma boa experiência do usuário em diferentes dispositivos:

Flexbox é utilizado para ajustes de layout.
Media queries são implementadas para ajustar estilos com base nos tamanhos de tela.
Contribuindo
Sinta-se à vontade para contribuir com o projeto! Aqui estão algumas maneiras de ajudar:

Abra issues para bugs ou solicitações de recursos.
Envie pull requests para melhorias ou correções.
Licença

Sinta-se à vontade para fazer ajustes conforme necessário! Se precisar de mais alguma coisa, é só avisar.
