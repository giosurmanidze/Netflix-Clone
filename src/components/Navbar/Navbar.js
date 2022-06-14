import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 100 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        className="logo"
        alt="logo"
      />
      <img
        src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg"
        className="emojy"
        alt="smile-emojy"
      />
    </div>
  );
};

export default Navbar;
