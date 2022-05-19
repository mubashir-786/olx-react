import logo from './logo.svg';
import './App.css';
import Signup from './views/signup';
import Login from './views/login';
import { useEffect, useState } from 'react'
import { register, login, addPosts, getAds, getAdDetail } from './component/config/firebase'
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
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './component/footer/footer';
import {useSelector} from 'react-redux'

function Homee() {
  const [ads, setAds] = useState([])
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
  const [currentAd, setCurrentAd] = useState('')
  useEffect(async () => {
    const tempAds = await getAds()
    setAds(tempAds)
  }, [])
  const navigate = useNavigate()
const user = useSelector(state=>state.user)

console.log(" user from home  =>",user)
  

  const [t, f] = useState(false)

  const sellbtn = () => {
    addPosts(title, price, description, dropdown)
  }

  async function postClick(item) {
    navigate(`/seeAd/${item.id}`)
    var itm = item.id
    setCurrentAd(itm)
    // console.log(itm)
    const poss = await getAdDetail(itm)
    // console.log(poss)
    // datapost(poss)

    return poss
  }


  const [ad, setAd] = useState()

  //  useEffect(async () => {
  //   const tempAd = await getAdDetail(currentAd)

  //   console.log(tempAd)
  // },postClick)



  // if (ads.length === 0) {
  //   return <div>Loading...</div>
  // }

  return (








    <div>

      <Navbar className="nav" />
      <div className='container'  >

        <h1 className='heading mt-5 ' >Fresh recommendations
        </h1>

        {ads.map((item, index) => {
          return <Posts

            pic={item.thumbnail}
            title={item.title}
            price={item.price}
            time={item.time}
            img={item.image}
        
            onClick={() => postClick(item)}

            postsee={() => {
              setpost(index)
            }



            }
          // onclickpost={() => setstat(true)} postss={postobj}


          />
        })}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
     
      </div>

       <Footer />








    </div>











  );
}

export default Homee;
