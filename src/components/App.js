import React,{lazy,Suspense,Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import '../style.scss'

import Home from './home/Home'
import Error from './utils/Error'
import Sidebar from './sidebar/Sidebar'
import Contact from './contact/Contact'
import Exhibitions from './exhibitions/Exhibitions'

let About = lazy(() => import('./about/About'))

class App extends Component {

    render() {
        return (
            <Router>
                <Sidebar />
                <main>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Suspense fallback={<h1>------------------------Heloo world-----------------------------------------</h1>}>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact} />
                    <Route path='/exhibitions' component={Exhibitions} />
                    </Suspense>
                    <Route component={Error} />
                </Switch>
                </main>
            </Router>
        )
    }

}

export default App
