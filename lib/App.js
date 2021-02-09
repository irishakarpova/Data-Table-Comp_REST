import React from 'react';
import TableData from './components/tableDataSet';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid p-0"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(TableData, null));
}

export default App;