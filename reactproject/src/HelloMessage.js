import React from "react";

function HelloMessage(props) {
    return (
        <>
            <h1> Hello {props.name} </h1>
            <h1> Age {props.Age} </h1>
        </>
    );
}
export default HelloMessage;