import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY

function CoinDetail() {
    const { symbol } = useParams()
    const [fullDetails, setFullDetails] = useState({})

    useEffect(() => {
        const getCoinDetail = async () => {
            const details = await fetch(
                `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${API_KEY}`
            )
            const description = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&api_key=${API_KEY}`
            )

            const detailsJson = await details.json()
            const descripJson = await description.json()

            setFullDetails({
                numbers: detailsJson.DISPLAY,
                textData: descripJson.Data
            })
        }

        getCoinDetail().catch(console.error)
    }, [symbol])

    if (!fullDetails.textData) return <div>Loading...</div>

    return (
        <div className="coin-detail-container">
            <h1>{fullDetails.textData[symbol].FullName}</h1>
            <img
                className="images"
                src={`https://www.cryptocompare.com${
                    fullDetails.numbers[symbol].USD.IMAGEURL
                }`}
                alt={`Small icon for ${symbol} crypto coin`}
            />
            <div className="description"> 
                {fullDetails.textData[symbol].Description}
            </div>
            <br></br>
            <div style = {{ color: "#B0B0B0" }}>
                This coin was built with the algorithm{" "}
                <a style={{ fontWeight: "bold" }}>{fullDetails.textData[symbol].Algorithm}{" "}</a>
            </div>
            <table>
                <tbody> 
                    <tr>
                        <th>Launch Date </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Website </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Whitepaper </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Monetary Symbol </th>
                        <td>{fullDetails.numbers[symbol].USD.FROMSYMBOL}</td>
                    </tr>
                    <tr>
                        <th>Market </th>
                        <td>{fullDetails.numbers[symbol].USD.MARKET}</td>
                    </tr>
                    <tr>
                        <th>Last Transaction </th>
                        <td>{fullDetails.numbers[symbol].USD.LASTUPDATE}</td>
                    </tr>
                    <tr>
                        <th>Last Transaction Value</th>
                        <td>{fullDetails.numbers[symbol].USD.LASTVOLUMETO} {fullDetails.numbers[symbol].USD.LASTVOLUME}</td>
                    </tr>
                    <tr>
                        <th>Volume </th>
                        <td>{fullDetails.numbers[symbol].USD.VOLUME24HOURTO}</td>
                    </tr>
                    <tr>
                        <th>Today's Open Price </th>
                        <td>{fullDetails.numbers[symbol].USD.OPENDAY}</td>
                    </tr>
                    <tr>
                        <th>Highest Price during the Day </th>
                        <td>{fullDetails.numbers[symbol].USD.HIGHDAY}</td>
                    </tr>
                    <tr>
                        <th>Lowest Price during the Day </th>
                        <td>{fullDetails.numbers[symbol].USD.LOWDAY}</td>
                    </tr>
                    <tr>
                        <th>Change from Previous Day </th>
                        <td>{fullDetails.numbers[symbol].USD.CHANGEDAY}</td>
                    </tr>
                    <tr>
                        <th>Market Cap </th>
                        <td>{fullDetails.numbers[symbol].USD.MKTCAP}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CoinDetail