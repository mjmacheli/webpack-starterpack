import ReactDOM from 'react-dom'
import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

import Home from './components/Home'
// import About from './components/About'
import Error from './components/Error'
import Menu from './components/Menu'

let About = lazy(() => import('./components/About'))

ReactDOM.render(
  <Router>
  <Menu/>
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home}/>
        <Suspense fallback={<h1>------------------------Heloo world-----------------------------------------</h1>}>
          <Route path='/about' component={About}/>
        </Suspense>
        <Route component={Error} />
      </Switch>
    </main>
  </Router>,
document.getElementById('root'))
