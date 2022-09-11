import React from "react";

const TableSymbol = props => (
  <div>
    <table>
      {props.ratesList.map((r) => (
        <tr>
          {r.symbol}
        </tr>   
      ))}
    </table>
  </div>
)

export default TableSymbol;