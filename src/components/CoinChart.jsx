import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from "recharts";

const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinChart = ({ symbol, market }) => {
    const [histData, setHistData] = useState(null)

    useEffect(() => {
        const getCoinHist = async () => {
            const response = await fetch(
            `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&e=${market}&limit=30&api_key=` +
                API_KEY
            )

            const json = await response.json()
            setHistData(json.Data.Data)
        }
        getCoinHist().catch(console.error)
    }, [market, symbol])

    const cleanData = (data) => {
        let filteredData = []
        let countDays = 0
        for (const item of data) {
            let accurateDay = new Date()
            accurateDay.setDate(accurateDay.getDate() - countDays)

            filteredData.push({
            'time': accurateDay.toLocaleDateString("en-US"), 
            'open price': item.open,
            })
            countDays++
        }

        // data is given counting backwards, so return the reverse to have data ordered from oldest to newest for accurate plotting
        return filteredData.reverse()    
    }

      return (
        <div>
            {histData ? (// rendering only if API call actually returned us data
                <div className="coin-chart-container">
                    <br></br>
                    <h2>30-Day Price Data for {symbol}</h2>

                    <LineChart
                        width={1300}
                        height={400}
                        data={cleanData(histData)}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 30,
                        }}
                    >
                    <Line
                        type="monotone"
                        dataKey="open price"
                        stroke="#8884d8"
                        activeDot={{ r: 5 }}
                    />
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="time" interval={2} angle={20} dy={5}>
                        <Label value="Date and Time" offset={0} position="insideBottom" dy={50}/>
                    </XAxis>

                    <YAxis
                        label={{
                        value: "Price",
                        angle: -90,
                        position: "insideLeft",
                        textAnchor: "middle",
                        dx: -18
                        }}
                    />
                    <Tooltip
                        contentStyle={{ 
                            backgroundColor: '#333333',
                            borderRadius: '10px',
                            border: '1px solid #555'
                        }}
                        itemStyle={{ color: '' }}
                        labelStyle={{ color: '#ffffff', fontWeight: 'bold' }} />
                    </LineChart>
                </div>
            ) : null}
        </div>
    )
}

export default CoinChart