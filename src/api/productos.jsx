import { db, storage } from "./firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

import swal from "sweetalert";
import { useEffect, useState } from "react";
const conexion = collection(db, "productos");
// const storage = getStorage();
const metadata = {
  contentType: "image/png",
};

// export async function Mostrartodos() {
//   return getDocs(conexion);
// }
export const Mostrarprodtodos = async () => {
  const data = [];
  const q = query(conexion);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};

export async function Insertaringreso(p) {
  try {
    await addDoc(collection(db, "ventas"), p);
    onClose();
  } catch (err) {
    swal("hola");
  }
}
export const mostrarPoridcategoria = async (idcategoria) => {
  const data = [];
  const q = query(conexion, where("idcategoria", "==", idcategoria));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};
export async function InsertarProductos(p) {
  try {
    const data = await addDoc(conexion, p);

    const id = data.id;
    return id;
  } catch (err) {
    console.error("Error: ", e);
  }
}
export async function SubirimagenStorage(id, file) {
 
  const storage = getStorage();
  const nombreReferencia = ref(storage, `productos/${id}.png`);
  const task = await uploadBytes(nombreReferencia, file);
  const url = await getDownloadURL(nombreReferencia);
  return url;
  
}
export async function EditarurlImg(id, url) {
  await updateDoc(doc(db, "productos", id), { imagen: url });
}
