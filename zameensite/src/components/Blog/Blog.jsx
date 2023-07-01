import React from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import blogcover from "./../../asset/blogcover.jpg"
import service1 from "./../../asset/projects/services/blogimg1.jpg"
import service2 from "./../../asset/projects/services/blogimg2.jpg"
import service3 from "./../../asset/projects/services/blogimg3.jpg"
import googleplay from '../../asset/googleplay.svg'
import appleplay from '../../asset/appstore.png'
import bank from  '../../asset/js_bank.png'
const Blog = () => {
  return (
    <>
     <Navi/>
     <div class="container ">
     <div class="row">
    <div class="col">
       <section class="carousel-img-wrapper ">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={blogcover} class="d-block img-fluid w-100 " alt="..."/>
                  <div class="overlay"></div>
                  <div class="carousel-caption d-none d-md-block">
                  <h2 className="post-title">The Charm of Real Estate Investment During Economic Turmoil: A Savvy Choice for Pakistani Investors</h2>
                  <div class="container">
  <div class="row">
    <div class="col">
    <button type="button" class="btn btn-success">REAL ESTATE TREND</button>
    </div>
    <div class="col">
<p className='mt-3'>
    3 MIN READ
</p>
    </div>
  </div>
  </div>
                  </div>
                </div>
                </div>
              </div>
            
        </section>
    </div>
   
    
  </div>    
  <div class="row mt-5 justify-content-md-center">
   <div class="container">
   
    <div class="row">
      <div class="col-md-4">
        <div class="service-media"> <img src={service1} alt=" "/> </div>
        <div class="service-desc">
          <h3>Zameen.com invites all to Grand Open House Event at Gulberg City Centre this Saturday</h3>
          <p>Discover the ultimate investment opportunity at Gulberg City Centre's Grand Open House Event for a profitable future in Lahore.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service2}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Zameen.com to showcase ISB’s premium real estate projects at PSE this Saturday</h3>
          <p>Explore a multitude of captivating projects and unlock exclusive discounts at PSE Islamabad, the ultimate destination for real estate enthusiasts.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service3}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Gear Up for Grand Open House Event at Jinnah Square Residential Apartments this Sunday</h3>
          <p>Discover the epitome of elegance and investment potential at the Grand Open House of Jinnah Square Residential Apartments in Lahore.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="service-media"> <img src={service1}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Exploring the Key Features of Budget 2023-24: A Comprehensive Overview
</h3>
          <p>From growth targets and tax relief to development projects, this blog provides an insightful overview of the upcoming fiscal year
.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service2}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Ready-for-Possession Zameen Opal Apartments Offer Lucrative Investment Opportunity in LHR</h3>
          <p>Zameen Opal – one of the most exquisite apartment complexes in Lahore – is all set to hand over possession.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service3}  alt=" "/> </div>
        <div class="service-desc">
          <h3>The Charm of Real Estate Investment During Economic Turmoil: A Savvy Choice for Pakistani Investors</h3>
          <p>Learn why you should be investing in the real estate sector during an economic crisis.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</div>
<section class="popular-locations d-none d-md-block">
            <div class="container">
           
              <div class="popular-properties-wrapper">
              
                
              
  
              
               
             
               
               

                
               
              
              
               

<div className="app-promotion">
  <div className="overlay"></div>
  <img
    style={{
      display: 'block',
      WebkitUserSelect: 'none',
      margin: 'auto',
      cursor: 'zoom-in',
      backgroundColor: 'hsl(0, 0%, 100%)',
      transition: 'background-color 300ms'
    }}
    src="https://www.zameen.com/assets/mobileAppsBackground.937eb86be98b3bde537276043aa8e3da.png"
    width="100%"
    height="260px"
  />
  <div className="heading-sec d-none d-md-block">
    <h1>Get the Zameen App</h1>
    <h2>Buy and Rent Property faster and <br /> better using our app.</h2>
  </div>
  <div className="download-loaction">
    <a href="">
      <img src={appleplay} alt="" />
    </a>
    <a href="">
      <img src={googleplay} alt="" />
    </a>
    <div className="qr">
      <h4>Scan the QR code to <br /> get the app</h4>
      <img src="./img/qr code.png" alt="" />
    </div>
  </div>
</div>

            </div> 
            </div>
            <div className="banks-promotion-wrapper d-none d-md-block">
  <h1>Our Home Partners</h1>
  <div className="banks-promotion-img-wrapper">
    <div className="banks-promotion">
      <img src={bank} alt="" />
    </div>
    <div className="banks-promotion">
      <img src={bank} alt="" />
    </div>
    <div className="banks-promotion">
      <img src={bank} alt="" />
    </div>
    <div className="banks-promotion">
      <img src={bank} alt="" />
    </div>
    <div className="banks-promotion">
      <img src={bank} alt="" />
    </div>
  </div>
</div>

          </section>

    <Footer/>
    </>
   
  )
}

export default Blog