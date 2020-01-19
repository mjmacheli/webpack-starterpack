import React, {lazy,Suspense,Component} from 'react'

import MenuIcon from '../sidebar/MenuIcon'
import Sidebar from '../sidebar/Sidebar'

let Sub = lazy(() => import('../utils/Sub'))

class About extends Component {

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
            <section>
                <div className="wrapper">
                    <Sidebar />
                    <div id="content">

                        <MenuIcon />
                        <div className="row justify-content-md-center">
                            <div className="col-sm-12 col-md-6 align-self-start py-4">
                                <aside className="txt-about container-fluid">
                                    <h1>About</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iure laboriosam similique quaerat quia, sed dolorem quo autem enim dolorum</p>
                                </aside>{/* <!--Main Content--> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay" onClick={this.hideSide}></div>
            </section>
        )
    }
}

export default About
