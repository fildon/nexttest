import React from 'react'

/**
 * Join an array of children with the provided separator
 */
const Join = (props: {
  separator: JSX.Element
  children: JSX.Element[]
}): JSX.Element => (
  <>
    {props.children.reduce((joined, child) => (
      <>
        {joined}
        {props.separator}
        {child}
      </>
    ))}
  </>
)

export default Join
