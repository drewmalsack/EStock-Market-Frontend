export const getAllStocksbyTime = (code, start, end) => {
    return fetch(
      `http://localhost:8090/api/v1.0/market/stock/get/${code}/${start}/${end}`
    ).then((res) => res.json());
  };
  export const getLatestStockPrice = (code) => {
    return fetch(
      `http://localhost:8090/api/v1.0/market/stock/getlatest/${code}`
    ).then((res) => res.json());
  };