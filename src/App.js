import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import DynamicPerson from './Person/DynamicPerson';
import ChildProp from './Person/ChildProp';
import  Tiger from "./Person/Person";
import State from "./Person/State";
class App extends Component {
  //state is a special property, If it changes it leads react to re-render the DOM
  state = {
    persons: [
      {name: 'Sunny', age : 28},
      {name: 'Rai', age : 29},
      {name: 'Rajiv', age : 30},
      {name: 'Raghu', age : 31}
    ],
    testState:"Test state to verify the merge using the set state"
  }
  //Handler is by convention
  swithNameHandler = () =>{
    console.log('Was Clicked')
  }
  swithNameAutoHandler = () =>{
    console.log('Auto Click Execution Completed')
  }
  switchNameUsingStateHandler = () =>{
    console.log('State Change event clicked!!');
    //DON'T DO ThiS
    // this.state.persons[0].name = "Sunil Adhya"
    
    //merges the modified state with the existing state
    this.setState({
      persons: [
        {name:'Hari', age: 30},
        {name:'Ravi', age: 31},
        {name:'Rami', age: 32}
      ],
      otherState: 'Some Other Value'
    });
    // newly added otherState won't be visible, 2nd time its there
    //console.log(this.state);

  }
  stateConentViewHandler = ()=>{
    // All the changes are merged
    console.log(this.state)
  }
  render() {
    return (
      //Best practice to wrap every thing in one root element
      <div className="App">
        <h1>Hi, I am React App</h1>
        <Person/>
        <Tiger/>
        <DynamicPerson name='Sunil' age='29'/>
        <DynamicPerson name='Sunil' age='27'>Hobby: HI</DynamicPerson>
        <ChildProp name='Sunil' age='27'>Hobby: HI</ChildProp>
        <button onClick={this.swithNameHandler}>Switch Name</button>
        <button onClick={this.swithNameAutoHandler()}>Switch Name immidiate Execution</button>
        <button onClick ={this.switchNameUsingStateHandler}>Change state using Click Event</button>
        <State name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <State name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <State name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
        <button onClick={this.stateConentViewHandler}>View Current State</button>
    <div>{this.state.otherState}</div>
      </div>
    );
    
    // return React.createElement('div',null, <h1>Hi, I am React App</h1>)
    // return React.createElement('div',null, React.createElement('h1',null, 'Hi, I am React App'))
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi, I am React App'))

  }
}
//es 6 feature
export default App;
