import { useState, useEffect } from 'react';
import './App.css'
import CoinInfo from "./components/CoinInfo"

const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [list, setList] = useState(null)

  useEffect(() => {
    fetchAllCoinData().catch(console.error)
  }, [])

  const fetchAllCoinData = async () => {
    const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key" 
    + API_KEY
    )
    const json = await response.json()
    setList(json)
  }

  return (
    <div>
      <div className="whole-page">
        <h1>My Crypto List</h1>
            <ul>
                {list &&
                  Object.entries(list.Data)
                    .filter(([_, coinData]) =>
                      coinData.IsTrading &&
                      coinData.Algorithm !== "N/A" &&
                      coinData.ProofType !== "N/A"
                    )
                    .map(([coin, coinData]) => (
                      <CoinInfo
                        image={list.Data[coin].ImageUrl}
                        name={list.Data[coin].FullName}
                        symbol={list.Data[coin].Symbol}
                      />
                    ))}
            </ul>
      </div>
    </div>
  )
}

export default App
