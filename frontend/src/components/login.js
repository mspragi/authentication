import axios from 'axios';
import React,{Component,Fragment} from 'react';
//import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password:""
        }

      }
    
      handleChange = (e) => {
          this.setState({
              [e.target.name]:e.target.value,
          })
      }
      handleSubmit = (e) => {
          e.preventDefault();
          //console.log(this.state);
          const register = {
            email: this.state.email,
              password: this.state.password
          }

            axios.post('http://localhost:4000/login/data',register).
            then(res=>console.log(res));
      }

  render() {   
      return (  
          <Fragment>
              <div className="col-md-4 my-5 card mx-auto bg-light">
                  <h4 className="h4 my-2 pb-2 text-primary font-weight-bold text-center">Login</h4>
              <div className="card-body ">
              <form action="/" onSubmit={this.handleSubmit}>
                  <div className="form-group a">
                      <label  htmlFor="email">username</label>
                      <input type="email" id="email" className="form-control" 
                       name="email" value={this.state.email} onChange={this.handleChange}
                       placeholder= "Enter username" required />
                  </div>
                  <div className="form-group c">
                      <label htmlFor="password">password</label>
                      <input type="password" id="password" className="form-control" 
                       name="password" value={this.state.password} onChange={this.handleChange}
                       placeholder= "Enter password" required />
                  </div>
                  
              <div className="form-group">
                  <button className="btn btn-primary btn-block">Login</button>
                  <p className='text-primary text-right'>
                      <Link to={'/forgotpassword'}>Forgot Password?</Link>
                  </p>
              </div>
              </form>
              </div>
              </div>
          </Fragment>
        );
  }
}
 
export default Login;













































// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           username:"",
//           password:"" 

//          }
//     }
//     handleChange=(e)=>{
//       this.setState({
//         [e.tagert.name]:e.tagert.value,
//       })
//     }

//     handleSubmit=(e)=>{
//       e.perventDefautl();
//       console.log(this.state);
//     }
//     render() { 
//         return ( 
//           <div className='col-md-4 my-2 bg-light'>
//             <form onSubmit={this.handleSubmit}>
//               <div className='form-group '>
//                 <label htmlFor="username" className='my-2'>Username</label>
//                   <input type='text' value={this.state.username} onChange={this.handleChange}
//                 id="username" name="username"  className='form-control' placeholder='username'/>
//               </div>
//               <div  className='form-group my-2'>
//                  <label htmlFor="password "  className='my-2'>Password</label>
//                  <input type='password' value={this.state.password} onChange={this.handleChange}
//                 id="password" name="password" className='form-control' placeholder='Password'/>
//               </div>
//               <div  className='d-grid gap-2 my-3'>
//                 <button type='button' className='btn btn-primary '>Login</button>
//               </div>
//             </form>
//           </div>
//          );
//     }
// }
// export default Login;