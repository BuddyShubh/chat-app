import React from 'react'
import "../css/Msg.css"

export default function Msg(props) {
  return (
    <div className="container">
      <div className={props.from}>{props.msg}</div>
    </div>
  )
}