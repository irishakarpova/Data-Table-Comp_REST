import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortingData } from '../ac';
import { sortedDataTableSelector } from '../selectors';
import './table_ui.css';
TableData.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    Name: PropTypes.string,
    Mass: PropTypes.number,
    Family: PropTypes.string,
    Classification: PropTypes.string,
    Status: PropTypes.string,
    Binomen: PropTypes.string
  })).isRequired
};

function TableData(props) {
  function sortTable(head, isAsc) {
    props.sortingData(head, isAsc);
  }

  const heads = ['#'];

  for (let i in props.dataset[0]) {
    i !== 'id' && heads.push(i);
  }

  const tableHeads = heads.map((head, index) => {
    return /*#__PURE__*/React.createElement("th", {
      scope: "col",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "table-heads"
    }, head, head === 'Mass' && /*#__PURE__*/React.createElement("button", {
      className: "sorting-up-down",
      onClick: () => sortTable(head, !props.isAsc)
    }, /*#__PURE__*/React.createElement("div", {
      className: !props.isAsc ? 'arrow-down' : 'arrow-up'
    }))));
  });
  const tableCells = props.dataset.map((data, index) => {
    const {
      id,
      Name,
      Mass,
      Family,
      Classification,
      Status,
      Binomen
    } = data;
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, /*#__PURE__*/React.createElement("td", {
      className: "index-column"
    }, index), /*#__PURE__*/React.createElement("td", {
      className: "name-column"
    }, Name), /*#__PURE__*/React.createElement("td", {
      className: "mass-column"
    }, Mass, "oz"), /*#__PURE__*/React.createElement("td", {
      className: ""
    }, Family), /*#__PURE__*/React.createElement("td", {
      className: ""
    }, Binomen), /*#__PURE__*/React.createElement("td", {
      className: ""
    }, Classification), /*#__PURE__*/React.createElement("td", {
      className: ""
    }, Status));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-striped bgColor"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, tableHeads)), /*#__PURE__*/React.createElement("tbody", {
    className: "bgColorBody"
  }, tableCells)));
}

export default connect(state => {
  return {
    isAsc: state.datasort.isAsc,
    dataset: sortedDataTableSelector(state)
  };
}, {
  sortingData
})(TableData);