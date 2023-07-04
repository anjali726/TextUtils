import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button type="button" className="btn btn-dark">{props.what}</button>
    </div>
  )
}
