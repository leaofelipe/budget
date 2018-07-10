import moment from 'moment'

export default [{
  id: '1',
  description: 'Rent',
  note: '',
  amount: 5000,
  createdAt: 0
}, {
  id: '2',
  description: 'Car',
  note: 'Broken',
  amount: 100,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 8900,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
