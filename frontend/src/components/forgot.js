import React,{Component} from 'react';


class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:""
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
        return (
           <div className='col-md-4 my-5 card mx-auto bg-light'>
                  <h3 className='text-primary  text-center'>ForgotPassword</h3>
               <div  className='card-body'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email' >Email</label>
                        <input type='email' value={this.state.email} onChange={this.handleChange}
                        id='email' name='email' className='form-control' placeholder='Enter a mail'/>
                    </div>
                    <button className='btn btn-primary btn-block'>Submit</button>
                </form>
               </div>
           </div>
          );
    }
}
 
export default Forgot;