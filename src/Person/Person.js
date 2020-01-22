import React  from "react";

const person = props => {
return (
    <div>
        <p>I am a person Name: {props.name} & I am {props.age} years old</p>
    </div>
    );

}

export default person;