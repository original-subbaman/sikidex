import { firestore } from "../firebase-config";
import {
  collection,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
export const addPost = async (item) => {
  console.log(item);
  return await addDoc(collection(firestore, "events"), item);
};

export const getAllEvents = async (item) => {
  const snapshot = await getDoc(collectionRef);
  return snapshot.doc.map((doc) => ({ id: doc.id, ...doc.data() }));
};
