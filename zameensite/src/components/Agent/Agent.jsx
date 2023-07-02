import React from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import mapback from "./../../asset/agent_Banner.png"
import titanium1 from './../../asset/titanium1.jpg'
import titanium2 from './../../asset/titanium2.jpg'
import titanium3 from './../../asset/titanium3.jpg'
import titanium4 from './../../asset/titanium4.jpg'
import titanium5 from './../../asset/titanium5.jpg'
import titanium6 from './../../asset/titanium6.jpg'
import titanium7 from './../../asset/titanium7.jpg'
import Forthmain from '../mainsection/forth/Forthmain'
import Fifthmain from '../mainsection/fifthmain/Fifthmain'
const Agent = () => {
  return (
    <>
    <Navi/>

    <div class="container2">
    <br/>
	<div class="row justify-content-center " style={{backgroundImage:`url(${mapback}`}}>
                        <div class="col-12 col-md-10 col-lg-8 m-5">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>
                                    
                                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>City</option>
                                <option>Lahore</option>
                                <option>Karachi</option>
                                <option>Islamabad</option>
                                <option>Rawalpindi</option>
                                <option>Faisalabad</option>
                                <option>Peshawar</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Society</option>
                                <option>DHA</option>
                                <option>Bahria</option>
                                <option>Wapda Town</option>
                              
                            </select>
                        </div>
                                    
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        
                    </div>
</div>

<div class="container">
            <div class="titanium-agencies-sec">
              <div class="row">
                <h4 class="pt-5 pb-2">Titanium Agencies</h4>
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium1} class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Lahore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium2} class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Askari Service</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Sahiwal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium3} class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Multan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium4} class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Bahawalpur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div> 
              <div class="row">
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium5} class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Sheikhupura</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium6}  class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Askari Service</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Sahiwal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium7}  class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Lahore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card mb-3 border-0" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={titanium2}  class="img-fluid rounded-start border-0" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-0 px-2">
                          <h5 class="card-title fs-medium">Euro Estate</h5>
                          <p class="card-text fs-smaller"><i class="bi bi-geo-alt"> </i>Nankana</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div> 
          </div>
          <Forthmain/>
          <Fifthmain/>
    <Footer/>
    </>
  )
}

export default Agent