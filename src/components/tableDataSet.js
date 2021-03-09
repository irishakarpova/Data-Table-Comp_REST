import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortingData } from '../ac';
import { sortedDataTableSelector } from '../selectors';
import './table_ui.css';

TableData.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      Name: PropTypes.string,
      Mass: PropTypes.number,
      Family: PropTypes.string,
      Classification: PropTypes.string,
      Status: PropTypes.string,
      Binomen: PropTypes.string,
    }),
  ).isRequired,
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
    return (
      <th scope="col" key={index}>
        <div className="table-heads">
          {head}
          {head === 'Mass' && (
            <button className="sorting-up-down" onClick={() => sortTable(head, !props.isAsc)}>
              <div className={!props.isAsc ? 'arrow-down' : 'arrow-up'}></div>
            </button>
          )}
        </div>
      </th>
    );
  });

  const tableCells = props.dataset.map((data, index) => {
    const { id, Name, Mass, Family, Classification, Status, Binomen } = data;
    return (
      <tr key={id}>
        <td className="index-column">{index}</td>
        <td className="name-column">{Name}</td>
        <td className="mass-column">{Mass}oz</td>
        <td className="">{Family}</td>
        <td className="">{Binomen}</td>
        <td className="">{Classification}</td>
        <td className="">{Status}</td>
      </tr>
    );
  });

  return (
    <div className="table-responsive">
      <table className="table table-striped bgColor">
        <tr>{tableHeads}</tr>

        <tbody className="bgColorBody">{tableCells}</tbody>
      </table>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      isAsc: state.datasort.isAsc,
      dataset: sortedDataTableSelector(state),
    };
  },
  { sortingData },
)(TableData);
