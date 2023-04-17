//Librerias
import React from 'react'
import ReactDOM from 'react-dom/client'
//Componentes
import App from './App'
import Home from './home'
import Pagina404 from './404'
import App1 from './App1'
import CriptoPage from './CriptoPage'
//Css
import "./main.css"
import "./App1.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App1 />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptomonedas' element={<App1 />}>
                <Route index element={<App/>}/>
                <Route path=':id' element={<CriptoPage/>} />
            </Route>
          <Route path='*' element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)
