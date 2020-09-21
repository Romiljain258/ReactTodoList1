import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import FilterTodo from "./components/FilterTodo";

class Todos extends React.Component{
    constructor(){
        super();
        this.state={
            todos : [              
                // {
                //     title : "romil",
                //     status : "active",
                // },
                // {
                //     title : "rinci",
                //     status : "active",
                // },

            ],
            allTodos:[],
        };
    };

    // here i'm just receiving text from input whatever user has typed.
    // then i'm adding this to array & then passing this array to list to append this on screen.
    addTodo=(title)=>{
        let todo={
            title:title,
            active:1,
        };

        // ok, to pass this new todo input, we could do (this.state.push(todo)), yes we can
        // do that, but it will disturb whole array, so just we added in setState.
        let newTodosArray =[...this.state.todos, todo];
        this.setState({
            todos:newTodosArray,
            allTodos:newTodosArray,
        })
    };

    // there (todo) i'm receiving what user has delete from list. 
    deleteTodo=(todo)=>{
        let todoObjectIndex=this.state.todos.indexOf(todo);
        let previousArray=[...this.state.todos];
        previousArray.splice(todoObjectIndex,1);
        this.setState({
            todos:previousArray,
            allTodos:previousArray,
        });
    };

    // for cut if you have done this work.
    updateTodo=(todo)=>{
        let todoObjectIndex=this.state.todos.indexOf(todo);
        let previousArray=[...this.state.todos];
        previousArray[todoObjectIndex].active =!previousArray[todoObjectIndex].active;
        this.setState({
            todos:previousArray,
            allTodos:previousArray,
        })
    };

    filterTodos=(filter)=>{
          switch(filter){
            case "Active":
                let activeTodos=this.state.allTodos.filter((todo)=>todo.active);
                this.setState({
                    todos:activeTodos,
                });
                break;
            case "Completed":
                let completedTodos=this.state.allTodos.filter((todo)=>!todo.active);
                this.setState({
                    todos:completedTodos,
                });
                break;
            default:
                this.setState({
                    todos:[...this.state.allTodos],
                })
          }
    }
    render(){
        return(
            <>
             <InputTodo addTodo={this.addTodo}></InputTodo>

             {/* there we just like fetching data by sending these references & here we have defined some method after fetching & performing*/}
             <ListTodos 
             items={this.state.todos} 
             deleteTodo={this.deleteTodo} 
             updateTodo={this.updateTodo}>      
             </ListTodos>
            
            {/* we are sending to FilterTodo these 3  */}
            <FilterTodo filterButtons={["All","Active","Completed"]}
            filterTodos={this.filterTodos}
            >

            </FilterTodo>
            </>
        );
    }
}

export default Todos;