import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokePage from './pages/PokePage'


function App() {
  return (
    <BrowserRouter>
                <div>
                  <Switch>
                    <Route path="/info/:name" render={(props) => <PokePage {...props} />} />
                    <Route path="/" render={(props) => <HomePage {...props} />} />
                  </Switch>
                </div>
    </BrowserRouter>
  )
}

export default App;
