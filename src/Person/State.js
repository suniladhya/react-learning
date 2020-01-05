import React from "react";

const dynamicPerson = (props)=>{
return (
    <div>
        <p>Hi I am {props.name} and I am {Math.floor(Math.random()) * 30} year old but shoul be {props.age}</p>
        <p>{props.children}</p>
    </div>
)
}
export default dynamicPerson;