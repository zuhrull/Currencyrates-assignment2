import React from "react";

const TableSell = props => (
  <div>
    <table>
      {props.sellList.map((r) => (
        <tr>
          {(r).toFixed(4)}
        </tr>   
      ))}
    </table>
  </div>
)

export default TableSell;