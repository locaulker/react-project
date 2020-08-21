import React from 'react'

import UserItem from './UserItem'
import './UserItem.scss'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No Users found</h2>
      </div>
    )
  }

  return (
    <ul>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
}

export default UsersList
