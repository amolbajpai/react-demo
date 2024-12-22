import React from 'react'

export default function Header({ info,children }) {
  console.log(children)
    return (
      <div>
            <h1>Welcome to Header</h1>
        <h2>It's My app</h2>
        <h3>{info.name}</h3>
        <h3>{info.add}</h3>
        <h3>{children}</h3>
        
        </div>
  )
}
