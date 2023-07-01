<<<<<<< HEAD
import React,{Component} from 'react'

class Demo extends Component {
    
    constructor(){
        super();
        this.state ={
            planet: "Earth"
        }
    }

    render(){
        return (
            <>
            <div><h1>Demo</h1></div>
           
            <h1>{this.state.planet}</h1>
            <h1>{this.props.title}</h1>
            <h1>{this.props.name}</h1>
           </>

        )
    };
};

=======
import React,{Component} from 'react'

class Demo extends Component {
    
    constructor(){
        super();
        this.state ={
            planet: "Earth"
        }
    }

    render(){
        return (
            <>
            <div><h1>Demo</h1></div>
           
            <h1>{this.state.planet}</h1>
            <h1>{this.props.title}</h1>
            <h1>{this.props.name}</h1>
           </>

        )
    };
};

>>>>>>> 7a8630f9d7e81b4c0ca9cce5f916758f7145fc30
export default Demo