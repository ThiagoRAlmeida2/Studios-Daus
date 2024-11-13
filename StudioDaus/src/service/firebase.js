// Importa e inicializa o Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js';


const firebaseConfig = {
    apiKey: "AIzaSyDT926A7CmQ4LNlNEGntJmB1vJ2tqvPidc",
    authDomain: "daus-bbaa5.firebaseapp.com",
    databaseURL: "https://daus-bbaa5-default-rtdb.firebaseio.com",
    projectId: "daus-bbaa5",
    storageBucket: "daus-bbaa5.firebasestorage.app",
    messagingSenderId: "631298869552",
    appId: "1:631298869552:web:bd028ba32541ccb2f160f5"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function salvarDados(email, link, respostaIA) {
    const usuariosRef = ref(database, 'usuarios'); // Referência à coleção "usuarios"

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