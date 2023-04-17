import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const CriptoPage = () => {
    
    const params = useParams()
    
    const API_URL = import.meta.env.VITE_API_URL
    const [criptoInfo, setCriptoInfo] = useState({})
    const [historial, setHistorial] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then((data) => {
            setCriptoInfo(data.data.data)
        .catch(e => console.error(e))
    })
  }, [])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then((data) => {
            setHistorial(data.data.data)
        .catch(e => console.error(e))
})
}, [])

    return (
        <>
        <h1>Soy la criptomoneda {params.id}</h1>
        <div className="info">
            <ul>
            <li><span className="label">Nombre: </span> {criptoInfo.name}</li>
            <li><span className="label">Simbolo: </span> {criptoInfo.symbol}</li>
            <li><span className="label">Rango: </span> {criptoInfo.rank}</li>
            <li><span className="label">Cantidad: </span> {criptoInfo.supply}</li>
            </ul>
        </div>
        <h2>Historial</h2>
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    historial.map(({ date, priceUsd, time }) => (
                        <tr key={time}>
                            <td>{date}</td>
                            <td>{priceUsd}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}

export default CriptoPage