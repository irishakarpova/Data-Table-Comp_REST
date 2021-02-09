import React from 'react'
import TableData from './components/tableDataSet'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <TableData/>
    </Provider>
  )
}

export default App
