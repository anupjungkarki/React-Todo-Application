import React from 'react'

export default function Todo(props) {
    return (
        <>
        <div>
            <h4>{props.todos.title}</h4>
            <p>{props.todos.des}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todos)}}> Delete</button>
        </div>
        <br/>
        <hr/>
        </>
    )
}
