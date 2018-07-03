import moment from 'moment'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('should set a textFilter', () => {
  const action = setTextFilter('Some text')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Some text'
  })
})

test('should clear a textFilter', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})



test('should generate set start date object', () => {
  const date = moment(0)
  const action = setStartDate(date)
  expect(action).toEqual({
    startDate: date,
    type: 'SET_START_DATE'
  })
})

test('should generate set end date object', () => {
  const date = moment(0)
  const action = setEndDate(date)
  expect(action).toEqual({
    endDate: date,
    type: 'SET_END_DATE'
  })
})

test('should generate sort by amount object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should generate sort by date object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})
