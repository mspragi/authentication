import React,{Component} from 'react';
import { Redirect } from 'react-router';


class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            confrimpassword:""
    }
    }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state);
        }


    render() { 
        if(this.state.resetpassword){
            <Redirect to={'/login'}/>
        }
        return ( 
           <div className='col-md-4 my-5 card mx-auto bg-light'>
               <h4 className='text-primary text-center'>Reset Password</h4>
               <div className='card-body'>
                   <form onSubmit={this.handleSubmit}>
                       <div className='form-group'>
                           <label htmlFor='password' >Password</label>
                           <input type='password' value={this.password} onChange={this.handleChange}
                          id='password' name='password' className='form-control' placeholder='Password'/>
                       </div>
                       <div className='form-group'>
                           <label htmlFor='confrimpassword'>Confrim Password</label>
                           <input type='password' value={this.confrimpassword} onChange={this.handleChange}
                           id='confrimpassword' name='confrimpassword' className='form-control' placeholder='ConfirmPassword'/>
                       </div>
                       <button className='btn btn-primary btn-block'>Submit</button>
                   </form>
               </div>
           </div>
         );
    }
}
 
export default Reset;