import React from 'react'
import UpdatedComponent from './Hoc'

const Person1 = ({count, handleIncrement}) => {
  return (
    <div>
        <button onClick={handleIncrement}>Clicked {count} times</button>
    </div>
  )
}

export default UpdatedComponent(Person1);