import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBb8BXDB4NBhcum0mznFkkmLDQno4_LBHU",
  authDomain: "vanlife-601f1.firebaseapp.com",
  projectId: "vanlife-601f1",
  storageBucket: "vanlife-601f1.appspot.com",
  messagingSenderId: "406924152291",
  appId: "1:406924152291:web:9f95bb9db751e9776724d6",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return dataArr
}
