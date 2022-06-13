import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import stockData from './components/stock-data'


function App(props) {
  return (
    <div>
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;
