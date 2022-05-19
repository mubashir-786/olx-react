import React from 'react';
import './post.css'
import Heart from '../../images/heart.png'
import Heart2 from '../../images/heart2.png'
import { useNavigate } from 'react-router-dom';
export default function Post(prop) {
    

    return <div className='dis' onClick={prop.onClick} >



        <div className="card mt-3 main " onClick={prop.onclickpost} >
            <img src={prop.img[0]} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{prop.title}  </p>
                <img src={ Heart } alt="" className='fav-icon'  />
                <p className='price' ><b>Rs  <span>{prop.price}</span></b></p>

                <p className='time' > {prop.time} </p>

            </div>
        </div>




    </div>;
}
