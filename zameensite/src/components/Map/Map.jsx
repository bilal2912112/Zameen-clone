import React,{useState} from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import "./map.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from "./../../asset/project1.jpg"
import project2 from "./../../asset/project2.jpg"
import project3 from "./../../asset/project3.jpg"
import mapback from "./../../asset/propertyback.svg"
import Carousel from 'react-bootstrap/Carousel';
import { BsGraphUp ,BsMegaphone,BsChatRightText} from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import {BsHouseDoor,BsBezier2} from "react-icons/bs"
import Fifthmain from "./../mainsection/fifthmain/Fifthmain"
const Map = () => {
    const [showMore, setShowMore] = useState(false);
    const text="Zameen.com plays a significant role in the real estate sector of Pakistan, as being the country’s top property portal. Here at Zameen, we always cater to the needs of builders, investors, and buyers by providing enhanced digital services and new features to add to the convenience of the end-user. Zameen Maps, another special feature, provides real estate maps of Pakistan to property enthusiasts, always looking for lucrative opportunities, across the world. The section comprises premium quality maps of various societies from around the country. The section not only allows you to examine the approved master plans of societies but also helps you locate any property unit within a specific society. Rest assured, the maps shown in this section are of high quality, and allow an interactive interface for better usability. To make it easy for you to use, the Zameen Maps categories map by cities, thus enabling you to conveniently find the location of societies in the city of your choice. So, whether you are looking for Karachi Map, Lahore Map, Islamabad Map or even Pakistan City Map, Zameen Maps has got you covered. Other than that, it also comprises maps of Rawalpindi, Multan, Sheikhupura, Peshawar, Gujranwala, Faisalabad, Kasur, Sargodha, and Thatta. However, plans are in place to make more additions in future to enhance its utility. Furthermore, the ‘Most Viewed Maps’ section of Zameen Maps displays societies that are located in the main cities of Lahore, Karachi, and Islamabad. The feature allows buyers to search for more popular areas including Bahria Town Karachi map, Seerab Gulberg map, Street View of Karachi, DHA Phase 9 Prism map, and DHA Lahore map — to name a few. It even helps you in comprehending which areas are popular among prospective investors. We regularly update the approved maps of different projects in Pakistan, and upload newer versions as soon as they become available. Whenever we upload a new map of a society, the Maps Section displays them under the ‘New Society Maps’ tab. The feature assists users in understanding the maps of societies uploaded recently. The maps shown in the section are not just simple scanned images of society maps but are the outcome of the processing of soft copies by using a special software. Following this step, the maps are uploaded with plot numbers visibly clear. Navigational options are also integrated to make your experience easy and convenient. You can easily zoom in and out of the maps or pan right, left, up or down by clicking the relevant buttons displayed at the bottom of the panel. Moreover, a cursor can be used to pan across the map as well."
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

<div class="container">
            <div class="explore-sec">
              <div class="row">
                <h4 class="pt-5">About Zameen Maps</h4>
                <h6>
  {showMore ? text : `${text.substring(0, 250)}`}
  <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
</h6>

                </div>
              </div> 
            </div> 

            
<Fifthmain/>
   <Footer/>

   
   </>
  )
}

export default Map