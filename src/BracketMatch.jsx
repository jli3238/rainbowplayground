import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

const BracketMatch = () => {
    
    const [bracketString, setBracketString] = useState('');
    function handleBracketStringChange(e) {
      const str = e.currentTarget.value;
      const bracketStr = str.replace(/[^([{)\]}]/g, "");
      setBracketString(bracketStr);
    }
    function areBracketsMatched() {
      let matchingArr = [];
      for (let i = 0; i < bracketString.length; i++) {
        const bracket = bracketString.charAt(i);
        if ((bracket === '}' && matchingArr[matchingArr.length -1] === '{') ||
            (bracket === ']' && matchingArr[matchingArr.length -1] === '[') ||
            (bracket === ')' && matchingArr[matchingArr.length -1] === '(')) {
            matchingArr = matchingArr.slice(0, matchingArr.length - 1);
        }else{
          if (['}', ']', ')'].includes(bracket)) return 'not ';
          matchingArr = [...matchingArr, bracket];
        }
      }
      return matchingArr.length === 0 ? '' : 'not ';
    }

    return (
        <PageContainer 
            title='Are your brackets matched?' 
            description='Check if all brackets are matched in a bracket-only string.'
            resultDescription='The brackets are: '
            result={`${areBracketsMatched()}matched.`}
            plainbackground={true}  >
            <div>
                <label>Enter a bracket-only string: </label>
                <input type="text" value={bracketString} onChange={e=>handleBracketStringChange(e)}/>
            </div>
        </PageContainer>)
}

export default BracketMatch;