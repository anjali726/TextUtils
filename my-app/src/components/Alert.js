import React from 'react'

export default function Alert(props) {
  return (
   
      props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.type}</strong>   {props.alert.msg}
        <button type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
   
  )
}
