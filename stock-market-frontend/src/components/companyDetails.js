import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { getCompanyByCode } from '../api/companyAPI';
import { getAllStocksbyTime, getLatestStockPrice } from '../api/stockAPI';
import StockPrices from './StockPrices';

function CompanyDetails() {

    const location = useLocation();
    const [company, setCompany] = useState();
    const [code, setCode] = useState(location.state.search)
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [stocks, setStocks] = useState([]);
    const [latestPrice, setLatestPrice] = useState();
    

    useEffect(() => {
        async function get() {
          const data = await getCompanyByCode(code);
          setCompany(data);
          const data2 = await getLatestStockPrice(code);
          setLatestPrice(data2);
          //.catch((error) => {console.log(error); setCompany()});
        }
        get();
      }, [code]);

      async function getStocks() {
        const data = await getAllStocksbyTime(code, startDate, endDate);
        setStocks(data);
      }

  return (
    <Container fluid className="mt-5">
        {console.log(company)}
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Company Code" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : company.companyCode : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Company Name" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : company.companyName : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Company CEO" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : company.companyCEO : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Company Turnover" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : "$"+company.companyTurnover : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Company website" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : company.companyWebsite : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mb-2">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Stock Exchange" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={company ? company.status ? "No company with that code" : company.stockExchange : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row>
            <Col xs={2}></Col>
            <Col xs={3}><Form.Control type="text" className="text-center" placeholder="Latest Stock Price" disabled /></Col>
            <Col xs={5}><Form.Control type="text" className="text-center" placeholder={latestPrice ? latestPrice.status ? "No company with that code" : "$"+latestPrice.stockPrice : "No company with that code"} disabled /></Col>
            <Col xs={2}></Col>
        </Row>
        <Row className="mt-5">
            <h3 className="text-center">Search stock prices</h3>
        </Row>
        <Row className="mt-3 mb-5">
            <Col xs={2}></Col>
            <Col xs={3}><Form.Label>Search From</Form.Label></Col>
            <Col xs={4} className="d-flex align-items-end"><Form.Control type="datetime-local" className="text-center me-3" onChange={(event) => {setStartDate(event.target.value);}} /><Form.Label>To</Form.Label><Form.Control type="datetime-local" className="text-center ms-3" onChange={(event) => {setEndDate(event.target.value);}} /></Col>
            <Col xs={1}><Button onClick={() => getStocks()}>Search</Button></Col>
        </Row>
        
        {
            stocks.length>0
            ?
            (
                <StockPrices stocks={stocks} />
            )
            :
            <div></div>
        }

    </Container>
  )
}

export default CompanyDetails