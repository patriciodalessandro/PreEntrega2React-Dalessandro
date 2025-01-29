// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, setDoc, deleteDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAkh3svgzJucpSq9newaJZdcTNxTNdPyFg",
  authDomain: "pf-react-dalessandro.firebaseapp.com",
  projectId: "pf-react-dalessandro",
  storageBucket: "pf-react-dalessandro.firebasestorage.app",
  messagingSenderId: "1000632064415",
  appId: "1:1000632064415:web:1cd38ec552f55d539945aa"
};

// conexión con Firebase
const app = initializeApp(firebaseConfig);
// conexión con la base de datos de firestore
const db = getFirestore(app);

export default async function getAsyncData() { 
    const collectionRef = collection(db, "products"); 
    const productsSnapshot = await getDocs(collectionRef); 
    const documentsData = productsSnapshot.docs.map(doc => { 
      const fullData = doc.data();
      fullData.id = doc.id;
      return fullData;
    });  

    return documentsData; 
}  

export async function getAsyncItemById(itemID) {
    const docRef = doc(db, "products", itemID);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
}

// Función para crear una nueva orden
export async function createBuyOrder(orderData) {
  try {
    // Asegurarse de que el objeto de la orden tiene todos los datos necesarios
    if (!orderData || !orderData.buyer || !orderData.items || !orderData.total) {
      throw new Error("Los datos de la orden son incompletos.");
    }

    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);
    return newOrderDoc.id; 
  } catch (error) {
    throw error; 
  }
}

// Función para actualizar un documento en cualquier colección
export async function updateDocument(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, data, { merge: true }); // merge: true asegura que no se sobrescriban datos no incluidos
  } catch (error) {
    throw error; 
  }
}

// Función para eliminar un documento de cualquier colección
export async function deleteDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    throw error; 
  }
}

export { db };
