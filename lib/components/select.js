function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../ac';
import { datasetSelector } from '../selectors';
import { selectedArticleSelector } from '../selectors';
import { styles } from './styles.js';

class SelectedFilter extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", selected => {
      this.props.changeSelection(selected);
    });
  }

  get options() {
    return this.props.dataset.map(data => ({
      label: data.Name,
      value: data.id
    }));
  }

  render() {
    const placeholder = "Show All...";
    return /*#__PURE__*/React.createElement("div", {
      className: "select-form-bg"
    }, /*#__PURE__*/React.createElement(Select, {
      options: this.options,
      value: this.props.selected,
      onChange: this.handleChange,
      placeholder: placeholder,
      styles: styles,
      isClearable: true
    }));
  }

}

export default connect(state => ({
  dataset: datasetSelector(state),
  selected: selectedArticleSelector(state)
}), {
  changeSelection
})(SelectedFilter);