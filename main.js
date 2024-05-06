import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js" ;
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
}from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBlahoJjeK0jyO-4tZlAiPRjym6Mxn2P6o",
  authDomain: "insan-cemerlang-59727.firebaseapp.com",
  projectId: "insan-cemerlang-59727",
  storageBucket: "insan-cemerlang-59727.appspot.com",
  messagingSenderId: "839220708273",
  appId: "1:839220708273:web:4d1dde85cf74aebd1d7390",
  measurementId: "G-1VP3D59R0T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function ambilDaftarproduk(){
  const refDokumen = collection(db,"produk");
  const kueri = query(refDokumen,orderBy("nama"));
  const cuplikankueri = await getDocs(kueri);
  
let hasil = []; // tes
  cuplikankueri.forEach((dok) => {
    hasil.push({ 
      id: dok.id, 
      nama: dok.data().nama,
      harga:dok.data().harga,
      stok:dok.data().stok,
      });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahProduk(nama,harga,stok) {
try {
  const dokRef = await addDoc(collection(db,"produk"),{
    nama:nama,
    harga:harga,
    stok:stok
    });
    console.log('berhasil menambah produk'+dok)
  }catch (e) {
    console.log('Gagal menambah produk' + e);
    }
}