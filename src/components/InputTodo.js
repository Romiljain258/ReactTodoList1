import React from "react";

class InputTodo extends React.Component{
    constructor(){
        super();
        // this inputRef is just responsible for taking input from cliet/user.
        this.inputRef=React.createRef();
    }
        render(){
            // there we are receiving func addTwo from Todo.
            let { addTodo }=this.props;
            return(
                <>
                <input placeholder="Todo" className="input" maxlength="25" ref={this.inputRef}></input>
                <button className="inputButton" onClick={()=>{
                    if(this.inputRef.current.value)
                    addTodo(this.inputRef.current.value);
                }}>Add item</button>
                </>
            )
        }
    }

export default InputTodo;