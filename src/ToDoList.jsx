import React, { useState } from 'react';
import PageContainer from './PageContainer';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [newToDoName, setNewToDoName] = useState('');
  const [matchedString, setMatchedstring] = useState('');
  const handleNewToDoNameChange = e => {
    setNewToDoName(e.target.value);
  }
  const handleAddNewToDo = () => {
    let existingToDoNames = [];
    for(let i=0; i<list.length; i++) {
      existingToDoNames.push(list[i].name);
    }
    if (newToDoName.trim() === '' || existingToDoNames.includes(newToDoName.trim())) return;
    const newToDo = {name: newToDoName };
    const updatedList = [...list, newToDo];
    setList(updatedList);
    setNewToDoName('');
  }
  const handleDeleteToDo = (todoname) => {
    const updatedList = list.filter(todo => todo.name !== todoname);
    setList(updatedList);
  }
  const handleMatchedStringChange = e => {
      setMatchedstring(e.target.value);
  }
  return (
    <div className="App">
      <PageContainer 
        title='To Do List' 
        description='A To-Do list that allows add, delete and filter todo items'
      >
        <input type='text' value={matchedString} onChange={handleMatchedStringChange} placeholder='Filter - enter match'/>
        <input type='text' value={newToDoName} onChange={handleNewToDoNameChange} placeholder='Enter new todo name'/>
        <button onClick={() => handleAddNewToDo(newToDoName)}>+</button>
        {list.map(todo => todo.name.includes(matchedString) && <li key={todo.name} id={todo.name}>{todo.name}<button onClick={() => handleDeleteToDo(todo.name)}>-</button></li>)}
      </PageContainer>
    </div>
  );
}

export default ToDoList;