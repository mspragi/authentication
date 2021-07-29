import { Fragment , Component} from 'react';
import './components/style.css'
import Forgot from './components/forgot';
import Home from './components/home';
import Login from './components/login';
import Nav from './components/nav';
import Register from './components/register';
import Reset from './components/reset';
// import PreLoader from './components/preloader';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount=()=>{
    axios.get('http://localhost:4000/user')
    .then(res=>{
        this.setState({
          user: res.data
        })
    },
    err=>{
        console.log(err)
    })
    
}

  

  render() { 
    return (
      <Fragment>  
      <BrowserRouter>   
      <Nav  user={this.state.user}/>
      <Switch>
        <Route exact path='/' component={()=><Home user={this.state.user}/>}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path = '/register' component={Register}/>
        <Route exact path = '/forgotpassword' component={Forgot}/>
        <Route exact path = '/resetpassword'  component={Reset}/>  
      </Switch>
    </BrowserRouter>
    </Fragment>
    );
  }
}

 
export default App;