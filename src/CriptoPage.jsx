import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./CriptoPage.css"

const CriptoPage = () => {
    
    const params = useParams()
    
    const API_URL = import.meta.env.VITE_API_URL
    const [criptoInfo, setCriptoInfo] = useState({})
    const [historial, setHistorial] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then((data) => {
            setCriptoInfo(data.data.data)
        })
        .catch(e => console.error(e))

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then((data) => {
            setHistorial(data.data.data)
        })
        .catch(e => console.error(e))
        }, [])

    return (
    <div className="cripto-page-container">
        <div className="info">
            <div className="main-info">
                <span>Ranking: {criptoInfo.rank}</span>
                <h1>{criptoInfo.name}</h1>
                <span className="symbol">{criptoInfo.symbol}</span>
            </div>
        </div>
        <div className="details">
            <ul>
                <li className="detail">
                    <span className="label">Precio: </span>
                    <span>{criptoInfo.priceUsd}</span> 
                </li>
                <li className="detail">
                    <span className="label">Cantidad Maxima: </span> 
                    <span>{criptoInfo.maxSupply}</span>
                </li>
                <li className="detail">
                    <span className="label">Market Cap: </span> 
                    <span>{criptoInfo.marketCapUsd}</span>
                </li>
                <li className="detail">
                    <span className="label">Volumen: </span> 
                    <span>{criptoInfo.volumeUsd24Hr}</span>
                </li>
                <li className="detail">
                    <span className="label">Vwap 24 Hrs.: </span> 
                    <span>{criptoInfo.vwap24Hr}</span>
                </li>
            </ul>
        </div>
        <div className="history">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.reverse().map(({ date, priceUsd, time }) => (
                        <tr key={time}>
                            <td className="label">{new Date(date).toDateString()}</td>
                            <td className="price">{priceUsd}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div> 
    )
    }

export default CriptoPage