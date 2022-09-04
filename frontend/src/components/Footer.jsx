import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import logo from './../assets/Untitled.png'

export const Footer = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
            <img
              alt="logo"
              src={logo}
              width="300px"
              onClick={goToTop}
              className="logo-footer-img"
            />
        </CDBBox>
        <CDBBox>
          <h5 style={{
            color:'#81ecec'
          }} className="ml-2">&copy; Mohammad Mancy, 2022. All rights reserved.</h5>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2 background-color-transparent">
          <a href='https://www.facebook.com/mohammad.mancy.33'>
                <CDBIcon fab icon="facebook-f" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2 background-color-transparent">
            <a href='https://twitter.com/mancy_mohammad'>
                <CDBIcon fab icon="twitter" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2 background-color-transparent">
            <a href='https://www.instagram.com/mohammad.mancy.33/'>
                <CDBIcon fab icon="instagram" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2 background-color-transparent">
            <a href='https://www.linkedin.com/in/mohammad-mancy-75b591227/'>
                <CDBIcon fab icon="linkedin" />
            </a>
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};