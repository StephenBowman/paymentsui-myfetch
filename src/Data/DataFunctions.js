import axios from "axios";

const getAllPayments = () => {
    return [
        { id: 101, amount: 160, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216652", tax_code: 0, tax_rate: 0, type: "SALE" },
        { id: 102, amount: 200, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216653", tax_code: 7, tax_rate: 0.21, type: "SALE" },
        { id: 103, amount: -100, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216654", tax_code: 19, tax_rate: 0.25, type: "Refund" },
        { id: 104, amount: 60, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216655", tax_code: 0, tax_rate: 0, type: "SALE" },
        { id: 105, amount: 130, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216656", tax_code: 0, tax_rate: 0, type: "SALE" },
        { id: 106, amount: 230, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216657", tax_code: 7, tax_rate: 0.21, type: "SALE" },
        { id: 107, amount: -30, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216658", tax_code: 19, tax_rate: 0.25, type: "Refund" },
        { id: 108, amount: 90, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216659", tax_code: 0, tax_rate: 0, type: "SALE" },
        { id: 109, amount: 210, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216660", tax_code: 0, tax_rate: 0, type: "SALE" },
        { id: 110, amount: 110, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216661", tax_code: 7, tax_rate: 0.21, type: "SALE" },
        { id: 111, amount: -150, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216662", tax_code: 19, tax_rate: 0.25, type: "Refund" },
        { id: 112, amount: 650, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216663", tax_code: 0, tax_rate: 0, type: "SALE" }
    ]
}

export const getAllPaymentsRestVersion = () => {
    // standard JSON rest header
    const headers = new Headers({ 'Accept': 'application/json' });

    // GET http://localhost:8080/api/payment
    // fetch is asyncronis
    const paymentsPromise = fetch("http://localhost:8080/api/payment", {
        method: "GET",
        headers: headers
    });

    return paymentsPromise;
}

export const getAllPaymentsAxiosVersion = () => {

    // GET http://localhost:8080/api/payment
    // fetch is asyncronis
    const paymentsPromise = axios({url :"http://localhost:8080/api/payment", 
        method: "GET", headers: { 'Accept': 'application/json' }
    });

    return paymentsPromise;
}

// REST Request example
export const getAllPaymentsRestExample = () => {
    // standard JSON rest header
    const headers = new Headers({ 'Accept': 'application/json' });

    // GET http://localhost:8080/api/payment
    // fetch is asyncronis
    const paymentsPromise = fetch("http://localhost:8080/api/payment", {
        method: "GET",
        headers: headers
    });

    // then function is executed when we get a response from the service
    // catch will run if server error
    paymentsPromise.then(
        (response) => {
            if (response.ok) {
                const dataPromise = response.json();
                dataPromise.then(data => {
                    console.log(dataPromise);
                });
            } else {
                console.log("something went wrong - the server responded with",
                    response.statusText);
            }
            //console.log(response);
        }
    )
        .catch(
            (error) => {
                console.log("Something went wrong", error);
            }
        );

    //console.log(paymentsPromise);
}

export default getAllPayments;