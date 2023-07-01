import React from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import backgroundImage from "../../asset/contactBanner.png"
import { AiOutlinePhone,AiOutlineClockCircle} from "react-icons/ai";
import { CiLocationOn} from "react-icons/ci";
import newproject from './../../asset/newproject.svg'
import home from './../../asset/homeloan.svg'
import areaguide from './../../asset/areaguide.svg'
import plotfinder from './../../asset/plotfinder.svg'
import propertyindex from './../../asset/propertyindex.svg'
import areaunit from './../../asset/areaunit.svg'
import landrecord from './../../asset/landrecord.svg'
import propertytrend from './../../asset/propertytrends.svg'
import chatcontact from './../../asset/chatcontact.png'
import Fifth from './../mainsection/fifthmain/Fifthmain'
const Contact = () => {
  const styles = {
    backgroundImage:  `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  
  };
  const listStyle = {
    listStyle: 'none',

  };

  return (
    <>
    <Navi/>

    <div className="contactMain " style={styles}>
    <div class="container ">
  <div class="row">
    <div class="col my-5">
      <h1 className='fw-bold'>Let's Talk About Everything!</h1>
      <p className='my-3 bg-grey'>Hello there! If you'd like to ask us something, you can get in touch with us here! We'd love to address any and all concerns you may have.</p>
      <h4 className='fw-bold'>Head Office</h4>
      <ul style={listStyle} className='my-5 bg-grey'>
       
        <li className='my-3'><i class=" pe-3 text-success "><CiLocationOn/></i> Pearl One, 94-B/I, MM Alam Road, Gulberg III, Lahore, Pakistan</li>
        <li className='my-3'><i class=" pe-3 text-success"><AiOutlinePhone/></i>0800 Zameen (92633)</li>
        <li className='my-3'><i class=" pe-3 text-success"><AiOutlineClockCircle/></i>Monday To Friday (9AM-6PM)
</li>
        </ul>
    </div>
    <div class="pl-5 col-sm-12 mb-4 col-md-5 w-10 mt-5">
    <div className="card border-primary rounded-2">
      <div className="card-header p-0">
        <div className="bg-success text-white text-center py-2">
          <h3><i className="fa fa-envelope"></i> Write to us:</h3>
          <p className="m-0">We’ll write rarely, but only the best content.</p>
        </div>
      </div>
      <div className="card-body p-3">
        <div className="form-group">
          <label className='my-2'>Your name</label>
          <div className="input-group">
            <input value="" type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" />
          </div>
        </div>
        <div className="form-group">
          <label  className='my-2'>Your email</label>
          <div className="input-group mb-2 mb-sm-0">
            <input type="email" value="" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label  className='my-2'>Subject</label>
          <div className="input-group mb-2 mb-sm-0">
            <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
          </div>
        </div>
        <div className="form-group">
          <label  className='my-2'>Message</label>
          <div className="input-group mb-2 mb-sm-0">
            <input type="text" className="form-control" name="mesg" />
          </div>
        </div>
        <div className="text-center my-4  ">
        <button type="button" class="btn btn-lg btn-success" >Primary button</button>

        </div>
      </div>
    </div>
    </div>
  </div>
 
</div>
    </div>
    <div class="container my-5">
            <div class="explore-sec">
              <div class="row">
                <h4 class="pt-5 fw-bold">Explore more on Zameen</h4>
                <div class="col-md-3">
                  <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={newproject} class="img-fluid rounded-start bg-orange" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title mb-0 fs-medium">New <br/> Projects</h5>
                            <p class="card-text bg-grey fs-smaller">The best investment opertunities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={home} class="img-fluid rounded-start bg-rgba-green" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Home Loan <br/> Calculator</h5>
                            <p class="card-text bg-grey fs-smaller">Find affordable loan packages</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={areaguide} class="img-fluid rounded-start bg-rgba-pink" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Area <br/> Guides</h5>
                            <p class="card-text bg-grey fs-smaller">Explore housing society in pakistan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> 
                <div class="col-md-3">
                  <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={plotfinder} class="img-fluid rounded-start bg-rgba-green" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Plot <br/> Finder</h5>
                            <p class="card-text bg-grey fs-smaller">Find plots in any housing society</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3 ">
                 <a href="">
                  <div class="row mt-3">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={propertyindex} class="img-fluid rounded-start bg-rgba-purple" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Property <br/>Index</h5>
                            <p class="card-text bg-grey fs-smaller">Track changes in real <br/> estate prices</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                 </a>
                 
                  </div> 
                  <div class="col-md-3">
                   <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <img src={areaunit} class="img-fluid rounded-start bg-rgba-skyblue" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Area Unit <br/> Converter</h5>
                            <p class="card-text bg-grey fs-smaller">Convert any unit area instantly</p>
                          </div>
                        </div>
                      </div>
                    </div>
                   </a>
                  </div>
                  <div class="col-md-3">
                   <a href="">
                    <div class="card mb-3 border-0 mt-4">
                      <div class="row ps-3">
                        <div class="col-md-4">
                          <img src={landrecord}class="img-fluid rounded-start bg-rgba-blue" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-0">
                            <h5 class="card-title  mb-0 fs-medium">Land Record <br/> Pages</h5>
                            <p class="card-text bg-grey fs-smaller">Find out ownership details of any property</p>
                          </div>
                        </div>
                      </div>
                    </div>
                   </a>
                  </div>
                  <div class="col-md-3">
                    <a href="">
                      <div class="card mb-3 border-0 mt-4">
                        <div class="row ps-3">
                          <div class="col-md-4">
                            <img src={propertytrend} class="img-fluid rounded-start bg-rgba-purple" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body p-0">
                              <h5 class="card-title mb-0 fs-medium">Property<br/>Trends</h5>
                              <p class="card-text bg-grey fs-smaller">Find popular areas to buy property</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div> 
                </div>
              </div> 
            </div> 
            <div class="container bg-light-blue ">
            <div class="explore-sec">
            <div class="container">
  <div class="row">
    <div class="col my-5">
    <h4 className='fw-bold '>Need extra help? Chat With Our Agent!</h4>
    <p className='bg-grey'>Zameen.com offers an official integration with Zendesk to help you navigate our system in a better,
more meaningful way. If you're looking to utilise our Zendesk solution, you're only one click away!</p>
<button type="button" class="btn btn-success">Get Started</button>
    </div>
    <div class="col">
    <img src={chatcontact} class="w-50  pl-5" alt="..."/>
    </div>
  </div>
  
</div>
              </div> 
            </div> 
            <Fifth/>

    <Footer/>
  </>
  )
}

export default Contact