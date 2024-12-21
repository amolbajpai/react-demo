import React from 'react'

export default function Header(props) {
    return (
      <div>
            <h1>Welcome to Header</h1>
        <h2>It's My app</h2>
        <h3>{props.info.name}</h3>
        </div>
  )
}
