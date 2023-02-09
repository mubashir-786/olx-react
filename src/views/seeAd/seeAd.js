import React from 'react';
import backimg from '../../images/left-arrow.png'
import heartimg from '../../images/heart.png'
import './seeAd.css'
import post from '../posts/post';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getAdDetail } from '../../component/config/firebase';
import Foooter from '../../component/footer/footer';

export default function SeeAd(prop) {
    const [post, setAds] = useState([])
    const [postind,setind] = useState()
  const pharam = useParams()
  console.log(pharam.adId)
   useEffect(async() => {
      const datas= await getAdDetail(pharam.adId)
       setAds(datas)
   },[])
 if (postind === undefined) {
       setind(0)  
}
 
  const navigate = useNavigate()
  if (post.length === 0) {
    return <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div style={{width: '100px', height: '100px'}} class="spinner-border" role="status">
  <span class="sr-only"></span>
</div>
    </div>
  }
  return <div>
    <div className='header'>
      <div className='innerheader' >
        <img src={backimg} alt="" className='backbtn' onClick={() => { navigate('/home') }} />
        <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" />
      </div>


    </div>
    <div className='container mt-5'>
      <div className='images'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            
             <div className='imageee'>
                <img src={post.image[postind]} class=" immgg " alt="..." />
                
              </div>


          </div>
        
        </div>
      </div>
      <div className='fffs' >  
          <ul>
            {post.image.map((image, index) => {   return <li className='imggg' onClick={()=>{setind(index)}} >
              <img  src={image} alt="" style={{width:'100%'}} />
            </li>
            })}
          </ul>
         </div>

      <div className='pricediv'>
        <h1 className='price-font' > Rs <span> {post.price}</span> </h1>
        <p className='titleview'> {post.title} </p>
        <img src={heartimg} alt="" className='heart-img' />
        <p className='locate' > {post.location}   </p>
        <p className='timee'>  {post.time}</p>

      </div>

      <div className='discription-div'>
        <h1 className='description-font' > Description </h1>

        <p className='descrip'>  {post.description}  </p>
      </div>

    </div>

<Foooter/>

  </div>;
}
