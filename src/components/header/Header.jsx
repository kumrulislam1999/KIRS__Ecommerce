
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* =====================================
    Start import React Icons Here
====================================== */
import { FaSearch, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoMdCart,IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

/* =====================================
    End import React Icons Here
====================================== */


/* =====================================
    Start import Images Here
====================================== */
import logo__img from "../../assets/home__page/logo.png";
/* =====================================
    End import Images Here
====================================== */

const icons__menu =[
  { path: "/cart",
    icon: IoMdCart,
    name: "Cart"
  },
  { path: "/wishlist",
    icon: FaRegHeart,
    name: "Wishlist"
  },
  { path: "/login",
    icon: AiOutlineLogin,
    name: "Login"
  },
  { path: "/dashbord",
    icon: FaRegUser,
    name: "Dashboard"
  },
  
] ;
const primary__menu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/shop",
    name: "Shop",
  }
];


const Header = () => {

  /* =========================================
      	Start UseState Hooks Declaration Here
  ========================================= */
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
/* =========================================
      	End UseState Hooks Declaration Here
  ========================================= */


  /* =========================================
      	Start Window Resize Handler Here
  ========================================= */
  useEffect (() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  })
  /* =========================================
      	Start Window Resize Handler Here
  ========================================= */
  return (
    <header id="header__section">
      <div id='header__lg'>
        <div className="container">
          <div className="row align-items-center justify-content-between justify-md-content-center g-0">
            <div className="col-8 col-md-3" id='logo__box'><Link to={"/"}><img src={logo__img} alt='company logo'/></Link></div>
      {
        ( width > 768) ? (
          <>
          <div className="col-md-6" id='primary__menu__box'>
                <ul className='primary__menu'>
                  {
                    primary__menu.map((item,i) => (
                      <li className='primary__menu__item' key={i}><Link to={item.path}>{item.name}</Link></li>
                    ))
                  }
                </ul>
            </div>
            <div className="col-md-3" id='right__menu__box'>
              <ul className='right__menu'>
                {
                  icons__menu.map((item,i) => (
                    <li className='right__menu__item' key={i}><Link to={item.path}>{<item.icon/>}</Link></li>
                  ))
                }
              </ul>
            </div>
          </>
        ) : (<><div className='col-3' id='nav__toggle__box'><button type='button' id='nav__toggle__btn' onClick={() => setToggle(!toggle)}><MdDashboard/></button></div></>)
      }
            
      
          </div>
        </div>
      </div>
      <div id="header__sidebar" className={toggle ? "active" : ""}>
        <div id="header__sidebar__top">
          <Link to={"/"} className='sidebar__logo'><img src={logo__img} alt='header sidebar logo'/></Link>
          <button className='close__btn' type='button' onClick={() => setToggle(!toggle)}><IoMdClose/></button>
        </div>
        <div id='sidebar__content'>
          <div id="header__sidebar__middle">
            <div id="form__search">
                <input type="text" placeholder='Search Hehe .....' required/>
                <button type='submit' className='search__btn'>Search</button>
            </div>
            <ul id="header__sidebar__menu">
              {
                primary__menu.map((item, i) => (
                  <li key={i} className='primary__sidebar__item'><Link to={item.path}>{item.name}</Link></li>
                ))
              }
            </ul>
          </div>
          <div id="header__sidebar__bottom">
            <ul id="header__sidebar_dashboard">
              {
                icons__menu.map((item,i) => (
                  <li className='dashboard__sidebar__item' key={i}><Link to={item.path} ><span className='dashboard__item'><i>{<item.icon/>}</i><span className='name'>{item.name}</span></span><span className="badge text-bg-secondary item__badge">4</span></Link></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
