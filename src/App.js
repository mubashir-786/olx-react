import logo from './logo.svg';
import './App.css';
import Signup from './views/signup';
import Login from './views/login';
import { useState } from 'react'
import { register, login, addPosts } from './component/config/firebase'
import Home from './views/home/home';
import iphone from './images/mobile.jpeg'
import SeeAd from './views/seeAd/seeAd';
import Sell from './views/sell/sell';
import Navbar from './views/navbar/navbar'
import './views/home/home.css'
import Posts from './views/posts/post';
import './views/navbar/navbar.css'
import { FirebaseError } from 'firebase/app';
import Navigation from './component/config/router';
import { useNavigate } from 'react-router-dom'
import Router from './component/config/router'
import { Provider } from 'react-redux'
import { Store, Persistor } from './component/store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState(true)
  const [seead, setstat] = useState(false)
  const [post, setpost] = useState()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [dropdown, setDropdown] = useState('')



  const onSign = () => {
    register(email, pass, name)
    // firebase.js to App.js conditional rendering

  }
  const onLogin = () => {
    login(email, pass)
  }
  // const navigate = useNavigate()

  const [t, f] = useState(false)

  const sellbtn = () => {
    addPosts(title, price, description, dropdown)
  }

  return (

    <div >

      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
          <Router />
        </PersistGate>
      </Provider>


    </div>
  );
}

export default App;
