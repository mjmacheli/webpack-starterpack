import React, {lazy,Suspense,Component} from 'react'

import MenuIcon from '../sidebar/MenuIcon'
import Sidebar from '../sidebar/Sidebar'

import './Contact.scss'

let Sub = lazy(() => import('../utils/Sub'))

class Contact extends Component {

    hideSide = () => {
       console.log('sho')
       $('#sidebar').removeClass('active')
        $('.overlay').removeClass('active')

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        })
    }

    render() {
        return (
          <div className="wrapper">
            <Sidebar />
            <div id="content">

              <MenuIcon />
              <div className="row justify-content-md-center">
                <form className="col-md-6 align-self-center py-4">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" />
                  </div>

                  <div className="form-group">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                  </div>

                  <div className="form-group">
                    <input type="phone" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Phone" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" id="message" placeholder="Message" />
                  </div>

                  <button type="button" className="btn btn-outline-secondary">Send</button>
                </form>

                <div className="w-100"></div>
                <div className="col-6 my-5 socials">
                    <i className="fab fa-facebook-square fa-2x px-1"></i>
                    <i className="fab fa-instagram fa-2x px-1"></i>
                    <i className="fab fa-twitter fa-2x px-1"></i>
                </div>
              </div>
            </div>
            <div className="overlay" onClick={this.hideSide}></div>
          </div>
        )
    }
}

export default Contact
