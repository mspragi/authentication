import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
 
    
    render(){

        let buttons;
                if(this.props.user){
                    
                    buttons=(<ul className='className="navbar-nav me-auto mb-2 mb-lg-0" d-flex' style={{listStyle:'none'}}>
                    <li className='nav-item'>
                      <Link className='nav-link'  to={'/'} onClick={()=>localStorage.clear}  style={{color:'blue'}} >logout</Link>   
                    </li>
                    </ul>)

                }
                else{

                 buttons=(   <ul className='className="navbar-nav me-auto mb-2 mb-lg-0" d-flex' style={{listStyle:'none'}}>
                 <li className='nav-item'>
                   <Link className='nav-link'  to={'/login'} style={{color:'blue'}} >login</Link>   
                 </li>
                 <li className='nav-item'>
                 <Link className='nav-link'  to={'/register'} style={{color:'blue'}} >Signup</Link>   
                     
                 </li>
             </ul>)
                }





        return ( 
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        </ul>
        </div>
        <div >
        {buttons}
        </div>
    </div>
</nav>
    
         );
    }
}
 
export default Nav;