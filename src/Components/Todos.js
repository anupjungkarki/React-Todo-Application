import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    let myStyle={
        minHeight:"70vh",
        margin:"10px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos Lists</h3>
            {props.todos.length === 0 ?"No Todos Left To Display":
             props.todos.map((todos) => {
                return <Todo todos={todos}  key={todos.sno} onDelete={props.onDelete} />
            })
            }
        </div>
    )
}
