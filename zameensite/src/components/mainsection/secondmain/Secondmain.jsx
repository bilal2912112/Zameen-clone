import React from 'react'
import newproject from './../../../asset/newproject.svg'
import home from './../../../asset/homeloan.svg'
import areaguide from './../../../asset/areaguide.svg'
import plotfinder from './../../../asset/plotfinder.svg'
import propertyindex from './../../../asset/propertyindex.svg'
import areaunit from './../../../asset/areaunit.svg'
import landrecord from './../../../asset/landrecord.svg'
import propertytrend from './../../../asset/propertytrends.svg'
const Secondmain = () => {
  return (
    <>
     <div class="container">
            <div class="explore-sec">
              <div class="row">
                <h4 class="pt-5">Explore more on Zameen</h4>
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
            
    </>
  )
}

export default Secondmain