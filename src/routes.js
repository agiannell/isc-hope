import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Contact from './Components/Contact';
import Give from './Components/Give';

export default (
    <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
        <Route path='/give' component={ Give } />
    </Switch>
)