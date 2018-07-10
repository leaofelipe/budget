import React from 'react'
import { shallow } from 'enzyme'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NotFoundPage from '../../components/NotFoundPage'

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
