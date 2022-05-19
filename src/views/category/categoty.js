import React from 'react';
import './category.css'
export default function category() {
    return <div>
        <div className='category-list' >
            <ul>
                <li>
                    <select name="" id="" className='option' >

                        <option value="">ALL CATEGORIES </option>
                        <option value="">Vehicles</option>
                        <option value="">Property</option>
                        <option value="">Mobiles</option>
                    </select>
                </li>
                <li className='cate' >  Mobile Phones </li>
                <li className='cate' > Cars </li>
                <li className='cate' > Motorcycles </li>
                <li className='cate' > Houses </li>
                <li className='cate' > Tv - Video - Audio </li>
                <li className='cate' > Tablets  </li>
                <li className='cate' > Lands & Plots </li>
            </ul>
        </div>
        <div style={{width:'100%'}} >
            <img src="https://clone-frontpage-olx.netlify.app/back.JPG" className='olx-center-img' alt="" style={{width:'100%'}} />
        </div>
        
    </div>;
}
