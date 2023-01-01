import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';
import { Register } from './components/auth/Register';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route path='/register' component={Register} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
