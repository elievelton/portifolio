import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDryicoDjm-IdzOh5l3flk4Hz7lWKf9trs",
  authDomain: "contadordevisitas-cc1ca.firebaseapp.com",
  projectId: "contadordevisitas-cc1ca",
  storageBucket: "contadordevisitas-cc1ca.appspot.com",
  messagingSenderId: "531902057644",
  appId: "1:531902057644:web:43bfa9e93e1407ef76a309"
};

// Inicializar Firebase apenas se ele não estiver inicializado e estiver no lado do cliente
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
