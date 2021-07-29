import React,{Component, Fragment} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname:"",
            email:"",
            password:"",
            confirmpassword:""
        }
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value,
            }) 
        }
        handleSubmit = (e) => {
            e.preventDefault();
           // console.log(this.state);
        
           const details = {
            fullname:this.state.fullname,
            email      : this.state.email,
            password   : this.state.password,
            confirmpassword : this.state.confirmpassword
           }
           axios.post('http://localhost:4000/sigup/data',details).
           then(res=>console.log(res));

        }

       

    render() { 
       
        return (
            <Fragment>
                <div className=' col-md-4 my-2 card mx-auto'>  
             <div className='card-body registerbody'>        
             <form action='/' onSubmit={this.handleSubmit}>
                <h2 className='h4  my-2 pb-2 text-primary font-weight-bold text-center'>Signup</h2>
                <div className='form-group'>
                    <label htmlFor='fullname' className='my-2'>Full Name</label>
                    <input type='text'  value={this.state.fullname} onChange={this.handleChange}
                  id='fullname' name='fullname' className='form-control' placeholder='FirstName'/>
                </div>

                {/* <div className='form-group'>
                    <label htmlFor='lastname' className='my-2'>Last Name</label>
                    <input type='text' value={this.state.lastname} onChange={this.handleChange}
                   id='lastname' name='lastname' className='form-control' placeholder='FirstName'/>
                </div> */}

                <div className='form-group'>
                    <label htmlFor='email' className='my-2'>Email</label>
                    <input type='email' value={this.state.email}  onChange={this.handleChange}
                    id='email' name='email' className='form-control' placeholder='Email-address' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='my-2'>Password</label>
                    <input type='password' value={this.state.password}  onChange={this.handleChange}
                   id='password' name='password' className='form-control' placeholder='Password'/>
                </div>
                <div className='form-group'>
                   <label  htmlFor='confirmpassword' className='my-2'>Confrim Password</label>
                    <input type='password' value={this.state.confirmpassword} onChange={this.handleChange}
                    id='confirmpassword' name='confirmpassword' className='form-control' placeholder='confirm Password'/>
                </div>
                 <button className='btn btn-primary btn-block' type='submit' >Signup</button>
                
            </form>
            </div>
            </div>
            </Fragment>
          );
    }
}
 
export default Register;




















































// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             firstName: "",
//             lastName:"",
//             email:"",
//             password:"",
//             confimPassword:""
//          }
//          this.handleChange=this.handleChange.bind(this);
//          this.handleSubmit=this.handleSubmit.bind(this) ;   
//     }

//    handleChange=(e)=>{
//        this.setState({
//            [e.tagert.name]:e.tagert.value,
//        })
//    }

//    handleSubmit=(e)=>{
//        e.preventDefault();
//        console.log(this.state);
//    }

//     render() { 
//         return ( 
//             <Fragment>
//             <div className='card register col-md-4 my-2'>  
//             <div className='card-body registerbody'>        
//             <form action='/' onSubmit={this.handleSubmit}>
//                <h2 className='h4  my-2 pb-2'>Signup</h2>
//                <div className='form-group'>
//                    <label className='my-2'>First Name</label>
//                    <input type='text' 
//                    className='form-control' placeholder='FirstName'/>
//                </div>
//                <div className='form-group'>
//                    <label className='my-2'>Last Name</label>
//                    <input type='text' className='form-control' placeholder='FirstName'/>
//                </div>
//                <div className='form-group'>
//                    <label className='my-2'>Email</label>
//                    <input type='email' className='form-control' placeholder='Email-address' required/>
//                </div>
//                <div className='form-group'>
//                    <label className='my-2'>Password</label>
//                    <input type='password' className='form-control' placeholder='Password'/>
//                </div>
//                <div className='form-group'>
//                    <label   className='my-2'>Confrim Password</label>
//                    <input type='password' className='form-control' placeholder='confirm Password'/>
//                </div>
//                <div className='d-grid gap-2'>
//                    <button className='btn btn-primary btn-block' type='submit' >Signup</button>
//                  </div>
//            </form>
//            </div>
//            </div>
//            </Fragment>
//          );
//     }
// }
 
// export default Register;