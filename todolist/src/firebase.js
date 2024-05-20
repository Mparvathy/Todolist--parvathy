
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCYaGDFHFKbBbhHY3lzqbXVIfiXvUZwTXs",
  authDomain: "todolist-58886.firebaseapp.com",
  databaseURL: "https://todolist-58886-default-rtdb.firebaseio.com",
  projectId: "todolist-58886",
  storageBucket: "todolist-58886.appspot.com",
  messagingSenderId: "880397550871",
  appId: "1:880397550871:web:52b1dcd5fa00a95a5f6352"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();