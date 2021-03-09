import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../ac';
import { datasetSelector } from '../selectors';
import { selectedArticleSelector } from '../selectors';
import { styles } from './styles.js';

class SelectedFilter extends Component {
  handleChange = (selected) => {
    this.props.changeSelection(selected);
  };

  get options() {
    return this.props.dataset.map((data) => ({
      label: data.Name,
      value: data.id,
    }));
  }

  render() {
    const placeholder = 'Show All...';
    return (
      <div className="select-form-bg">
        <Select
          options={this.options}
          value={this.props.selected}
          onChange={this.handleChange}
          placeholder={placeholder}
          styles={styles}
          isClearable
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    dataset: datasetSelector(state),
    selected: selectedArticleSelector(state),
  }),
  { changeSelection },
)(SelectedFilter);
