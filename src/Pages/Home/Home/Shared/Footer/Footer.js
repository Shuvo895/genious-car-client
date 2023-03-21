import React from 'react';
import logo from '../../../../../assets/logo.svg';
const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
  <div>
    <img src={logo} alt=""></img>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href="link link-hover">Branding</a> 
    <a href="link link-hover">Design</a> 
    <a href="link link-hover">Marketing</a> 
    <a href="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href="link link-hover">About us</a> 
    <a href="link link-hover">Contact</a> 
    <a href="link link-hover">Jobs</a> 
    <a href="link link-hover">Press kit</a>
  </div> 
  <div>
    <span href="footer-title">Legal</span> 
    <a href="link link-hover">Terms of use</a> 
    <a href="link link-hover">Privacy policy</a> 
    <a href="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;