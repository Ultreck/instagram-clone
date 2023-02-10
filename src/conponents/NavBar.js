import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/instagram.png';
import user from '../images/IMG_20210924_132226.jpg'
import { FaHome, FaRegHeart, FaRegPlusSquare, FaCompass, FaRegPaperPlane , FaSearch} from "react-icons/fa";
function NavBar() {
  return (
    <>
    <div className="tex">
      <nav className="navbar navbar-light bg-white border-bottom position-fixed w-100" style={{height: "60px"}}>
              <div className="container-fluid d-flex d-md-flex justify-content-center">
                  <a className="navbar-brand ms-md-5  col-3 text-center " href="##"><img src={img} alt=""  className='col-11 col-md-4 '/></a>
                  <div className="text py-1 me-3  bg-light rounded  px-3 d-none d-md-flex col-3 shadow-sm">
                        <FaSearch className='mt-2'/>
                  <input type="search" className=" border-0 bg-light rounded " placeholder='Search' style={{outline: "none"}} />
                  </div>
                  <div className=' col-7 text-center col-md-4'>
                       <Link to="/"><FaHome className='fs-md-4 fs-3 mx-md-3 mx-2 text-dark'/></Link>
                        <Link to="/collection"><FaRegPaperPlane className='fs-md-4 fs-3 mx-2 mx-md-3 text-dark'/></Link>
                       <Link to="/addcontent"><FaRegPlusSquare className='rounded mx-2  fs-md-4 fs-3  mx-md-3 text-dark'/></Link>
                       <Link to="compass"><FaCompass className='text-white bg-dark mx-2 rounded-circle fs-md-4 fs-3 border border-2 border-dark mx-md-3'/></Link>
                       <Link to="activities"><FaRegHeart className='fs-md-4 fs-3 mx-md-3 mx-2 text-dark'/></Link>
                       <img src={user} alt=""  className=' rounded-circle ms-2' style={{height:"35px", width:"35px"}}/>
                  </div>
              </div>
          </nav>
    </div>
    </>
  )
}

export default NavBar