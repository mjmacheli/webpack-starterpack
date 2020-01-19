import React,{Component} from 'react'
import $ from 'jquery'

import './MenuIcon.scss'

class MenuIcon extends Component {

  sideBar = () => {
    $('#sidebar').addClass('active')
    $('.overlay').addClass('active')
    $('.collapse.in').toggleClass('in')
    $('a[aria-expanded=true]').attr('aria-expanded', 'false')
  }

  render(){
      return (
        <div className="container-fluid hamburger" onClick={this.sideBar}>
            <button
            type="button"
            id="sidebarCollapse"
            className="menu-icon"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
      )
  }
}

export default MenuIcon
