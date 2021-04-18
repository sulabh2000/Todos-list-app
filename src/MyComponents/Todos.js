import React from 'react';
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length===0 ? <h5 className="text-center my-4">No Todos to display</h5> :
            props.todos.map((todo)=>{
                return(
                <>
                 <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                 </>
            )})
        }
        </div>
    )
}
