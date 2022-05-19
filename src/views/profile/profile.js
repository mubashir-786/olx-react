import React, { useState } from 'react'
import backimg from '../../images/left-arrow.png'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { profile } from '../../component/config/firebase';
import img from '../../images/mobile.jpeg'
import {updateProfile} from '../../component/config/firebase'
import { useSelector } from 'react-redux';
import './profile.css'
export default function Profile() {

    const [user, setUser] = useState([])
    useEffect(async () => {
        const profilee = await profile();
        // console.log("profilee ===>", profilee);
        setUser(profilee)
    },[])
    const navigate = useNavigate()
const[stat,editstat]=useState(true)
const [email,setemail]=useState('')
const [name,setname]=useState('')
const edit =()=>{
    updateProfile(email,name)
    editstat(true)
   
}
const userr = useSelector(state=>state.user)

console.log(" user from profile  =>",userr.user)
    return (

        <div>
            <div className='header'>
                <div className='innerheader' >
                    <img src={backimg} alt="" onClick={() => navigate('/home')} className='backbtn' />
                    <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" />

                </div>
            </div>
            {/* <h1 className='text-center' >Profile</h1>
            <div className='container' >
                <div className='profile-pic' >
                    <img src={img} class="rounded float-start" alt="..." />
                </div>
                <div className='profile-text' >
                    <h1>Name : <span> {user.name} </span> </h1> 
                    <h1>Email : <span> {user.email} </span> </h1> 
                    <h1>Number : <span> {user.name} </span> </h1> 
                </div>
            </div> */}
            <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-600">{user.name}</h6>
                                <p>Male</p> {
                                    stat?
                                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" onClick={()=>editstat(false)} ></i>
                                    :
                                    <i  onClick={edit} style={{color:'green',border:'1px solid green'}}> update </i>
                                } 
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                      {stat?
                                      <h6 class="text-muted f-w-400">{user.email}</h6>
                                      :
                                      <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} />

                                      }  
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Name</p>
                                        {
                                            stat?
                                            <h6 class="text-muted f-w-400">{user.name}</h6>
                                            :
                                            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />

                                        
                                        }
                                        
                                    </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Recent</p>
                                        <h6 class="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    {/* <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}
