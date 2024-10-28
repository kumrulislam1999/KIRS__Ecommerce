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
/* --=======================================
    End Import React Icons Here 
========================================-- */

const ForgetPassword = () => {
  return (
    <Layout title={"Forget Password"}>
      <div id="forget__password__page">
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Forget Password"}/>
        {/* ========== End Page Bannar Here =========== */}

        {/* ========== Start Register Section Here =========== */}
        <div id="forget__password__section">
          <div className="sec__mar">
            <div className="container">
              <div id='forget__box'>
                <div className="row align-items-center justify-content-center g-0">
                  <div className="col-12 col-md-8 col-lg-5">
                    <div id="forget__form__box">
                      <h4>Reset Password</h4>
                      <form action="">
                        <div className="input__group">
                          <label htmlFor="email"><FaEnvelope/></label>
                          <input type="text" id='email' placeholder='Your Email' name='email' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="new__password"><RiLockPasswordFill/></label>
                          <input type="text" id='new__password' placeholder='New Password' name='new__password' required />
                        </div>
                        <div className="input__group">
                          <label htmlFor="answer"><MdQuestionAnswer/></label>
                          <input type="text" id='answer' placeholder='Your Favorite Answer' name='answer' required />
                        </div>
                        <button type="submit" className='forget__btn'>Reset</button>
                      </form>
                      <p> remember password ? <Link to={"/login"}>login</Link> by password</p>
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

export default ForgetPassword
