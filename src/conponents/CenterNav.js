import React from 'react'
import img from '../images/IMG_20210924_132226.jpg';
import imgs from '../images/2011_crysis_2_game-1920x1200.jpg'

function CenterNav() {
  return (
    <div className='position-fixed col-5'>
      <div className="text bg-light d-none d-md-grid  pe-3 col-8 ">
                  {/* contained Users */}
            <div className="text col-12 d-flex my-4">
                  <div className="text  col-2 pt-1">
                        <img src={img} alt="" className=' rounded-circle border' style={{height:"80px", width:"80px"}} />
                  </div>
                  <div className="text  col-6 ms-3 ps-2 d-grid">
                        <span className="text pt-3 fw-bold">@Ultreck</span>
                        <span className="text pb-3"> Emmanuel Oluwatayese</span>
                  </div>
                  <div className="text mt-4 ps-5 ms-3">
                  <a href="##" className="text-primary nav-link" >Switch</a>
                  </div>
            </div>
            {/* Contained Suggestions */}
            <div className="text d-grid">
                  <div className="text d-flex justify-content-between">
                        <div className='text'>Suggestion For You</div>
                        <div className='mx-2'>See All</div>
                  </div>
                  {/* Each suggestions */}
                  <div className="text mt-3 d-flex justify-content-between " style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4 ">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
                  <div className="text d-flex justify-content-between"  style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
                  <div className="text d-flex justify-content-between"  style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4 ">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
                  <div className="text d-flex justify-content-between" style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4 ">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
                  <div className="text d-flex justify-content-between"  style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4 ">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
                  <div className="text d-flex justify-content-between" style={{fontSize:"12px"}}>
                        <div className="text d-flex">
                              <div className="text">
                              <img src={imgs} alt="" className=' rounded-circle border' style={{height:"40px", width:"40px"}} />
                              </div>
                              <div className="text d-grid ms-3">
                                    <span className="text fw-bold">olabisi.ray</span>
                                    <span className="text-secondary pb-4 ">Followed by adebayo.bay</span>
                              </div>
                        </div>
                        <div className="text mt-3">
                              <a href="##" className="text nav-link text-primary mx-2">Follow</a>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default CenterNav