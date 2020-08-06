<h1>Building a Data Table Component in React/Redux. < br />REST API</h1>
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

<h3>STEP 2. Sortable List</h3>
<p>I started by adding UI elements.</p>

```javaScript
function TableData(props){
  function sortTable(head, isAsc){
    props.sortingData(head, isAsc)
  }
 
  const tableHeads = heads.map((head, index)=>{
    return(
      <th scope="col" key={index}>
        <div className='table-heads'>
          {head}
          {head === 'Mass' && (
            <span className='arrow-up-down'>
              <div className="arrow-up" onClick={() => sortTable(head, true)}></div>
              <div className="arrow-down" onClick={() => sortTable(head, false)}></div>
            </span>
          )}
        </div>
      </th>
    )
  })
  
```
<p>First argument MapStateToProps reads the state using a selector created by Reselect’s createSelector function. This function remembers the arguments passed-in the last time it was invoked and doesn’t recalculate if the arguments are the same. 

The second argument to connect() I pass an object {sortingData} for changing the current state store. 
</p>

```javaScript
export default connect((state) =>{
  return {
    dataset: sortedDataTableSelector(state)
  }
}, { sortingData }
 
)(TableData)

```
<h6>Selector</h6>
<p>For sorting data, here I use the 'Lodash' library. This library provides convenience and less code way.</p>

```javaScript
import { createSelector } from 'reselect'
import { orderBy } from "lodash"
 
export const datasetSelector = state => state.dataset;
export const headSelector = state => state.datasort.head;
export const isAscSelector = state => state.datasort.isAsc;
 
export const  sortedDataTableSelector = createSelector(
  datasetSelector,
  headSelector,
  isAscSelector,
 
  (dataset, head, isAsc) => {
     return  orderBy(dataset, [head], isAsc === true  ? ['asc'] : ['desc'])
  }
)

```

<p>In case I do a sorting function on Native javascript, I need to return a new object, not change my dataset by reference.</p>

```javaScript
    return  rezult.slice().sort((a, b) => {
            console.log(a[head])
 
              let valA = a[head]
              let valB = b[head]
 
              if (valA > valB) {
                return [isAsc ? 1 : -1]
              }
 
              if (valA < valB) {
                return isAsc ? -1 : 1
              }
              return 0
          })
          
```

<h6>AC</h6>

```javaScript
import {SORT_UP_DOWN} from ‘../constants'
 
export function sortingData(head, isAsc){
  return{
    type: SORT_UP_DOWN,
    payload: {head, isAsc}
  }
}

```
<h6>REDUCER</h6>

```javaScript
import {SORT_UP_DOWN} from '../constants'
 
const dafaultdata = {
  head: null,
  isAsc: null
}
 
export default (state = dafaultdata , action) => {
  const { type, payload } = action
 
  switch (type){
    case SORT_UP_DOWN:
      return{...state, head: payload.head, isAsc: payload.isAsc}
    default:
      return state
  }
}

```

<h3>STEP 3. Select component</h3>
<p>I add the <span><a href='https://react-select.com/home'>React Select component</a></span> for picking from a headers` list.
Start by installing react-select.</p>

```javaScript
import Select from 'react-select'
 
class SelectedFilter extends Component{
 
  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }
 
  get options(){
    return this.props.dataset.map( data => ({
      label: data.Name,
      value: data.id
    }))
  }
 
  render(){
    const placeholder = "Show All..."
    return(
      <Select options={this.options}
              value={this.props.selected}
              onChange={this.handleChange}
              placeholder={placeholder}
              styles={styles}
              isClearable
      />
    )
  }
}
 
export default connect(
  (state) =>({
    dataset: datasetSelector(state),
    selected: selectedArticleSelector(state)
  }), {changeSelection}
)(SelectedFilter)

```

<p>As previous components, the SelectedFilter component subscribes to the state Store using a selector.
Here, Component reads state from the 'dataset' reducer and ‘selected'.
</p>
<h6>REDUCER</h6>

```javaScript
 
const dafaultFilters = {
  selected: []
}
 
export default (filters = dafaultFilters , action) => {
  const {type, payload} = action
 
  switch (type){
    case CHANGE_SELECTION:
       return {...filters, selected: payload.selected}
    default:
      return filters
  }
}

```

<h6>SELECTOR</h6>

```javaScript
import {createSelector} from 'reselect'
import {orderBy} from "lodash"
 
export const datasetSelector = state => state.dataset;
export const headSelector = state => state.datasort.head;
export const isAscSelector = state => state.datasort.isAsc;
export const selectedArticleSelector = state => state.filters.selected
 
export const  sortedDataTableSelector = createSelector(
 
  datasetSelector,
  headSelector,
  isAscSelector,
  selectedArticleSelector,
  (dataset, head, isAsc, selected) => {
 
     const rezult = dataset.filter((data) => {
      return (selected !== null)  ? (!selected.value || selected.value === data.id ) : data
     })
     return  orderBy(rezult, [head], isAsc === true  ? ['asc'] : ['desc'])
 
  }
)
```

<h6>AC</h6>

```javaScript
export function changeSelection(selected){
  return{
    type: CHANGE_SELECTION,
    payload: {selected}
  }
}
```

<p>The code in action is responsible for handling the button click. It activates an Action Creator that dispatches action to Reducer. 
Reducer creates a new state and sends it to the Store. In its turn the Store calls all subscribers about changing state.
 
Selector code is in charge of sorting and selecting data from the state  Store, depending on the parameters that came from the reducer.
 
Now data ready to render in Component.
</p>

