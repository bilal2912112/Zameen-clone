import React,{useState} from 'react'
import Navi from '../navigationBar/Navi'
import Footer from '../footer/Footer'
import carasoul from './../../asset/maincarousel.webp'
import Secondmain from '../mainsection/secondmain/Secondmain'
import Thirdmain from '../mainsection/thirdmain/Thirdmain'
import Forthmain from '../mainsection/forth/Forthmain'
import Fifthmain from '../mainsection/fifthmain/Fifthmain'
import { CiLocationOn} from "react-icons/ci";
import { BsBuildings} from "react-icons/bs";

import {AiOutlineHome} from 'react-icons/ai'
import Coresec1 from './Coresec1'
import Coresec2 from './Corsec2'
import Coresec3 from './Corsec3'
import Coresec4 from './Corsec4'
import Coresec5 from './Corsec5'
import Coresec6 from './Corsec6'
import Coresec7 from './Corsec7'
import Coresec8 from './Corsec8'
import Coresec9 from './Corsec9'


const Rent = () => {
    const [active,setActive]=useState("FirstCard")
    const [active1,setActive1]=useState("ForthCard")
    const [active2,setActive2]=useState("SeventhCard")
  return (
    <>
    <Navi/>
 
    <section class="carousel-img-wrapper ">
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img src={carasoul} class="d-block img-fluid w-100 " alt="..."/>
                   <div class="overlay"></div>
                   <div class="carousel-caption d-none d-md-block">
                     <h4>Search properties to rent in Pakistan</h4>
                     <button type="button" class="btn btn-md w-25 border bg-light mx-2 mt-3">BUY</button>
                     <button type="button" class="btn btn-md w-25 border mx-2 text-light fw-bold mt-3">RENT</button>
                     <button type="button" class="btn btn-md w-25 border mx-2 text-light fw-bold mt-3">PROJECTS</button>
                     <div class="search-engine-wrapper">
                       <ul class=" d-flex mt-4 p-0">
                         <li class="pb-0"><input class="p-2" type="search" placeholder="City"/></li>
                         <li class="pb-0"><input class="p-2" type="text" placeholder="Location"/></li>
                         <button class="bg-success pb-0">FIND</button>
                       </ul>
                       <ul class="d-flex p-0 m-0 pb-2">
                         <li class="p-0 fs " ><a class="text-white border-end px-2" href="">More options</a></li>
                         <li class="p-0 fs"><a class="border-end px-2" href="">Change Currency</a></li>
                         <li class="p-0 fs"><a class="border-end px-2" href="">Change Area Unit</a></li>
                         <li class="py-0 px-1 fs"><a class="" href="">Reset search</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 </div>
               </div>
             
         </section>
         <div className='container my-5'>
            <h3 className='font-weight-bold'>Browse Properties</h3>
         <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      
        <a  class="card-title fw-bold text-dark pe-4 h4"><i class=" pe-3 text-success"><AiOutlineHome/></i>Homes</a>
        <div class="col me-2">
      <div className='shadow-sm p-4'> <button className='btn btn-outline-success mx-2 ' onClick={()=>setActive("FirstCard")}>Popular</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive("SecondCard")}>Type</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive("ThirdCard")}>Area Size</button>
      </div>
      <div>
        {active==="FirstCard"&&<Coresec1  cardIndex={0}/>}
        {active==="SecondCard"&&<Coresec2  cardIndex={1}/>}
        {active==="ThirdCard"&&<Coresec3  cardIndex={2}/>}
        
       
      </div>
    

    </div>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      
        <a  class="card-title fw-bold text-dark pe-4 h4"><i class=" pe-3 text-success"><CiLocationOn/></i>Plots</a>
        <div class="col me-2">
      <div className='shadow-sm p-4'> <button className='btn btn-outline-success mx-2 ' onClick={()=>setActive1("ForthCard")}>Popular</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive1("FifthCard")}>Type</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive1("SixthCard")}>Area Size</button>
      </div>
      <div>
        {active1==="ForthCard"&&<Coresec4  cardIndex={3}/>}
        {active1==="FifthCard"&&<Coresec5  cardIndex={4}/>}
        {active1==="SixthCard"&&<Coresec6  cardIndex={5}/>}
        
       
      </div>
    

    </div>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      
        <a  class="card-title fw-bold text-dark pe-4 h4"><i class=" pe-3 text-success"><BsBuildings/></i>Commercial</a>
        <div class="col me-2">
      <div className='shadow-sm p-4'> <button className='btn btn-outline-success mx-2 ' onClick={()=>setActive2("SeventhCard")}>Popular</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive2("EightCard")}>Type</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive2("NineCard")}>Area Size</button>
      </div>
      <div>
        {active2==="SeventhCard"&&<Coresec7  cardIndex={6}/>}
        {active2==="EightCard"&&<Coresec8  cardIndex={7}/>}
        {active2==="NineCard"&&<Coresec9  cardIndex={8}/>}
        
       
      </div>
    

    </div>
        
      </div>
    </div>
  </div>
</div>
</div>
         <Secondmain/>
         <Thirdmain/>
         <Forthmain/>
         <Fifthmain/>
    <Footer/>
    </>
  )
}

export default Rent