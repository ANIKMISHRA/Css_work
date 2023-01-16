import React from 'react'
import UpdatedComponent from './Hoc'

const Person2 = ({count, handleIncrement}) => {
  return (
    <div>
        <h1 onMouseOver={handleIncrement}>Hovered {count} times</h1>
    </div>
  )
}

export default UpdatedComponent(Person2);