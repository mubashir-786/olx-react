import React from 'react';
import './login.css'
import { useState } from 'react';
import { login } from '../component/config/firebase';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../component/store/actions';
export default function Login(prop) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [ stat, setstat] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogin = async () => {
        try {
           const user= await login(email, password)
           
            dispatch(addUser(user))
             navigate('/home')
        } catch (e) {
            alert(e.message)
        }

        

    }
    return <div>
        <div className="container text-center">
        <h1> Login </h1>
       
        <div className='main divv'>
        <img src={stat ? 'https://cdn-icons-png.flaticon.com/512/616/616592.png' : 'https://cdn-icons-png.flaticon.com/512/616/616591.png'} alt="" width={100} />
            <div class="input-group flex-nowrap mt-3">
                <input type="email" class="form-control" placeholder="Gmail" aria-label="Gmail" aria-describedby="addon-wrapping" onClick={()=>setstat(true)} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div class="input-group flex-nowrap mt-3">
                <input type="password" class="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" onClick={()=>setstat(false)} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            
            <button style={{marginBottom:'13px'}} type="button" class="btn btn-success mt-5" onClick={onLogin} > Login</button>
            <p className='hov' style={{ borderTop:'1px solid gray', width : '40%' , margin: "auto",paddingTop: '10px'}} onClick={()=>navigate('/signup')} > Create New Account? </p>  
        </div>
</div>
    </div>;
}
