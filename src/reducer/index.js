import { combineReducers} from 'redux'
import dataset from './tabledata'
import datasort from './sortdata'
import filters from './filter'

export default combineReducers({
  dataset,
  datasort,
  filters
})
