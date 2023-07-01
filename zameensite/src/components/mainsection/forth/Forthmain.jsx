import React from 'react'
import { BsGraphUp ,BsMegaphone,BsChatRightText} from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import {BsHouseDoor,BsBezier2} from "react-icons/bs"

import project1 from './../../../asset/project1.jpg'
import project2 from './../../../asset/project2.jpg'
import project3 from './../../../asset/project3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import social1 from './../../../asset/social1.jpg'

import social2 from './../../../asset/social2.jpg'

import social3 from './../../../asset/social3.jpg'
const Forthmain = () => {
  return (
  <>
   
          <div class="container border-radius bg-light-blue">
            <div class="zameen-projects">
              <ul class="d-flex">
              <li>
      <h4 className="pt-4">
        Zameen Projects{' '}
        <span
          style={{
            borderRadius: '18px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            padding: '4px 12px',
            marginLeft: '26px',
          }}
        >
          <i>
            <BsGraphUp />
          </i>{' '}
          Trending
        </span>
      </h4>
    </li>                <li><a href="">View All</a> <i ><AiOutlineRight/></i></li>
              </ul>
              <Carousel>
              <Carousel.Item>
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project1} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project2} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project3} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
              </div> 
              </Carousel.Item>
              <Carousel.Item>
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project1} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project2} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project3} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
              </div> 
              </Carousel.Item>
              <Carousel.Item>
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project1} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project2} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3 mt-4 border-0">
                    <img src={project3} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                      <h5 class="card-title fs-6">PKR1.03 Crore to 7.42 Crore <br/>
                        MOUNTAIN VILLAGE NARAN, Naran</h5>
                      <p class="card-text bg-grey">Naran, Saiful Muluk Road</p>
                      <p class="card-text mb-1"><small class="text-black fw-bold "><i ><BsHouseDoor/></i> Houses, Flats</small></p>
                      <p class="card-text"><small class="text-black fw-bold"><i ><BsBezier2/></i> 570sqft to 1490sqft</small></p>
                    </div>
                  </div>
                </div>
              </div> 
              </Carousel.Item>
              </Carousel>
            </div> 
          </div>

          <section class="zameen-social">
            <div class="container">
              <h4 class="pt-5">Zameen Community</h4>
              <div class="announcement d-flex">
                <ul class="d-flex">
                  <li><a href="" class="fw-bold text-dark pe-4"><i class=" pe-3 text-success"><BsMegaphone/></i>News</a></li>
                  <li><a href="" class="ps-5 pe-5">View All <i ><AiOutlineRight/></i></a></li>
                  <li><a href="" class="ps-4 fw-bold text-dark ps-3"><i class=" text-success"><BsChatRightText/></i> Blogs</a></li>
                </ul>
                <ul class="d-flex">
                  <li><a href="" class="ps-5 pe-5">View All <i ><AiOutlineRight/></i></a></li>
                  <li><a href="" class="fw-bold text-dark pe-4"><i class=" text-success"><BsChatRightText/></i>  Forums</a></li>
                  <li><a href="" class="ps-5 pe-0">View All <i ><AiOutlineRight/></i></a></li>
                </ul>
              </div> 
              <Carousel>
              <Carousel.Item>
              <div class="row pt-3">
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social2}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social3}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
              </div> 
             
              </Carousel.Item>
              <Carousel.Item>
              <div class="row pt-3">
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social2}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social3}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
              </div> 
             
              </Carousel.Item>
              <Carousel.Item>
              <div class="row pt-3">
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social2}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social1} class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card border-0" >
                    <img src={social3}  class="card-img-top border-radius" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">These Wholesale Markets in Karachi Keep the Metropolis...</p>
                    </div>
                  </div>
                </div>
              </div> 
             
              </Carousel.Item>
              </Carousel>
            </div> 
          </section>
  </>
  )
}

export default Forthmain