import React from 'react'


import { Link } from 'react-router-dom'


/* ====================================
    Start React Icon Here
==================================== */
import {  FaStar } from "react-icons/fa";
/* ====================================
    End React Icon Here
==================================== */

/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../assets/home__page/featured-2-4.jpg"

import product__img2 from "../../assets/home__page/featured-2-1h.jpg"
import product__h__img2 from "../../assets/home__page/featured-2-1.jpg"

import product__img3 from "../../assets/home__page/featured-2-2h.jpg"
import product__h__img3 from "../../assets/home__page/featured-2-2.jpg"

import product__img4 from "../../assets/home__page/featured-2-5h.jpg"
import product__h__img4 from "../../assets/home__page/featured-2-5.jpg"

/* --=======================================
    End Import Images Here 
========================================-- */




const CustomerReview = () => {
  return (
    <div id='customer__review'>
      <div id="customer__review__box">
        <div id="review__item">
            <div className="img__box">
                <img src={product__img3} alt="customer profile" />
            </div>
                
            <div className="text__box">
                <div id="title__date__box">
                    <h6> <Link>Leather Jackets</Link></h6> <p>10, Mar, 2024</p>
                </div>
                <div className="rating__box">
                    <div className='rating'>
                        <p><i><FaStar/></i> <i><FaStar/></i> <i><FaStar/></i> <i><FaStar/></i><i><FaStar/></i></p> <span>(4.5)</span>
                    </div>
                </div>
                <p className='price'>$120 <span>$40</span></p>
                <p className='description'>Quickly productivate holistic systems after 24/365 e-commerce. Continually synthesize superior catalysts for change via high standards in leadership skills. Collaboratively evisculate distributed functionalities rather than timely methods of empowerment.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
