import axios from 'axios';
import React,{Component} from 'react';


class Home extends Component {
      render() { 
        if(this.props.user){
            return(
                <h3>Hello {this.props.user.fullname} </h3>
            )
        }
        return (  
<div>
    
</div>
        );
    }
}
 
export default Home;