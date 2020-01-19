import React, {Component} from 'react'

class Sidebar extends Component {

    hideSide = () => {
        $('#sidebar').removeClass('active')
        $('.overlay').removeClass('active')

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        })
    }

    render() {
        return(
            <nav id="sidebar" onClick={this.hideSide}>
                <div id="dismiss">
                    <i className="fas fa-arrow-left"></i>
                </div>
    
                <div className="sidebar-header">
                    <a href="index.html"><h3>Website</h3></a>
                </div>
    
                <ul className="list-unstyled components">
                    <li><a href="about.html">About</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>    
            </nav>
        )
    }
}

export default Sidebar