import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeroStatus from './HeroStatus';
import { FaEllipsisH, FaRegComment,  FaRegHeart, FaRegPaperPlane, FaRegBookmark, FaRegSmile} from "react-icons/fa";
import img from '../images/2011_crysis_2_game-1920x1200.jpg';
import imgs from '../images/2011_cowboys_and_aliens-1680x1050.jpg';

function HeroSection() {
      const [photos, setphotos] = useState("");
      
      // let url = "https://jsonplaceholder.typicode.com/photos";

      const getData = () =>{
            const axios = require("axios");

            const options = {
            method: 'GET',
            url: 'https://100-success-instagram-api-scalable-robust.p.rapidapi.com/instagram/v1/users/8576021806/info',
            headers: {
            'X-RapidAPI-Key': 'd3463f858bmshcb7cff154d28b25p1578a1jsn8b47d1c9dbf1',
            'X-RapidAPI-Host': '100-success-instagram-api-scalable-robust.p.rapidapi.com'
            }
            };

            axios.request(options).then(function (response) {
                  console.log(response.data);
            }).catch(function (error) {
                  console.error(error);
            });
      }
      useEffect(() =>{
            getData();
            // axios.get(url).then((res) =>{
            //       console.log(res);
            //       setphotos(res);
            //       }).catch((err) =>{
            //             console.log(err);;
            // })

      }, [])
  return (
   <>
  <div className='col-md-5 col-12 justify-content-end mt-5 pt-md-5 bg-light mt-md-5' style={{zIndex:""}}>
      <HeroStatus/>
      <div className="  bg-white d-grid mt-4  border mb-5">
         <div className="text d-flex border border w-100 h-100 py-3 justify-content-between">
            <div className=" d-flex">
                  <img src={img} class="ms-3 d-block col-3 border rounded-circle" alt="" style={{height:"45px"}}/>
                  <span className="text mx-3 mt-2">Emma</span>
            </div>
            <div className="text me-5 mt-2">
                  <FaEllipsisH/>
            </div>
            </div> 
            <img src={imgs} alt=""  className='w-100 ' style={{height:"100vh"}}/>
            <div className="text container mb-3" style={{height:"20vh"}}>
                        <div className=" mt-3 d-flex justify-content-between">
                              <div className="text">
                                    <FaRegHeart className=" fs-4 me-2"/>
                                    <FaRegComment className=" fs-4 mx-2"/>
                                    <FaRegPaperPlane className=" fs-4 mx-2"/>
                              </div>
                              <div className="text">
                                    <FaRegBookmark className='fs-4 mx-2 '/>
                              </div>
                        </div>
                        <div className="text  mt-3 d-flex">
                              <h5 className='me-1'>59,942 </h5>
                              <span className=''>views</span>
                        </div>
                        <div className="text d-flex">
                              <a href="##" className="text-dark fw-bold nav-link">_mrbeanmemes_</a>
                              <span className="text ms-1">When you're ready to face life 😂... more</span>
                        </div>
                        <div className="text d-grid">
                              <span className="text-secondary fs-5 ">View all 1000 comments</span>
                              <small className="text-secondary h3" style={{fontSize:"11px"}}>12 HOURS AGO</small>
                        </div>
            </div>
            <div className="text border d-flex py-2">
                <div className="text col-11">
                  <FaRegSmile className='col-1'/>
                <input type="text" className="col-5 border-0" style={{outline:"none"}} placeholder='Add a comment...' />
                </div>
                <div className="text"><a href="##" className='nav-link text-primary opacity-50'>Post</a></div>
            </div>
      </div>
    </div>
   </>
  )
}

export default HeroSection