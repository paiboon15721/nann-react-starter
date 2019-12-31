import React from 'react'

export default props => (
  <ul>
    {props.comments.map((v, k) => (
      <li key={k}>{v}</li>
    ))}
  </ul>
)
