import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <>
        <div className="card">{props.name}</div>

        <a href="https://mythrillfiction.com/" target="_blank">{props.link}</a>
    </>
  )
}

export default Card