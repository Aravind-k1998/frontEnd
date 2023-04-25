import React from "react";

export default class Check extends React.Component{
    render(){
        const design={
            bg:"blue",
            textAlign:"right",
            fontSize:"50px"
        }

        return(
            <>
            {console.log(design.bg)}
            <h1 style={{color:design.bg}}>Hello react...!</h1>
            </>
        )
    }
}