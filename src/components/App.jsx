import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, managelist] = useState([]);

  function addNote(newNote) {
    managelist((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteItem(id){
    managelist(prevNotes => {return prevNotes.filter((note,index) => { return index !== id })})
  }


  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {list.map((note, key) => {
        return (
          <Note key={key} id={key} title={note.title} content={note.content} delete = {deleteItem} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
