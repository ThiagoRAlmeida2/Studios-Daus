// Importa e inicializa o Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Inicialização
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

function salvarDados(email, link, respostaIA) {
    const usuariosRef = database.ref('usuarios');

    const novoUsuario = {
        email: email,
        link: link,
        respostaIA: respostaIA || "" 
    };

    usuariosRef.push(novoUsuario)
        .then(() => {
            console.log("Novo usuário adicionado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao adicionar novo usuário:", error);
        });
}