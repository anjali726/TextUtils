import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        </ul>
        </div>
      <div className="form-check form-switch">
        <form>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='light' ?'dark' :'light'}`} htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
        </form>
</div>
    </div>
  </nav>
  )
}
