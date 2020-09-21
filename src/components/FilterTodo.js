import React from "react";

class FilterTodo extends React.Component{
    constructor(){
        super();
       
    }
        render(){
       
            return(
                <>
                {/* here we are receiving button fro Todo */}
                {this.props.filterButtons.map((filterButton)=>{
                    return <button className="filterButton"onClick={()=>{
                        this.props.filterTodos(filterButton);
                    }}>{filterButton}</button>
                })}
              </>
            )
        }
    }

export default FilterTodo;