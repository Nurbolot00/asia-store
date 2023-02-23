import React from "react";
import styled from "styled-components";
import imageWebp from '../../assets/icons/Icons.webp';
const Footer = () => {
  return (
    <FooterContainer>
      <Box>
        <div>
          <a href="/"><Icon src={imageWebp} alt="icon" /></a>
          <div>
            <NumberFooter>+996 220 011111</NumberFooter>
            <NumberFooter>+996 554 111000</NumberFooter>
            <NumberFooter>+996 502 111100</NumberFooter>
            <Title>
              <TitleP>Пн-Сб с 9:30 до 21:00 </TitleP>
              <TitleGrafic>Вс с 9:30 до 20:00</TitleGrafic>
              <IconContainer>
                <FaseBookIcon
                  src="https://img.icons8.com/sf-regular/256/facebook.png"
                  alt=""
                />
                <InstagramIcon
                  src="https://img.icons8.com/sf-regular/256/instagram-new.png"
                  alt=""
                />
              </IconContainer>
            </Title>
          </div>
        </div>
        <InfoContainer>
          <Info>
            <TitleH5>Информация</TitleH5>
            <p>О магазине</p>
            <p>Контакты</p>
            <p>Товары в кредит</p>
            <p>Trade-in</p>
            <p>Гарантия</p>
            <p>Политика конфиденциальности</p>
            <p>Оферта</p>
            <p>Связаться с нами</p>
          </Info>
          <Info>
            <TitleH5>Каталог</TitleH5>
            <p>iPhone</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>Watch</p>
            <p>AirPods</p>
            <p>Garmin</p>
            <p>Аксессуары</p>
            <p>JBL</p>
            <p>Beats</p>
            <p>Гаджеты</p>
            <p>Яндекс</p>
          </Info>
        </InfoContainer>
      </Box>
      <FooterBox>
        <div>
          <p>Кыргызстан, Бишкек, ЦУМ Айчүрɵк (Чуй проспект, 155)</p>
          <p>Все права защищены © 2023</p>
        </div>
        <AddressContainer>
          <p>ОсОО "Азия Сеть Ритэйл"</p>
          <p>
            Юридический адрес: Кыргызская Республика, г. Бишкек, ул. Московская,
            д. 150
          </p>
        </AddressContainer>
      </FooterBox>
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #303030;
  color: white;
  padding-left: 6rem;
`;
const Icon = styled.img`
  margin: 4rem 0 1.5rem 0;
  width: 300px;
`;
const TitleP = styled.p`
      color: rgb(220, 220, 219);
`;
const NumberFooter = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 800;
  font-family: "SUDisplay", "SF-UI-Text", "Montserrat", sans-serif;
  :hover {
    color: #f9a70e;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  gap: 6rem;
  margin: 4rem 0 0 10rem;
`;
const Title = styled.div`
  margin-top: 2rem;
  font-size: 16px;
  font-family: "SUDisplay", "SF-UI-Text", "Montserrat", sans-serif;
`;
const TitleGrafic = styled.p`
  color: rgb(220, 220, 219);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid grey;
  width: 400px;
  margin-top: 10px;
`;
const InstagramIcon = styled.img`
  width: 60px;
  color: grey;
`;
const FaseBookIcon = styled.img`
  width: 60px;
`;
const Info = styled.div`
  line-height: 30px;
  p {
    color: rgb(220, 220, 219);
    font-size: 12px;
    font-family: "SUDisplay", "SF-UI-Text", "Montserrat", sans-serif;
    :hover {
      color: #ee9b00;
    }
  }
`;
const TitleH5 = styled.h5`
  font-size: 18px;
`;
const IconContainer = styled.div`
  margin-top: 0.7rem;
`;
const Box=styled.div`
    display: flex;
`
const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;
  padding-top: 1.5rem;
  border-top: 1px solid grey;
  padding-bottom: 3rem;
  p {
    font-family: "SUDisplay", "SF-UI-Text", "Montserrat", sans-serif;
    font-size: 13px;
    color: rgb(220, 220, 219);
    line-height: 25px;
  }
`;
const AddressContainer=styled.div`
    p{
        text-align: end;
    }
`