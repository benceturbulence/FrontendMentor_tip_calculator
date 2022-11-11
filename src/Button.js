import React from 'react'

export default function Button(props) {
  return (
    <div className={props.chosen ? "btn chosen" : "btn"} onClick={props.toggleClick}>{props.value}%</div>
  )
}