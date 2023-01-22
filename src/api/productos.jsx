import { db, storage } from "./firebase.config";

import {
  collection,

  addDoc,
  updateDoc,
  doc,

} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,

} from "firebase/storage";
const conexion = collection(db, "productos");
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
