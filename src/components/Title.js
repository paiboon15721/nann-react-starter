import React from 'react'
import PropTypes from 'prop-types'

const Title = props => (
  <>
    <h1>{props.title}</h1>
    <h1>{props.subtitle}</h1>
    <ul>
      {props.items.map(v => (
        <li>{v}</li>
      ))}
    </ul>
  </>
)

Title.defaultProps = {
  title: 'Default Title',
  items: [],
}

Title.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Title
