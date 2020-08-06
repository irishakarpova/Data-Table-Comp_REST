<h1>Building a Data Table Component in React/Redux. REST API</h1>
<p>Building and developing data tables is a common challenge in my experience.
In this story, I am going to build a data table with sorting and easy selecting. 
</p>
<h3>STEP 1. Creating A Table With React/Redux</h3>
<p>Since multiple components read and simultaneously output the same data, I decided to use the Redux state manager for keeping an actual state of a data array for all components.</p>

```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
 
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById(‘root’));

```
<p>I prefer to use the PropTypes library to set the required type of props. Type-checking will warn if accepted a type different from the intended props.</p>

```javaScript
import PropTypes from 'prop-types'
 
TableData.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    Name: PropTypes.string,
    Mass: PropTypes.number,
    Family: PropTypes.string,
    Classification: PropTypes.string,
    Status: PropTypes.string,
    Binomen: PropTypes.string
  })).isRequired,
}

```

<p>With the Connect function I read the dataset from Redux Store and render the data in a table.</p>

```javaScript
import React from 'react'
import {connect} from 'react-redux'
import {sortingData} from '../ac'
import {sortedDataTableSelector} from '../selectors'
import './table_ui.css'
 
 
  const heads = ['#'];
  for (let i in props.dataset[0]) {
    i !== 'id' && heads.push(i)
  }
 
  const tableHeads = heads.map((head, index)=>{
    return(
      <th scope="col" key={index}>
        <div className='table-heads'>
          {head}
         </div>
      </th>
    )
  })
 
  const tableCells = props.dataset.map((data, index)=>{
      const {id, Name, Mass, Family, Classification, Status, Binomen} = data
      return(
        <tr key={id}>
          <td className="index-column">{index}</td>
          <td className="name-column">{Name}</td>
          <td className="mass-column">{Mass}oz</td>
          <td>{Family}</td>
          <td>{Binomen}</td>
          <td>{Classification}</td>
          <td>{Status}</td>
        </tr>
      )
    })
 
  return(
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>{tableHeads}</tr>
          </thead>
          <tbody>{tableCells}</tbody>
        </table>
      </div>
  )
}
 
export default connect((state) =>{
  return { dataset: state.dataset }
})(TableData)

```

