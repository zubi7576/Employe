import React from 'react';
import EmployeForm from './Components/employeForm';
import store from './Store'
import {Provider} from 'react-redux'
import EmployeList from './Components/List';

class App extends React.Component {
  render()
  {
    return (
      <Provider store ={store}>
      <div className="App">
       <EmployeForm></EmployeForm>
       <EmployeList></EmployeList>
      </div>
      </Provider>
    );
  }
  
}

export default App;
