
import React from 'react'
import { Link } from 'react-router-dom';


/* --=======================================
Start Import React Icons Here 
========================================-- */
  import { FaUserEdit } from "react-icons/fa";
/* --=======================================
Start Import React Icons Here 
========================================-- */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from "../../../components/page__bannar/PageBannar";
import AdminDashboardMenu from '../../../components/admin__dashboard__menu/AdminDashboardMenu';
/* --=======================================
    End Import Components Here 
========================================-- */

const UpdateProfile = () => {
  return (
    <Layout title={"Update Profile"}>
      <div id="update__admin__profile__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"Update Profile"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Page Bannar Section Here ========= */}
          <div id="update__admin__profile__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between g-0">
                  <div className="col-12 col-lg-3">
                      <AdminDashboardMenu/>
                  </div>
                  <div className="col-12 col-lg-9">
                    <div id="admin__content__box">
                      <h4>Update Profile Details</h4>
                      <form action="" className='form__box'>
                        <div className="row align-items-center justify-content-between g-0">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="fname">First Name</label>
                              <input type="text" name="fname" id="fname" placeholder='First Name' />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="lname">Last Name</label>
                              <input type="text" name="lname" id="lname" placeholder='Last Name' />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="email">Email ID</label>
                              <input type="email" name="email" id="email" placeholder='Email ID' disabled/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="phone">Phone Number</label>
                              <input type="number" name="phone" id="phone" placeholder='Phone Number' />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="password" placeholder='Password' disabled />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="status">Status</label>
                              <input type="text" name="status" id="status" placeholder='Admin' disabled />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="country">Country</label>
                              <input type="text" name="country" id="country" placeholder='Country Name'/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="city__town">City/Town</label>
                              <input type="text" name="city" id="city__town" placeholder='City/Town Name' />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="state">State</label>
                              <input type="text" name="state" id="state" placeholder='State Name'  />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="zip__code">Zip Code</label>
                              <input type="text" name="zip" id="zip__code" placeholder='Zip Code' />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="input__group">
                              <label htmlFor="address">City/Town</label>
                              <input type="text" name="address" id="address" placeholder='Address'  />
                            </div>
                          </div>
                        </div>
                          <button type="submit" className='update__btn'>Update Profile</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        { /* ========= End Page Bannar Section Here ========= */}
      </div>
    </Layout>
  )
}

export default UpdateProfile
