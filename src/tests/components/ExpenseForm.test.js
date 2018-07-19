import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render Expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error with invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {preventDefault: () => {}})
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()

  wrapper.find('input').at(0).simulate('change', {
    target: {value},
    persist: () => {}
  })

  expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()

  wrapper.find('textarea').simulate('change', {
    target: {value},
    persist: () => {}
  })

  expect(wrapper.state('note')).toBe(value)
})

test('should set amount on input change', () => {
  const value = '13.50'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()

  wrapper.find('input').at(1).simulate('change', {
    target: {value},
    persist: () => {}
  })

  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount on invalid value', () => {
  const value = '1234.112'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()

  wrapper.find('input').at(1).simulate('change', {
    target: {value},
    persist: () => {}
  })

  expect(wrapper.state('amount')).toBe('')
})

test('should call onsubmit for valid form', () => {
  const onSubmitSpy = jest.fn()
  /* expect(onSubmitSpy).toHaveBeenCalled() */
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  )
  wrapper.find('form').simulate('submit', {preventDefault: () => {}})
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toBe(now)
})

test('should set calendar focused on date focus', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
  expect(wrapper.state('calendarFocused')).toBe(true)
})


