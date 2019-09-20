import React, { Component } from 'react';
class List extends Component {
    state = { 
        name:"",
        email:"",
        skills:"",
        job:"" }
    componentWillMount()
    {
       this.setState({name:   this.props.employee.name})
       this.setState({email:  this.props.employee.email})
       this.setState({skills: this.props.employee.skills})
       this.setState({job:    this.props.employee.job})
    }
    render() { 
        return ( 
            <div>
                 <span>{this.state.name}</span>
                 <span>{this.state.email}</span>
                 <span>{this.state.skills}</span>
                 <span>{this.state.job}</span>
            </div>
         );
    }
}
 
export default List;