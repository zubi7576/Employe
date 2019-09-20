import React, { Component } from 'react';
import '../App.css'
import {connect} from 'react-redux'
import {addEmploye} from '../Store/Actions/addAction'
import MyEmp from '../ClassComponent/MyEmp';
class EmployeForm extends Component {
    state = { 
        name:"",
        email:"",
        skills:"",
        job:""
     }

    render() { 
        return ( 
            <div className="col-md-12"> 
           <h4 className="jumbotron"><span className="badge badge-primary">Employe Record System</span></h4>
                <form className="EmployeeForm-form">
                  <input value={this.state.name}  onChange={(e) =>this.setState({name: e.target.value})}  type="text" className ="form-control m-2 " placeholder="Full Name"/>  
                  <input value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}  type="email" className ="form-control m-2 " placeholder="Email"/>  
                  <input value={this.state.skills} onChange={(e) => this.setState({skills:e.target.value})}   type="text" className ="form-control m-2 " placeholder="Skills"/>  
                  <input value={this.state.job}  onChange={(e) => this.setState({job:e.target.value})}    type="text" className ="form-control m-2 " placeholder="Job Post"/>  
                  <button type="submit" onClick={() => this.props.addEmploye(new MyEmp(this.state.name,this.state.email,this.state.skills,this.state.job))} className="btn btn-primary">Add Record</button>
                  </form>
                  
            </div>
         );
    }
}
 
export default connect(null, {addEmploye}) (EmployeForm);
