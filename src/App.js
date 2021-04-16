import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './dashboard/Homapege'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Dashboard} />
        </Switch>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
