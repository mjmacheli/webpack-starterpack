import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Menu from './components/Menu'
import Loading from './components/Loading'

ReactDOM.render(
  <Router>
    <main>
      <Menu/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route component={Error} />
      </Switch>
    </main>
  </Router>,
document.getElementById('root'))
