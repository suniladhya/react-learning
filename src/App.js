import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Functional Components
const app = props => {
  const [personState,setPersonState]= useState({
    persons: [
      {name: 'Sunny', age : 28},
      {name: 'Rai', age : 29},
      {name: 'Rajiv', age : 30},
      {name: 'Raghu', age : 31}
    ]
    //In case of Multiple items in the state it is good to have different items in their own state
    //otherState: "Some Other Value"
   });

   const [otherState,setOtherState] = useState(
     "some Other value"
   );

   const switchOtherUsingStateHandler = () =>{
     setOtherState(
      "New Value"
     );
   }

  const switchNameUsingStateHandler = () =>{
    setPersonState({ //it over rides the Personstate value, Other state wont exist any more
      persons: [
        {name:'Hari', age: 30},
        {name:'Ravi', age: 31},
        {name:'Rami', age: 32}
      ]
    });
  }
  
    return (
      //Best practice to wrap every thing in one root element
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick ={switchNameUsingStateHandler}>Change Person state</button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
        <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
        <button onClick ={switchOtherUsingStateHandler}>Change Person state</button>
        <div>{otherState}</div>
      </div>
    ); 
}
export default app;
