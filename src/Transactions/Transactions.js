import TransactionRow from './TransactionRow';
import './Transactions.css';
import getAllPayments, { getAllPaymentsAxiosVersion, getAllPaymentsRestVersion } from '../Data/DataFunctions';
import { Fragment, useState, useEffect } from 'react';

const Transactions = () => {

    getAllPaymentsAxiosVersion();

    // alternative way but requires use of transaction in TransactionRow e.gb {props.transaction.id}
    //const [payments,setPayments] = useState(getAllPayments);
    //const displayPayments = payments.map((it,idx) => <TransactionRow key={idx} transaction={it} />);

    const [transactions, setTransactions] = useState([]);

    const getTransactionDataFromServer = () => {
        const paymentsPromise = getAllPaymentsAxiosVersion();
        paymentsPromise.then(
            (response) => {
                if (response.status === 200) {
                    setTransactions(response.data);
                } else {
                    console.log("something went wrong", response.status);
                }
            })
            .catch(
                (error) => {
                    console.log("server error", error);
                }
            );
    }

    // empty [] means run code only once
    // if you want to run when a varable changes put var name in brackets [variable]
    useEffect(() => { getTransactionDataFromServer() }, []);

    //const transactions = getAllPayments();
    //get list of all countries
    const allCountries = transactions.map(payments => payments.country);
    // get unique list of countries
    const uniqueCountries = allCountries.filter((country, idx) =>
        allCountries.indexOf(country) === idx);
    // countryoptions
    const countryOptions = uniqueCountries.map(
        country => <option key={country} value={country}>{country}</option>
    );
    //selected country as stateFul variable
    const [selectedCountry, setSelectedCountry] = useState(uniqueCountries[0]);

    // how to debug
    //debugger;

    const displayPayments = transactions.map((it, idx) =>
        (selectedCountry == null || it.country === selectedCountry) &&
        <TransactionRow key={idx} id={it.id} date={it.date} country={it.country}
            currency={it.currency} amount={it.amount} />);

    // handle dropdown country change
    const changeCountry = (event) => {
        setSelectedCountry(uniqueCountries[event.target.options.selectedIndex-1]);
    }

    // Fragment is a non rendering Div
    return <Fragment>

        Select country: <select onChange={changeCountry}>
            <option disabled>All</option>
            {countryOptions}}
        </select>

        <table id="transactionsTable" className="transactionsTable" style={{ background: "#ccc" }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {displayPayments}

            </tbody>
        </table>

        {transactions.length === 0 && <p>Please wait... loading data</p>}
    </Fragment>
}

export default Transactions;