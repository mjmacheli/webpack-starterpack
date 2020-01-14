import React, {lazy,Suspense} from 'react'

// import Loading from './Loading'

import './about.scss'

let Sub = lazy(() => import('./Sub'))

const About = () => (
  <div>
    <div className="row justify-content-md-center">
    <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
            <div id="dismiss">
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="sidebar-header">
                <a href="index.html"><h3>Website</h3></a>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="gallery.html">Gallery</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content">

            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
           </div> {/* </div> <!--End of hamburger menu--> */}
            {/* <!-- <div className="line"></div> --> */}
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

    <div className="overlay"></div>
    </div>


    {/* scripts */}

    {/* $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        }); */}

    {/* end of script */}
    {/* <Suspense fallback={<Loading/>}>
      <Sub/>
    </Suspense> */}
  </div>
)

export default About
