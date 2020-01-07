import {render} from 'react-dom'
import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'

const App = () => {
  return(
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route component={Error} />
      </Switch>
    </main>
  )
}

render(<BrowserRouter><Home/></BrowserRouter>, document.getElementById('root'))
