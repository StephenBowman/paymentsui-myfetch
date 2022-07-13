import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';
import NewTransactions from './NewTransactions/NewTransactions';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <FindATransaction />
      <NewTransactions />
    </div>
  );
}

export default App;
