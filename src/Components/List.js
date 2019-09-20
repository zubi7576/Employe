import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './employe'

class EmployeList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {
                    this.props.list.map(item => <List employee={item}/>)
                }
            </div>
         );
    }
}
 
const mapStateToProps =state => (
    {
        list: state.addRed.empList
    }
)
export default connect(mapStateToProps,null) (EmployeList);