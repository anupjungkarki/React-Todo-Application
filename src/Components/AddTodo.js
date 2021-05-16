import React from 'react'
import  { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [des, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title and Description Must be Required");
        }
        else{
            props.addTodo(title,des);
       }
    }
    return (
        <div className="container my-3">
            <h1>Add A Todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={des}  onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="des" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
