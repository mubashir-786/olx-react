import React from 'react';
import './navbar.css'
import olxLogo from '../../images/OLX-logo.png'
import shopLogo from '../../images/shop.png'
import carLogo from '../../images/electric-car.png'
import propertyLogo from '../../images/business-and-trade.png'
import searchLogo from '../../images/pngaaa.com-25409.png'
import Category from '../category/categoty';
import Posts from '../posts/post';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {removeUser} from '../../component/store/actions/index'


export default function Navbar(prop) {
    var dispatch = useDispatch()
    var current
    const navigate = useNavigate()

    const postclick = index => {
        current = prop.postss[index]
        // prop.onclickpost
        console.log(current)
        prop.onclickpost(current)
    }
    return <div>

        <div className='main-nav' >
            <div className='semi-main' >
                <div className='nav-top'>
                    <ul>
                        <li>
                            <img src={olxLogo} alt="" className='Logo-olx' />
                        </li>

                        <li  >
                            <img src={shopLogo} alt="" className='Logo-mall' />
                            <span className='Logo-text' >MALL</span>
                        </li>

                        <li>
                            <img src={carLogo} alt="" className='Logo-mall' />
                            <span className='Logo-text'>  MOTORS </span>
                        </li>

                        <li>
                            <img src={propertyLogo} alt="" className='Logo-property' />
                            <span className='Logo-text'> PROPERTY </span>
                        </li>
                    </ul>

                </div>
                <div className='nav-bottom'>
                    <select name="" id="" className='location-input' >
                        <option value=""> Karachi </option>
                        <option value=""> Hyderabad </option>
                        <option value=""> Lahore </option>
                        <option value=""> Multan </option>
                    </select>

                    <input type="text" placeholder='Find Cars, Mobile Phones and more...' className='search-input' />
                    <div className='search-div' >
                        <img src={searchLogo} alt="" className='search-img' />

                    </div>
                    <div className='profile-div' >
                        <img className='img-profile' src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" onClick={() => navigate('/profile')} />
                    </div>
                    <div className='sell-img' >
                        <button className='sell-btn' onClick={() => navigate('/sell')} >
                            <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" className='sell' />
                            <img src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" alt="" className='plus-img' />
                            <span className='sell-text' >SELL</span>
                        </button>

                    </div>
                    <div>

                        <button onClick={()=> dispatch(removeUser())} className='logout' >
                            Logout 
                        </button>
                    </div>

                </div>
            </div>
        </div>


        <Category />
        {/* <div className='container'  >

            <h1 className='heading mt-5 ' >Fresh recommendations
            </h1>
            <div> {prop.postsss} </div>
          

        </div> */}




    </div>;
}
