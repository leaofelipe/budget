import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})

  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }

  const action = {type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, {text: 'Example', type: 'SET_TEXT_FILTER'})

  expect(state.text).toBe('Example')
})

test('should set start date', () => {
  const date = moment().startOf('month')
  const state = filtersReducer(undefined, {startDate: date, type: 'SET_START_DATE'})

  expect(state.startDate).toBe(date)
})

test('should set end date', () => {
  const date = moment().startOf('month')
  const state = filtersReducer(undefined, {endDate: date, type: 'SET_END_DATE'})

  expect(state.endDate).toBe(date)
})
