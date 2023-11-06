import React, { useState } from 'react';
import PageContainer from './PageContainer';
import styled from 'styled-components';

const SubmitButtonInput = styled.input`
  border: solid 1px gray !important;
  box-shadow: 1px 1px #888888;
  border-radius: 1px;
`;

const AppendFormInputToAnArray = () => {
    const arr = ['a','b','c'];
    const [formInput, setFormInput ] = useState('');
    const [result, setResult] = useState(arr);
    function appendFormInputToAnArray(e) {
      e.preventDefault();
      if (formInput.trim().length === 0) return;
      setResult([...result, formInput]);
      setFormInput('');
    }

    return (
        <PageContainer 
            title='Append Form Input to an Array' 
            description='Append Form Input to an Array.'
            resultDescription='The result arrary is: '
            result={`[${result.join(',')}]`}
            plainbackground={true} >
          <form onSubmit={(e) => appendFormInputToAnArray(e)}>
            <div><input type='text' value={formInput} placeholder='Enter a string to append: ' onChange={(e) => setFormInput(e.target.value)} /></div>
            <div><SubmitButtonInput type='submit' /></div>
          </form>
        </PageContainer>)
}

export default AppendFormInputToAnArray;