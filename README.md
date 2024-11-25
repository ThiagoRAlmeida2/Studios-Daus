# Site Studio-Daus

## Integrantes do Projeto

- Amanda Oliveira
- Laís Lacerda
- Marcos
- Gracielle Cristinne
- Izadora Andrade
- Thiago Ribeiro
- Jamili
- Caio Antônio Andrade

## Descrição do Projeto

O **Projeto Daus** é uma aplicação web que oferece análises gratuitas de sites, utilizando inteligência artificial para fornecer insights valiosos aos usuários. O projeto é desenvolvido em JavaScript e utiliza a API do Firebase para armazenamento de dados.

## Funcionalidades

- Análise gratuita de sites.
- Armazenamento de resultados de análises no Firebase.
- Interface responsiva e amigável.

## Pré-requisitos

Antes de executar o projeto, verifique se você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-daus.git
   cd projeto-daus
    ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração do Firebase:**
    - Crie um projeto no [Firebase](https://console.firebase.google.com/).
    - Obtenha as credenciais do seu projeto e insira-as no arquivo firebase.js na pasta [/src/service/firebase.js](StudioDaus/src/service/firebase.js).

4. **Configuração da Api do Gemini:**
    - Crie uma conta no [Google Cloud](https://cloud.google.com/).
    - Crie uma conta no [Gemini](https://gemini.ai/).
    - Obtenha as credenciais do seu projeto e insira-as no arquivo apiGemini.js na pasta [/src/api/apiGemini.js](StudioDaus/src/api/apiGemini.js).

5. **Configuração do EmailJS:**
    - Crie uma conta no [EmailJS](https://emailjs.com/).
    - Obtenha as credenciais do seu projeto e insira-as no arquivo index.html na pasta [/src/index.html](StudioDaus/src/home.html).
    - Integre essas credenciais ao código do projeto para que os formulários possam enviar e-mails para os endereços cadastrados.

### Executando o projeto:

1. **Usando o terminal com Python:**

   Se você possui o Python instalado, pode rodar o arquivo diretamente com um servidor HTTP. Siga os passos abaixo:

   ```bash
   cd seu_usuairo/sua_pasta/Studios-Daus/StudioDaus
   ```

   E então, execute o comando abaixo:

   ```python
   python3 -m http.server 3001
   ```

   Isso iniciará um servidor na porta 3001, e você poderá acessar o projeto no navegador em http://localhost:3001.
   E acesse a pasta StudioDaus e nela abra a home.html

2. **Usando a extensão "Live Server" no VSCode:**

- Instale a extensão Live Server no VSCode (disponível no marketplace).
- Abra o arquivo home.html no VSCode.
- Clique com o botão direito no editor e selecione "Open with Live Server".
- Por padrão, o Live Server usará uma porta como 5500. Se quiser especificar a porta 3001:
- Vá para as configurações da extensão e adicione "liveServer.settings.port": 3001 no arquivo de configurações do VSCode.

A aplicação estará disponível em "http://localhost:3001". (ou em uma outra porta se você configurou)

## Como contribuir
* Faça um fork do projeto
* Faça um branch com a sua feature: `git checkout -b minha-feature`
* Faça commit com as suas alterações: `git commit -m 'feat: Minha nova feature'`
* Faça push para o branch: `git push origin minha-feature` ou `git push -u origin minha-feature`

## Contato:

### Thiago Ribeiro

[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-ribeiro-139727260/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thiagoralmeida23@gmail.com)
[![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ThiagoRAlmeida2)

### Amanda Oliveira

### Laís Lacerda

### Marcos

### Gracielle Cristinne

### Izadora Andrade

### Jamili

### Caio Antônio Andrade