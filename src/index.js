/*########################################
                    Importaciones
##########################################*/

//  MODULOS
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  ESTILOS
import './index.css';

//  COMPONENTES
// import App from './App';

import NavBar from './components/navbar/NavBar.js'
import Home from './components/home/Home.js'
import AboutUs from './components/aboutUs/AboutUs.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js' 
import Footer from './components/footer/Footer.js'
//  WEBVITALS
import reportWebVitals from './reportWebVitals';


/*########################################
                    Logica
##########################################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<ItemListContainer greeting='Estamos en los productos'/>}/>
        <Route exact path='/product/:productId' element={<ItemDetailContainer/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  









