import { useEffect, useState } from 'react'
import axios from "axios"
import "./App1.css"
import Cripto from "./Cripto"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    //Cuando se usa fetch se sobreentiende que es GET
    //Tengo dos formas de traer info de una API a continuacion
    //Con axios obtenemos un objeto y podemos hacer mas que GET
    //Con axios obtenemos tambien el status del pedido
    //Con fetch solo hacemos GET
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
      
    /*
    fetch(`${API_URL}assets`)
    .then((resp) => resp.json())
    .then((data) => {
      setCriptos(data.data)
    })
    .catch(() => {
      console.error("La peticion fallo")
    */
    })
  }, [])

if (!criptos) return <span>Cargando...</span>

  return (
    <div className='main-container'>
    <h1>Lista de Criptomonedas</h1>
    <div className='cripto-container'>
    { 
      criptos.map(({id, name, priceUsd, symbol,changePercent24Hr}) => (
        <Cripto key={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} id={id} />
      ))
    }
    </div>
    </div>
  )
}

export default App