import React from 'react';
import SelectedFilter from './select';
import './header.css';
export default (() => {
  return /*#__PURE__*/React.createElement("div", {
    className: "head-for-table col-md-12 col-12 d-flex flex-column flex-sm-row p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "select-form col-md-4 col-sm-6 col-12 p-0"
  }, /*#__PURE__*/React.createElement(SelectedFilter, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-5 p-0 d-flex align-items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-srtipe"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3 col-12 d-flex align-items-end p-0"
  }, /*#__PURE__*/React.createElement("h1", null, "Parrots")));
});