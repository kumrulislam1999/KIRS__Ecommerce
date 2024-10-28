
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


/* =====================================
    Start import Bootstrap Here
====================================== */
import { Dropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
/* =====================================
    End import Bootstrap Here
====================================== */


/* =====================================
    Start import React Icons Here
====================================== */
import { FaSearch, FaRegHeart, FaRegUser,FaRegEnvelope,FaUserEdit,FaCamera  } from "react-icons/fa";
import { IoMdCart,IoMdClose, IoIosNotifications,IoMdSettings,IoMdHelp  } from "react-icons/io";
import { MdDashboard , MdOutlineManageHistory} from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { RiLogoutCircleLine } from "react-icons/ri";




/* =====================================
    End import React Icons Here
====================================== */


/* =====================================
    Start import Images Here
====================================== */
import logo__img from "../../../assets/home__page/logo1.png";
import user__img from "../../../assets/home__page/userprofile.png"
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
    path: "/home",
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
const dashboard__menu =[
  { path: "/profile",
    icon: FaRegUser,
    name: "Profile"
  },
  { path: "/update-profile",
    icon: FaUserEdit,
    name: "Edit Profile"
  },
  { path: "/history",
    icon: MdOutlineManageHistory,
    name: "Manage History"
  },
  { path: "/settings",
    icon: IoMdSettings,
    name: "Settings"
  },
  { path: "/orders",
    icon: SiShopify,
    name: "Orders"
  },
  { path: "/wishlist",
    icon: FaRegHeart,
    name: "Wishlist"
  },
  { path: "/notification",
    icon: IoIosNotifications,
    name: "Notifications"
  },
  { path: "/messages",
    icon: FaRegEnvelope,
    name: "Message"
  },
  { path: "/help",
    icon: IoMdHelp,
    name: "Help"
  },
  { path: "/",
    icon: RiLogoutCircleLine,
    name: "Logout"
  },
  
] ;

const category__menu = [
  {
    name : "Boy's Collection",
    path: "boy's-collection",
    slug: "boys-collection"
  },
  {
    name : "Girl's Collection",
    path: "girl's-collection",
    slug: "girls-collection"
  },
  {
    name : "Kid's Collection",
    path: "kid's-collection",
    slug: "kids-collection"
  },
  {
    name : "Women's Collection",
    path: "women's-collection",
    slug: "womens-collection"
  },
  {
    name : "Men's Collection",
    path: "men's-collection",
    slug: "mens-collection"
  }
];




const Header1 = () => {

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
    <div id="header1__section">
      <div id='header__lg'>
        <div id='header__top'>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6 col-sm-3" id='top__logo__box'>
                        <Link to={"/"}><img src={logo__img} alt='company logo'/></Link>
                    </div>
                    {
                        ( width > 768 ) ? (
                        <>
                            <div className="col-md-5 col-lg-4 col-xl-3" id='top__search__box'>
                                    <form action="">
                                        <div id="form__search">
                                            <input type="text" placeholder='Search Hehe .....' required/>
                                            <button type='submit' className='search__btn'>Search</button>
                                        </div>
                                    </form>
                            </div>
                            <div className="col-md-3" id='top__right__menu'>
                                <ul className='right__menu'>
                                    {
                                    icons__menu.map((item,i) => (
                                        <li className='right__menu__item' key={i}><Link to={item.path}>{<item.icon/>}</Link></li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </>
                        ) : (
                          (width > 576 && width < 768) ? (
                            <>
                            <div className="col-5" id='top__search__box'>
                                    <form action="">
                                        <div id="form__search">
                                            <input type="text" placeholder='Search Hehe .....' required/>
                                            <button type='submit' className='search__btn'>Search</button>
                                        </div>
                                    </form>
                            </div>
                            <div className='col-2' id='top__nav__toggle__box'><button id='nav__toggle__btn' type='button' onClick={() => setToggle(!toggle)}><MdDashboard/></button></div>
                            </>
                          )  :
                        (<>
                            <div className='col-6' id='top__nav__toggle__box'><button id='nav__toggle__btn' type='button' onClick={() => setToggle(!toggle)}><MdDashboard/></button></div>
                        </>))
                    }
                </div>
            </div>
        </div>
        {
          (width  > 576) && (<>
          <div id="header__middle">
            <div className="container">
                <div className="row align-items-center justify-content-between g-0">
                    {
                      (width > 768 ) ? (
                      <>
                        <div className="col-10 col-md-3" id='category__box'>
                            <Dropdown id='category__dropdown' >
                              <Dropdown.Toggle variant="none" id="category__btn">
                                  Categories
                              </Dropdown.Toggle>

                              <Dropdown.Menu id='dropdown__category__menu'>
                                {
                                  category__menu.map((item, i) => (
                                    <Dropdown.Item className='dropdown__item' key={i} href={item.path}><span>{item.name}</span></Dropdown.Item>
                                  ))
                                }
                              </Dropdown.Menu>
                            </Dropdown>
                        </div>
                      </>) : (
                      <>
                        <div className="col-7" id='middle__menu__box'>
                            <ul className='primary__menu'>
                              {
                                  primary__menu.map((item,i) => (
                                  <li className='primary__menu__item' key={i}><Link to={item.path}>{item.name}</Link></li>
                                  ))
                              }
                            </ul>
                        </div>
                      </>  
                        )
                    }
                    
                    {
                        ( width > 768) ? (
                      <>
                        <div className="col-md-6" id='middle__menu__box'>
                              <ul className='primary__menu'>
                                {
                                    primary__menu.map((item,i) => (
                                    <li className='primary__menu__item' key={i}><Link to={item.path}>{item.name}</Link></li>
                                    ))
                                }
                              </ul>
                        </div>
                        <div className="col-md-3" id='middle__profile__box'>
                              <Dropdown id='dashboard__box'>
                                <Dropdown.Toggle variant="none" id="profile__btn">
                                  <FaRegUser/>
                                </Dropdown.Toggle>                                           
                                <Dropdown.Menu id='dropdown__item__menu'>
                                  
                                    <div className='dropdown__profile__title'>
                                      <div className='img__box'>
                                          <img src={user__img} alt="user profile avarta" />
                                          <div id='avarta__box'>
                                            <label htmlFor="upload__img"><FaCamera/></label>
                                            <input type="file" id='upload__img' alt='upload avarta' hidden/>
                                          </div>
                                      </div>
                                      <div className="text__content">
                                        <h6 className='user__name'>Kumrul Islam</h6>
                                        <p className='user__email'>kumrulislam1999@gmail.com</p>
                                      </div>
                                    </div>
                                  
                                {
                                  dashboard__menu.map((item, i) => (
                                    <Dropdown.Item className='dropdown__item' key={i} href={item.path}><span className='item__display'><i>{<item.icon/>}</i><span className='display__name'>{item.name}</span></span><Badge pill bg='none' className='badge__box'>4</Badge></Dropdown.Item>
                                  ))
                                }
                                </Dropdown.Menu>
                              </Dropdown>
                        </div>
                      </>
                        ) : (<>
                        <div className="col-2" id='middle__profile__box'>
                              <Dropdown id='dashboard__box'>
                                <Dropdown.Toggle variant="none" id="profile__btn">
                                  <FaRegUser/>
                                </Dropdown.Toggle>                                           
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                        </div>
                        </>)
                    }
                    
            
                </div>
            </div>
        </div>
          </>)
        }
        
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
    </div>
  )
}

export default Header1
