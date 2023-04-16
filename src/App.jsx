import { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"

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
    <>
    <h1>Lista de Criptomonedas</h1>
    <ol>
    { 
      criptos.map(({id, name, priceUsd}) => (
        <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
      )) 
    }
    </ol>
    </>
  )
}

export default App