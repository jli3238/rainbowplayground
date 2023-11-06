import React, { useState, useEffect } from 'react';
import PageContainer from './PageContainer';

const FetchAndError = () => {
  const todoApiUrl = 'https://jsonplaceholder.typicode.com/todos';
  const [todolist, setTodolist] = useState([]);
  const [todolistError, setTodolistError] = useState('');
  useEffect(() => {
    fetch(todoApiUrl)
      .then(response => { if (response.ok) { return response.json(); }; return Promise.reject(response); })
      .then(result => { setTodolist(result); })
      .catch(response => { 
        if(response.json) { response.json().then(() => {setTodolistError(response.status) }); }; 
        setTodolistError('Server error');
      });
  }, []);
  return (
    <PageContainer 
        title='FetchAndError'
        description='FetchAndError'>        
        <div>Result:  </div>
        {todolistError && <div>{todolistError}</div>}
        {todolist.length > 0 && todolist.map(todo => <div key={todo.id}>
          <ul>
            <li>{todo.userId}</li>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
          </ul>
        </div>)}
    </PageContainer>
  )     
}

export default FetchAndError;