import React from 'react';
import TableData from './components/tableDataSet';
import Header from './components/header';
import './BootWrap.scss';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="bootwrap">
        <div className="container-fluid p-0">
          <Header />
          <TableData />
        </div>
      </div>
    </Provider>
  );
}

export default App;
