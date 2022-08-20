import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import PropTypes from "prop-types";

import Stock from '../entities/stock';

StockPrices.propTypes = {
  stocks: PropTypes.arrayOf(Stock)
};

function StockPrices(props) {

  const [index, setIndex] = useState(1);

  let currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  let max=0;
  let min=999999;
  let avg=0;

  useEffect(() => {
  }, [index])
  const Calc = () => {
    for(let i=0;i<props.stocks.length;i++){
      avg+=props.stocks[i].stockPrice;
      if(props.stocks[i].stockPrice>max){
        max =props.stocks[i].stockPrice;
      }
      if(props.stocks[i].stockPrice<min){
        min =props.stocks[i].stockPrice;
      }
    }
    avg=avg/props.stocks.length;
  }

  const handleIndex = (addSub) => {
    if(addSub === 1 && ((index+1)*10)-10<props.stocks.length){
      setIndex(index+1);
    }else if(addSub === 1 && ((index+1)*10)-10>props.stocks.length){
      alert("Reached end of stocks.");
    }else if(addSub === 0 && (index-1)>0){
      setIndex(index-1);
    }else{
      alert("Reached beginning of stocks.");
    }
  }
  

  return (
    <Container fluid>
      <Row>
        <Col xs={2}></Col>
        <Col xs={9}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Stock Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {props.stocks.slice((index-1)*10, index*10).map((stock) => (
              <tr key={stock.id}>
                <td>{currencyFormatter.format(stock.stockPrice)}</td>
                <td>{stock.priceTimestamp.substring(0,10)}</td>
                <td>{stock.priceTimestamp.substring(11,19)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2}></Col>
        <Col><Button onClick={() => handleIndex(0)}>Prev 10</Button><Button className="ms-2" onClick={() => handleIndex(1)}>Next 10</Button></Col>
      </Row>
      <Row>
        <Col xs={2}></Col>
        <Col xs={2}>
            <Table striped bordered hover className="text-center">
              <tbody>
                <tr>
                  <td>MAX</td>
                </tr>
                <tr>
                  <td>MIN</td>
                </tr>
                <tr>
                  <td>AVG</td>
                </tr>
              </tbody>
            </Table>
        </Col>
        <Col xs={2}>
            <Table striped bordered hover className="text-center">
              {Calc()}
              <tbody>
                <tr>
                  <td>{currencyFormatter.format(max)}</td>
                </tr>
                <tr>
                  <td>{currencyFormatter.format(min)}</td>
                </tr>
                <tr>
                  <td>{currencyFormatter.format(avg)}</td>
                </tr>
              </tbody>
            </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default StockPrices