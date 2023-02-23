import React from 'react'
import styled from 'styled-components'

function Main() {
  return (
    <ContainerMain>
      <ImgWrapper>
        <StyledImg src='https://www.pngall.com/wp-content/uploads/11/Apple-Logo-PNG-Background.png' />
        <h3>Authorised
            <br /> Reseller</h3>
      </ImgWrapper>
      <InfoWrapper>
        <h3>
          Asia Store – Первый официальный авторизованный партнёр компании Apple
          в Кыргызстане со статусом Apple Authorised Reseller.
        </h3>
        <p>
          В нашем магазине можно не только купить iPhone, компьютер Mac или
          планшет iPad, а также другую технику Apple и аксессуары для неё. Asia
          Store – это место, в котором вам помогут с выбором техники, научат ей
          пользоваться, дадут советы по эксплуатации ваших гаджетов и предложат
          качественные аксессуары.
        </p>
        <p>
          Наш магазин является единственным авторизованным реселлером Apple и
          Garmin в Кыргызстане, а также официальным дистрибьютором JBL & Harman
          Kardon и умных устройств от Yandex.
        </p>
      </InfoWrapper>
    </ContainerMain>
  );
}
export default Main
const ContainerMain = styled.div`
  background-color: rgb(246, 246, 246);
  padding-top: 3rem;
  display: flex;
  font-family: "SUDisplay", "SF-UI-Text", "Montserrat", sans-serif;
`;
const ImgWrapper=styled.div`
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InfoWrapper=styled.div`
    text-align:start;
    margin-right: 100px;
    padding-bottom: 3rem;
    p{
        line-height: 20px;
        font-weight: 400;
    }
    h3{
        font-size: 1.3rem;
        font-weight: 700;
    }
`
const StyledImg=styled.img`
    width: 5rem;
    height: 5rem;
`