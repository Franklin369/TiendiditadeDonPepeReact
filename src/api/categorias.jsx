import { db } from "./firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";
const conexion = collection(db, "categorias");
export async function Mostrartodos() {
  return getDocs(conexion);
}
export async function Insertaringreso(p) {
  try {
    await addDoc(collection(db, "categorias"), p);
    onClose();
  } catch (err) {
    swal("hola");
  }
}

export const pruebas = async () => {
  const data = [];
  const q = query(conexion);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};
