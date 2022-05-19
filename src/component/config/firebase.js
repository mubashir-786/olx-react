

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc, getDocs,getDoc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref,uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBMtdR8j5hgIx7yGTPwuXgA15L8wcwWGMY",
    authDomain: "olx-70c78.firebaseapp.com",
    projectId: "olx-70c78",
    storageBucket: "olx-70c78.appspot.com",
    messagingSenderId: "626075546718",
    appId: "1:626075546718:web:a739faaef591940f5db0cf"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const storage = getStorage();

async function register(email, password, name) {
    
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const uid = userCredential.user.uid
        await setDoc(doc(db, "users", uid), {
            name,
            email,
            password

        })
        alert('Successfully Registered and added in database')


    

}
async function updateProfile(email,name){
    const userr = auth.currentUser;
    // console.log("user ===>", userr.uid);
    // return userr.uid
    
    try {
        await setDoc(doc(db, "users", userr.uid), {
            
            email,
            name
            
        })
        alert('Successfully Updated')
    } catch (e) {  
        alert(e.message)

    }

}


async function login(email, password) {
    
        const user = await signInWithEmailAndPassword(auth, email, password)
        alert('Successfully LoggedIn')
        
        
        return user
 
}



async function addPosts(title, price, description, dropdown,location,datetime,files) {
    let urls = []
    for(let i = 0; i < files.length; i++) {
      const storageRef = ref(storage, `/profile/${files[i].name}`);
      const response = await uploadBytes(storageRef, files[i])
      const url = await getDownloadURL(response.ref)
      urls.push(url)
    }
    try {
        await addDoc(collection(db, "posts"), {
            title : title,
            price : price,
            description : description,
            dropdown : dropdown,
            location : location,
            time:datetime,
            image : urls

        })
        alert('Successfully Added')
    } catch (e) {  
        alert(e.message)

    }
}
async function getAds() {
    const querySnapshot = await getDocs(collection(db, "posts"))
    const ads = []
    querySnapshot.forEach((doc) => {
      ads.push({ ...doc.data(), id: doc.id })
    })
    return ads
  }
   
 async function getAdDetail(idd) {
    

    const docRef = doc(db, "posts", idd);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    return data
  }

 async function profile(){
    const userr = auth.currentUser;
    // console.log("user ===>", userr.uid);
    // return userr.uid
    
    

        const docRef = doc(db, "users", userr.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return data
      
}
export {
    register,
    login,
    addPosts,
    getAds,
    getAdDetail,
    profile,
    updateProfile
    // uploadImages

}





