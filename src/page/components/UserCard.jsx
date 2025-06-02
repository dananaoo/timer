import React from 'react'
export default function UserCard (props){
    return(
        <div style={{border: "1px solid", padding: "50px", margin: "50px"}}>
            <h2>{props.name}</h2>
            <p>
                Age: {props.age}
            </p>
        </div>
    )
}
