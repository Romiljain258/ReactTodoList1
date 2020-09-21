import React from "react";

class ListTodos extends React.Component{
    constructor(){
        super();
    }
        render(){
            let { items }=this.props;
            return(
                <>
               <ul>
                   {items.map((item)=>
                       <li className="parentDelete">
                           <span className="list" onClick={()=>{
                               this.props.updateTodo(item);
                           }}
                           style={{ textDecoration:!item.active?"line-through":"none",}}>
                                {item.title}</span>
                           <button className="listDelete" onClick={()=>{
                               this.props.deleteTodo(item);
                           }}>Delete</button>
                        </li>
                   )}
               </ul>
                </>
            )
        }
    }

export default ListTodos;