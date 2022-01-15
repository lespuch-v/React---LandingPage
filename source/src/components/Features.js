import React from "react";

export default function Features(props){
    // console.log(props)


    return (
        <div className="features">
            
            {<img src={props.image} alt="" />}
        </div>
    )
}