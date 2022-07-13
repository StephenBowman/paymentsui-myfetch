import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';
import NewTransactions from './NewTransactions/NewTransactions';
import { useState } from 'react';

function App() {

  const[selectedPage, setSelectedPage] = useState("find");

  // pass setSelectedPage down to PageHeader
  return (
    <div className="App">
      <PageHeader setSelectedPage={setSelectedPage}/>
      {selectedPage === "find" && <FindATransaction />}
      {selectedPage === "new" && <NewTransactions />}
    </div>
  );
}

export default App;
