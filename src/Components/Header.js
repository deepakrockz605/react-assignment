import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive : false
    }
  }

  handleToggle = () => {
    this.setState({
      isActive : !this.state.isActive
    })
  }

  handleOverlay = () =>{
    this.setState({isActive : false})
  }

  render() {
    return (
      
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
      {this.state.isActive ?<div className="overlay" onClick={this.handleOverlay}></div> : null }
        <div className={this.state.isActive ? "active btn-tog" : "btn-tog"} onClick={this.handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={this.state.isActive ? "collapse navbar-collapse active" : "collapse navbar-collapse"}>
          <ul className="navbar-nav ml-auto mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link"  onClick={this.handleOverlay}> 
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="articles" className="nav-link"  onClick={this.handleOverlay}>
                Article
              </Link>
            </li>
            <li className="nav-item">
              <Link to="blogs" className="nav-link" onClick={this.handleOverlay}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" onClick={this.handleOverlay}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
  }
}

export default Header