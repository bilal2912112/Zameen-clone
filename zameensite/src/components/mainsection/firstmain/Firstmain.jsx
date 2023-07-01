import React from 'react'
import carasoul from './../../../asset/maincarousel.webp'
const Firstmain = () => {
  return (
    <>
      <section class="carousel-img-wrapper ">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={carasoul} class="d-block img-fluid w-100 " alt="..."/>
                  <div class="overlay"></div>
                  <div class="carousel-caption d-none d-md-block">
                    <h4>Search properties for sale in Pakistan</h4>
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

    </>
  )
}

export default Firstmain