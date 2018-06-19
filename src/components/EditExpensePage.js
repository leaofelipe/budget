import React from 'react'

const EditExpensePage = (props) => {
  return (
    <div>
      Edit Expense  {props.match.params.id}
    </div>
  )
}

export default EditExpensePage
