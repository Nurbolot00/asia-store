import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// import MenuPopupState from "./MenuPopupState";


const Navbar = () => {
  return (
    <NavbarContainer>
      <AziyaStore>
        <StyledUl>
          <Dropdown>
          <NavLink to='/products'
                style={({isActive}) => ({
                    color: isActive ? 'orange' : 'white;',
                    textDecoration: 'none'
                    })} >Iphones</NavLink>
            <DropdownContent>
              <Link  to={`/products/${1}/iphone`} style={{color: 'black'}}>IPHONE 14 PRO MAX</Link>
              <Link  to={`/products/${2}/iphone`} style={{color: 'black'}}>IPHONE 14 PRO </Link>
              <Link  to={`/products/${3}/iphone`} style={{color: 'black'}}>IPHONE 14 </Link>
              <Link  to={`/products/${4}/iphone`} style={{color: 'black'}}>IPHONE 13 PRO MAX</Link>
              <Link  to={`/products/${5}/iphone`} style={{color: 'black'}}>IPHONE 13 PRO </Link>
              <Link  to={`/products/${6}/iphone`} style={{color: 'black'}}>IPHONE 13</Link>
            </DropdownContent>
          </Dropdown>
          <UlStylee>Mac</UlStylee>
          <UlStylee>iPad</UlStylee>
          <UlStylee>Watch</UlStylee>
          <UlStylee>AirPods</UlStylee>
          <UlStylee>Garmin</UlStylee>
          <UlStylee>Аксессуары</UlStylee>
          <UlStylee>JBL</UlStylee>
          <UlStylee>Beats</UlStylee>
          <UlStylee>Гаджеты</UlStylee>
        </StyledUl>
        <div>
        <a href="/"><ImageStyle
          src="https://asiastore.kg/image/catalog/logos2.webp"
          alt="images"
        /></a>
        </div>
      </AziyaStore>
      </NavbarContainer>
  );
};

export default Navbar;



const NavbarContainer = styled.div`
  padding: 2rem;
  background-color: #231f20;
  margin-bottom: 2rem;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* padding: 12px 16px; */
  z-index: 1;
 a{
  display: block;
  :hover{
    background-color: #e7e3e3;
  }
 }
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;

  a{
    color: white;
  }
    
  }
`;

const AziyaStore = styled.div`
  width: 100%;
  height: 70px;
  background-color: #231f20;
`;
const ImageStyle = styled.img`
  margin-right: 70%;
  justify-content: start;

  height: 60px;
  margin-top: -60px;
`;
const StyledUl = styled.ul`
  margin-top: 150px;
  display: flex;

  font-size: 13px;
  color: #888888;
  list-style: none;
  justify-content: end;
  /* gap: 40px; */
  margin-right: 20px;
  margin-top: -10px;
  line-height: 50px;
`;
const UlStylee = styled.li`
  margin-left: 2rem;
  font-size: 16px;
  align-items: center;
justify-content: center;
  &:hover {
    color: #ef7f1a;
    cursor: pointer;
  }
`;
