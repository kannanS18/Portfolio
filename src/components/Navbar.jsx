import React, { useEffect, useState } from 'react';
// import{HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo (2).png'; 
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  useEffect(()=>{ 
    if(window.location.hash){
      setTimeout(() => {
        const el =document.getElementById(window.location.hash.substring(1));
        const y=el.getBoundingClientRect().top+window.pageXOffset-100
        window.scrollTo({top:y,behavior:"smooth"})
      }, 300);
    }
  },[]);

  return (
    <nav className={`navbar${scrolled ? ' navbar-shrink' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={handleClose} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Kannan Logo" style={{ height: '38px', marginRight: '10px' }} />
          <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1abc1a', letterSpacing: '2px' }}>KANNAN</span>
        </Link>
      </div>
      <div className={`navbar-burger${open ? ' open' : ''}`} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`navbar-links${open ? ' active' : ''}`}>
        <li>
          <Link to="/" onClick={handleClose}>Home</Link>
        </li>
        <li>
          <a href="/#about" onClick={handleClose}>About Me</a>
        </li>
        <li>
          <a href="/#services" onClick={handleClose}>Services</a>
        </li>
        <li>
          <Link to="/about" onClick={handleClose}>Projects</Link>
        </li>
         <li>
          <Link to="/contact" onClick={handleClose}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;