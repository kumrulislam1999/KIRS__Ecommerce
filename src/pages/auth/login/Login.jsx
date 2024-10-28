import React from 'react'



/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from '../../../components/page__bannar/PageBannar'
import { Link } from 'react-router-dom'
/* --=======================================
    End Import Components Here 
========================================-- */

/* --=======================================
    Start Import React Icons Here 
========================================-- */
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
/* --=======================================
    End Import React Icons Here 
========================================-- */

import login__bg__img from "../../../assets/home__page/login-bg.jpg";

const Login = () => {
  return (
    <Layout title={"Login"}>
      <div id="login__page">
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Login"}/>
        {/* ========== End Page Bannar Here =========== */}


        
        {/* ========== Start Login Section Here =========== */}
        <div id="login__section">
          <div className="sec__mar">
            <div className="container">
              <div id='login__box'>
                <div className="row justify-content-center  g-0">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-5 pad__12">
                    <div id="login__form__box">
                      <h4>Login Form</h4>
                      <form action="">
                        <div className="input__group">
                          <label htmlFor="username"><FaUser/></label>
                          <input type="text" id='username' placeholder='Username or Email' name='username' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="password"><RiLockPasswordFill/></label>
                          <input type="text" id='password' placeholder='Password' name='password' required />
                        </div>
                        <div id="btn__box">
                          <Link to={"/forget-password"}>forget Password</Link>
                          <button type="submit" className='login__btn'>Login</button>
                        </div>
                      </form>
                      <p>don't Have an account? please, <Link to={"/register"}>Register</Link> here</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10 col-md-8 col-lg-5 pad__12">
                    <div id="content__box">
                        <h3>KIRS</h3>
                        <h5>Welcome To KIRS</h5>
                        <div id="social__medial">
                          <Link to={"https://www.facebook.com/"}><FaFacebookF/></Link>
                          <Link to={"https://www.facebook.com/"}><FaTwitter/></Link>
                          <Link to={"https://www.facebook.com/"}><FaGoogle/></Link>
                          <Link to={"https://www.facebook.com/"}><FaInstagram/></Link>
                          <Link to={"https://www.facebook.com/"}><FaLinkedinIn/></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== End Login Section Here =========== */}

      </div>
    </Layout>
  )
}

export default Login
