import React, { useState } from 'react';
import "./signup.css"
// import { register } from './component/config/firebase'
import { register } from '../component/config/firebase';
import { useNavigate } from 'react-router-dom';
export default function Signup(prop) {

   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')
   const [name, setName] = useState('')
   const [stat,setStat] = useState(false)
   const navigate = useNavigate()
   const onSign =  () => {
       try{
    register(email, pass, name)
    // firebase.js to App.js conditional rendering
    navigate('/home')
       }catch(e){
           alert(e.message)
       }
  }
    return <div  class='text-center' >

        <h1> Sign Up </h1>
        <div style={{width:'70%',margin:'auto'}} >
            <img   src={!stat ? 'https://cdn-icons-png.flaticon.com/512/616/616592.png' : 'https://cdn-icons-png.flaticon.com/512/616/616591.png'} alt="" width={100} />
            <div class="input-group flex-nowrap mt-5">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onClick={()=>setStat(false)} onChange={(e) => {setName(e.target.value)}} />
            </div>

            <div class="input-group flex-nowrap mt-3">
                <input type="email" class="form-control" placeholder="Gmail" aria-label="Gmail" aria-describedby="addon-wrapping" onClick={()=>setStat(false)} onChange={(e) => {setEmail(e.target.value)}} />
            </div>

            <div class="input-group flex-nowrap mt-3">
                <input type="password" class="form-control pass" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" onClick={()=>setStat(true)} onChange={(e) => {setPass(e.target.value)}}/>
            </div>

            <button type="button" class="btn btn-success mt-5" onClick={onSign} >Sign Up</button>
        </div>

    </div>;
}

