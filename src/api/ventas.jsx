import { db } from "./firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const conexion = collection(db, "ventas");
export async function Mostrartodos() {
  return getDocs(conexion);
}
export async function Insertaringreso(p) {
  try {
    await addDoc(collection(db, "ventas"), p);
    onClose();
  } catch (err) {
    swal("hola");
  }
}
