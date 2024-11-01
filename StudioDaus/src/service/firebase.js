// Importa e inicializa o Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function salvarDados(email, link, respostaIA) {
    const usuariosRef = ref(database, 'usuarios');

    const novoUsuario = {
        email: email,
        link: link,
        respostaIA: respostaIA || "" 
    };

    push(usuariosRef, novoUsuario)
        .then(() => {
            console.log("Novo usuário adicionado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao adicionar novo usuário:", error);
        });
}

export { salvarDados };