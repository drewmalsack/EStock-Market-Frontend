export const sendCompany = (company) => {
    return fetch(`http://localhost:8090/api/v1.0/market/company/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(company),
  }).then((res) => res.json());
};

export const getCompanyByCode = (code) => {
    return fetch(`http://localhost:8090/api/v1.0/market/company/info/${code}`).then(
      (res) => res.json()
    );
  };

export const getAllCompanies = () => {
    return fetch(
        `http://localhost:8090/api/v1.0/market/company/getall`
      ).then((res) => res.json());
}