import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4bZGbMkclMbq9bWQ43bIOREFN4-2n3j4",
  authDomain: "bakm-d2477.firebaseapp.com",
  projectId: "bakm-d2477",
  storageBucket: "bakm-d2477.firebasestorage.app",
  messagingSenderId: "171770793007",
  appId: "1:171770793007:web:304eebc98aae7a29540ada"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
