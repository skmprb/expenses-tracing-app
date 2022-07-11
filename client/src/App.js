import React from 'react';
import Header from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransation';
import { GlobalProvider } from './context/GlobalState';
import Charts from './components/charts';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        {/* <PLCharts /> */}
      </div>

      <div className='container1'>
        <TransactionList />
        <Charts />
      </div>
    </GlobalProvider>
  );
}

export default App;
