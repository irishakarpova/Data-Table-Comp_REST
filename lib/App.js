import React from 'react';
import TableData from './components/tableDataSet';
import Header from './components/header';
import './BootWrap.scss';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement("div", {
    className: "bootwrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid p-0"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(TableData, null))));
}

export default App;