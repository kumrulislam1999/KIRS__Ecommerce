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
import { FaUserEdit } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
/* --=======================================
    End Import React Icons Here 
========================================-- */


const Register = () => {
  return (
    <Layout title={"Register"}>
        <div id="register__page">
          
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Register"}/>
        {/* ========== End Page Bannar Here =========== */}

        {/* ========== Start Register Section Here =========== */}
        <div id="register__section">
          <div className="sec__mar">
            <div className="container">
            <div id='register__box'>
                <div className="row  justify-content-center g-0">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-5 pad__12">
                    <div id="register__form__box">
                      <h4>Register Form</h4>
                      <form action="">
                        <div className="input__group">
                          <label htmlFor="name"><FaUserEdit/></label>
                          <input type="text" id='name' placeholder='Your Name' name='name' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="email"><FaEnvelope/></label>
                          <input type="text" id='email' placeholder='Your Email' name='email' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="phone"><FaPhone/></label>
                          <input type="text" id='phone' placeholder='Your Phone' name='phone' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="username"><FaUser/></label>
                          <input type="text" id='username' placeholder='Your Username' name='username' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="password"><RiLockPasswordFill/></label>
                          <input type="text" id='password' placeholder='Your Password' name='password' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="answer"><MdQuestionAnswer/></label>
                          <input type="text" id='answer' placeholder='Your Favorite Answer' name='answer' required />
                        </div>
                        <button type="submit" className='register__btn'>Register</button>
                      </form>
                      <p> Have an account? please, <Link to={"/login"}>login</Link> here</p>
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
        {/* ========== End Register Section Here =========== */}
        </div>
    </Layout>
  )
}

export default Register
