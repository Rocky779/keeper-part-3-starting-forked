import React from "react";
import { useState } from "react";
function CreateArea(props) {
  const [note,changeNote] = useState({title:"",content: ""});
  function handleChange(event){
    const {name,value} = event.target;
    changeNote( (prevValue) => { return {...prevValue,[name]: value}});
  }
  function submitnote(event){
    props.add(note);
    changeNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {note.title} onChange = {handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value = {note.content} onChange = {handleChange}/>
        <button onClick = {submitnote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
