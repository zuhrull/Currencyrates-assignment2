import React from "react";

const TableRate = props => (
  <div>
    <table>
      {props.ratesList.map((r) => (
        <tr>
          {r.rate}
        </tr>   
      ))}
    </table>
  </div>
)

export default TableRate;