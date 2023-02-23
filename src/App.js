import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import MainPage from './pages/MainPage';
import IphonesPage from './pages/IphonesPage';
import IphoneItemPage from './pages/IphoneItemPage';
import styled from 'styled-components';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';


export const initialState = [
  {
    id: 1,
    phoneName: "Iphone 14 Pro Max",
    article: 'Артикул: MQC93RU/A',
    price: 124990,
    img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Max_Deep_Purple_phonewall?$ProductBase$",
    description: "Линейка Pro рассчитана на тех, кто покупает самые последние флагманы по максимальной цене. Модель поменьше рассчитана на тех, кто в меньшей степени смотрит фильмы, потребляет контент. Pro Max для тех, кто, фигурально говоря, живет с устройством. Разница в размерах обуславливает совершенно разное восприятие этих устройств, несмотря на то, что внутри они де-факто одинаковы (различаются время работы и емкость батареи). Компактный 14 Pro и очень большой 14 Pro Max.",
  },
  {
    id: 2,
    phoneName: "Iphone 14 Pro",
    article: 'Артикул: MQ0H3RU/A',
    price: 113990,
    img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$",
    description: "Apple iPhone 14 Pro получился компактным смартфоном, учитывая тот факт, что большинство смартфонов имеют диагональ более 6.5 дюймов. Его нельзя назвать легким, хоть внутри и находится не очень большая батарея. Причина большого веса для таких размеров заключается в рамке вокруг дисплея, сделанной из нержавеющей стали, которая заметно тяжелее, чем алюминий. С обеих сторон он также защищен достаточно прочным стеклом.",
  },
  {
    id: 3, 
    phoneName: "Iphone 14",
    article: 'Артикул: MPVQ3RU/A',
    price: 79990,
    img: 'https://pngimg.com/uploads/iphone_14/small/iphone_14_PNG41.png',
    description: "Новый Айфон 14, получил немного новых фишек. Наверное, самой главной станет обновление iOS 16, на которой будет работать новинка. Поэтому девайс довольно разочаровывающий и смысла обновляться с iPhone 13 вообще нет.",
  },
  {
    id: 4,
    phoneName: "Iphone 13 Pro Max",
    article: 'Артикул: MND63RK/A',
    price: 114990,
    img: "https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png",
    description: "Apple iPhone 13 Pro Max защищен прочным стеклом Ceramic Shield с обеих сторон, которое имеет приятное олеофобное покрытие – палец без усилий скользит по поверхности. Его недостатком является большой вес в 240 грамм по той причине, что рамка выполнена из нержавеющей стали, поэтому смартфон значительно тяжелее других моделей этой серии. Вырез в верхней части дисплея заметно уменьшился, но все равно он больше, чем у конкурентов.",
  },
  {
    id: 5,
    phoneName: "Iphone 13 Pro",
    article: 'Артикул: MLWE3RM/A',
    price: 96990,
    img: "https://cdn.shopify.com/s/files/1/0079/5602/products/iPhone_13_Pro_Max_Graphite_Pure_Back_iPhone_13_Pro_Max_Graphite_Pure_Front_2-up_Screen__USEN_1024x1024.jpg?v=1635981266",
    description: "iPhone 13 Pro оборудован достаточно большой батареей, которая обеспечивает минимум день автономной работы, ну а если играть и много фотографировать, то получится выжать около 7-8 часов без подзарядки. Скорость зарядки не впечатляет, ведь до 100% смартфон заряжается за 1 час и 38 минут. Большинство современных флагманов пополняют свой заряд более чем в 2 раза быстрее.",
  },
  {
    id: 6,
    phoneName: "Iphone 13",
    article: 'Артикул: MLP13RM/A',
    price: 69990,
    img: "https://d2xamzlzrdbdbn.cloudfront.net/products/be07ec4f-c214-497f-930f-24be44406ccb21170555.jpg",
    description: "Но походив с iPhone 13 и iPhone 13 mini  это очень и очень интересное решение. Вы просто получаете всю мощь iPhone 13 в компактном корпусе. Подробнее про iPhone 13 mini я расскажу в отдельном обзоре. Но возможность получить мощность и крутые камеры в компактном форм-факторе — это интересно.",
  },
];

function AppContent() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
     <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/products" element={<IphonesPage/>}/>
      <Route path="/products/:id/iphone" element={<IphoneItemPage initialState={initialState}/>} />
     </Routes>

     <a href='https://www.whatsapp.com/?lang=ru'><WhatsAppImage alt='whatsapp' src='https://pbs.twimg.com/profile_images/1318652224638124032/wrpp2Nl4_400x400.png'/></a>
     <Footer/>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <HashRouter>
      <AppContent/>
      </HashRouter>
    </div>
  );
};

export default App;


const WhatsAppImage = styled.img`
position: fixed;
bottom: 2rem;
right: 4rem;
width: 70px;
border-radius: 50%;
`
