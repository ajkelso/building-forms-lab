import React from 'react';

export default function Band (props){
   console.log(props);
    return(
        <li>{props.band}</li> 
    )
}