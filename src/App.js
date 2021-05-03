import React from 'react';
import TableData from './components/tableDataSet';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid p-0">
        <Header />
        <TableData />
      </div>
    </Provider>
  );
}

export default App;
