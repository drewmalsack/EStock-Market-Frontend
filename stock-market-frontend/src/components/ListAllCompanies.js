import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

import { getAllCompanies } from '../api/companyAPI';
import CompanyDetail from './CompanyDetail';

function ListAllCompanies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function get() {
      const data = await getAllCompanies();
      setCompanies(data);
      //.catch((error) => {console.log(error); setCompany()});
    }
    get();
  }, []);

  return (
    <Container className="mt-5">
      {companies.length>0
      ?
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
          <th>Company Code</th>
          <th>Company Name</th>
          <th>Latest Stock Price</th>
          </tr>
        </thead>
        <tbody>
        {companies.map((company) => (
            
               <CompanyDetail key={company.id} company={company}/>
            
          ))}
        </tbody>
      </Table>
      :
      <div>Was not able to pull companies or no companies exist</div>
      }
    </Container>
  )
}

export default ListAllCompanies