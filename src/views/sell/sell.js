import React from 'react';
import './sell.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backimg from '../../images/left-arrow.png'
import { addPosts, uploadImages } from '../../component/config/firebase';
import Foooter from '../../component/footer/footer';

export default function Sell(prop) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [img, setimage] = useState()
  const [description, setDescription] = useState('')
  const [dropdown, setDropdown] = useState('')
  const [location , setLocation]=useState('')
  const navigate = useNavigate()
  const sellbtn = async () => {
    var currentdate = new Date();
    var day = currentdate.getDay()
    var month = currentdate.getMonth() 
    var Hour= currentdate.getHours()
    var min = currentdate.getMinutes() 
    var sec = currentdate.getSeconds()
    if(day<10){
       day = '0' + day
    }
    if(month <10){
      month = '0' +month
    }
    if(Hour <10){
      Hour = '0' +Hour
    }
    if(min <10){
      min = '0'+ min
    }
    if(sec <10){
      sec = '0'+sec
    }
    var datetime =  day + "/" + month
    + "/" + currentdate.getFullYear() + " - " 
    + Hour + ":" 
    + min + ":" + sec;
    const posst = await addPosts(title, price, description, dropdown,location, datetime,img)
    //  const imgg = await uploadImages(img)
    // console.log(imgg)
  }
  return <div>
    <div className='header'>
      <div className='innerheader' >
        <img src={backimg} alt="" onClick={() => navigate('/home')} className='backbtn' />
        <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" />

      </div>
    </div>

    <div>
      <h1 className='ad-heading' > POST YOUR AD</h1>
    </div>
    <div className='inputdiv' >
      <div style={{display:'flex',justifyContent:'space-between'}} >
         <input type="text" placeholder='Title' className='titlee' onChange={(e) => setTitle(e.target.value)} />
      <select name=" drop " id="" className='dropdown' onChange={(e) => setDropdown(e.target.value)} >
        <option value="Accessoreis"> Accessories</option>
        <option value="Vehicles">Vehicles</option>
        <option value="Property">Property</option>
        <option value="Mobile">Mobiles</option>
      </select>
      </div>
     



      <input type="text" placeholder='Description' className='diss' onChange={(e) => setDescription(e.target.value)} />
<div style={{display:'flex',justifyContent:'space-between'}}  className='mt-4' > 
       <input type="text" placeholder='Price' className='pricee' onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder='Location' className='pricee' onChange={(e) => setLocation(e.target.value)} />
</div>
 

      <div className='file'>
        <label for="formFileLg" class="form-label"></label>
        <input class="form-control form-control-lg inputtt" id="formFileMultiple" type="file" onChange={(e) => { setimage(e.target.files) }} multiple />
      </div>
      <div className='btnn'>
        <button type="button" class="btn btn-secondary" onClick={sellbtn} >Submit Ad</button>
      </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
    </div>
  <Foooter/>
  </div>;
}
