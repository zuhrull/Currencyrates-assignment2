import React from "react";

const TableBuy = props => (
  <div>
    <table>
      {props.buyList.map((r) => (
        <tr>
          {(r).toFixed(4)}
        </tr>   
      ))}
    </table>
  </div>
)

export default TableBuy;