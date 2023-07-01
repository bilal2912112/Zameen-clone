import React from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import "./../component.module.css"
import property1 from "./../../asset/property-1.jpg"
import propertyback from "./../../asset/propertyback.svg"
import service1 from "./../../asset/projects/services/service-1.jpg"
import service2 from "./../../asset/projects/services/service-2.jpg"
import service3 from "./../../asset/projects/services/service-3.jpg"
import service4 from "./../../asset/projects/services/service-4.jpg"
import service5 from "./../../asset/projects/services/service-5.jpg"
import service6 from "./../../asset/projects/services/service-6.jpg"
import "./property.css"
import Fifthmain from '../mainsection/fifthmain/Fifthmain'
const Property = () => {
  return (
    <>
    <Navi/>
   
    <section class="carousel-img-wrapper ">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={propertyback} class="d-block img-fluid w-100 " alt="..."/>
                  <div class="overlay"></div>
                  <div class="carousel-caption d-none d-md-block">
                  <div className="container1">
      <form>
        <div className="wrapper">
        
          <div className="search-container">
            <input type="text" className="search" placeholder="Location" />
            <input type="text" className="date-from" placeholder="Check In > Check Out" />
            <input type="text" className="date-to" placeholder="Number of people" />
            <button type="submit" className="button">Search</button>
          </div>
        </div>
      </form>
    </div>
                  </div>
                </div>
                </div>
              </div>
            
        </section>
        <div id="services">
  <div class="container">
    <div class="section-title">
      <h2>Our Services</h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="service-media"> <img src={service1} alt=" "/> </div>
        <div class="service-desc">
          <h3>New Home Construction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service2}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Home Additions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service3}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Bathroom Remodels</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="service-media"> <img src={service4}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Kitchen Remodels</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service5}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Windows & Doors</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="service-media"> <img src={service6}  alt=" "/> </div>
        <div class="service-desc">
          <h3>Decks & Porches</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<Fifthmain/>
    <Footer/>
    </>
  )
}

export default Property