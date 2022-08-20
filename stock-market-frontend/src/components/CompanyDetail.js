import React, { useState, useEffect } from 'react'

import { getLatestStockPrice } from '../api/stockAPI';

function CompanyDetail(props) {

    const [latestPrice, setLatestPrice] = useState();

    useEffect(() => {
        async function get() {
          const data2 = await getLatestStockPrice(props.company.companyCode);
              setLatestPrice(data2);
          //.catch((error) => {console.log(error); setCompany()});
        }
        get();
      }, [props.company.companyCode]);

  return (
    <tr>
        <td>{props.company.companyCode}</td>
        <td>{props.company.companyName}</td>
        <td>{latestPrice ? "$"+latestPrice.stockPrice : "Could not fetch stock price"}</td>
    </tr>
  )
}

export default CompanyDetail