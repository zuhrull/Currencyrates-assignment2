import React, {useEffect, useState} from "react";
import axios from "axios";
import TableSymbol from "./TableSymbol";
import TableRate from "./TableRate";
import TableBuy from "./TableBuy";
import TableSell from "./TableSell";

const App = () => {

  const [ratesList, setRatesList] = useState([]);
  const [sellList, setSellList] = useState([]);
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    getRates();
  }, [])

  const getRates = async () => {
    const res = await axios.get(
      `https://api.currencyfreaks.com/latest?apikey=e781ebace9674a049d776aad75661454&symbols=CAD,EUR,IDR,JPY,CHF,GBP`
    )
    const {rates} = res.data

    const ratesTemp = [];
    const sellTemp = [];
    const buyTemp = [];
    

    for (const [symbol,rate] of Object.entries(rates)) {
      ratesTemp.push({symbol, rate});
      const numberRate = parseFloat(rate)
      sellTemp.push(numberRate - 0.05 * numberRate);
      buyTemp.push(numberRate + 0.05 * numberRate)
    }
    setRatesList(ratesTemp);
    setSellList(sellTemp);
    setBuyList(buyTemp);
    
  }

  
  return (
    <div className="main">
        <table>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
          <tr>
          <td><TableSymbol ratesList={ratesList} /></td>
          <td><TableBuy buyList={buyList} /></td>
          <td><TableRate ratesList={ratesList} /></td>
          <td><TableSell sellList={sellList} /></td>
          </tr>
        </table>
        <p>Rates are based from 1 USD</p>
        <p>This application uses API from <a href="https://currencyfreaks.com" target="_blank" rel="noopener noreferrer">https://currencyfreaks.com.</a></p>
    </div>
  )
}

export default App;