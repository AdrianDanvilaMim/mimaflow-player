import {Interface} from "node:readline";
import {Children, ReactNode} from "react";



interface ContainerProps{
    children:ReactNode;
    className:string;
}

export  const Container =(props:ContainerProps)=>{

    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}