import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const getCoinPrice = async () => {
            try {
                const response = await fetch(
                    `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
                        API_KEY,
                    { signal: controller.signal }
                )
                const json = await response.json()
                setPrice(json)
            } catch (error) {
                if (error.name === "AbortError") {
                    // It's ok, don't do anything
                } else {
                    console.error(error)
                }
            }
        }

        getCoinPrice()
        return () => controller.abort()
    }, [symbol])

    return (
        <li className="main-list" key={symbol}>
            <Link
                to={`/coinDetails/${symbol}`}
                key={symbol}
                className="linked-coin-info"
            >
                <div className="coin-identity">
                    <img
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    {name}
                </div>
                <span>
                    {price && price.USD ? ` $${price.USD} USD` : null}
                </span>
            </Link>
        </li>
    )

}

export default CoinInfo