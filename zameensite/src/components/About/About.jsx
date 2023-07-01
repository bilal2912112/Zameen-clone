import React from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import aboutusimg from "./../../asset/aboutusimg2.png"
import aboutus1 from './../../asset/aboutus2.png'
import zameen from "../../asset/zameen_logo.png"
import banner from "../../asset/banner-about.png"

const About = () => {
  return (
  <>
  <Navi/>
 
<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
      <img src={zameen}  alt="" class="img-fluid width-8"/>
        <h1 class="display-4">About Us</h1>
        <p class="lead text-muted mb-0">Zameen.com is Pakistan’s Largest Online Real Estate Portal Connecting Buyers with Sellers within & outside the country

</p>
        <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted"> 
                    <u>Bootstrapious</u></a>
        </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={banner} alt="" class="rounded img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">How did it all start?</h2>
        <p class="font-italic text-muted mb-4">Zameen.com was the brainchild of two British-Pakistani entrepreneur brothers, Zeeshan Ali Khan and Imran Ali Khan. Their mission was to make Pakistani real estate accessible and convenient for everyone. Together, they proceeded to lead Zameen.com from a small start-up to the premier real estate entity of Pakistan.

Zameen.com started its funding first round in 2012 which constituted of several angel investors and substantial investment from venture capital firms. A further two rounds of major investment were closed in late 2015 and early 2016, bringing in a total of $29 million.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={aboutus1} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="row">
    <div class="col-8">
    <h5 class="card-title">Exclusive Marketing by Zameen.com</h5>
        <p class="card-text">The team uses a 360-degree marketing strategy, covering all aspects of the projects, and helps buyers on every step of the way, with guaranteed transparency.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="col">
    <img src={aboutusimg} alt="" class="img-fluid"/>
    </div>
  
  </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="row">
    <div class="col-8">
    <h5 class="card-title">What Do We Do?
</h5>
        <p class="card-text">Zameen.com connects buyers with sellers and tenants with landlords for highly user-friendly real estate experience. The extensive listings and projects on offer provide something for everyone when it comes to property.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="col">
    <img src={aboutusimg} alt="" class="img-fluid"/>
    </div>
  
  </div>
       
      </div>
    </div>
  </div>
</div>

   
  
  </div>
</div>
<div class="container mt-5">
<div class="row">
  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="row">
    <div class="col-8">
    <h5 class="card-title">Exclusive Marketing by Zameen.com</h5>
        <p class="card-text">The team uses a 360-degree marketing strategy, covering all aspects of the projects, and helps buyers on every step of the way, with guaranteed transparency.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="col">
    <img src={aboutusimg} alt="" class="img-fluid"/>
    </div>
  
  </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="row">
    <div class="col-8">
    <h5 class="card-title">What Do We Do?
</h5>
        <p class="card-text">Zameen.com connects buyers with sellers and tenants with landlords for highly user-friendly real estate experience. The extensive listings and projects on offer provide something for everyone when it comes to property.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="col">
    <img src={aboutusimg} alt="" class="img-fluid"/>
    </div>
  
  </div>
       
      </div>
    </div>
  </div>
</div>

   
  
  </div>
</div>
 {/* <div className="row d-flex justify-content-center">
<section
      className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
      style={{
        backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp)',
      }}
    >
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body ">
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-start align-items-center mb-4 mb-lg-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    className=" img-fluid shadow-1"
                    alt="woman avatar"
                 
                  />
                </div>
                <div className="col-lg-8">
                  <p className="text-muted fw-light mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                    molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti
                    magnam.
                  </p>
                  <p className="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                  <p className="fw-bold text-muted mb-0">Product manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
     */}
<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

    <div class="row text-center">
      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


    </div>
  </div>
</div>



  <Footer/>
  </>
  )
}

export default About