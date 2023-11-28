import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  </div>
)

export default App
