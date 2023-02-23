import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <form>
      <div>
        {" "}
        <HeaderStyle>Умные устройства Яндекса</HeaderStyle>
      </div>
      <div>
        <LiStyle>
          <UlStyle>О магазине</UlStyle>
          <UlStyle>Контакты</UlStyle>
          <UlStyle>Товары в кредит</UlStyle>
          <UlStyle>Trade-in</UlStyle>
          <UlStyle>Гарантия</UlStyle>
          <UlStyle>Акция</UlStyle>
          <UlStyle>Новости</UlStyle>
         {/* <Style>| Пн-Сб с 9:30 до 21:00. Вс с 9:30 до 20:00|</Style> */}
        </LiStyle>
      </div>
    </form>
  );
};

export default Header;
const HeaderStyle = styled.h2`
  justify-content: center;
  text-align: center;
  background-color: #9b21fe;
  color: white;
  font-size: 25px;
  margin: 0 0 0 0;
  width: 100%;
  height: 50px;

  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

const UlStyle = styled.li`
  width: 100%;
  height: 50px;
  &:hover {
    color: #ef7f1a;
    cursor: pointer;
  }
`;
const LiStyle = styled.ul`
display: flex;

justify-content: center;
font-size: 13px;
 color: #888888;
  list-style: none;
`;