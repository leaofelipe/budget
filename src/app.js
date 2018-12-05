import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import {addExpense} from "./actions/expenses"
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore()
store.dispatch(addExpense({description: 'Water', amount: 2}))
store.dispatch(addExpense({description: 'Gas', amount: 3}))
store.dispatch(setTextFilter('wat'))
console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider> 
)

ReactDOM.render(jsx, document.getElementById('app'))