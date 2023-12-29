import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
