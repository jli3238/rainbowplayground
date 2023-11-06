import React from 'react';
import PageContainer from './PageContainer';

const GetAllPermutationsOfAString = () => {
  const stringFeed = 'abb';
  function getAllPermutationsOfAString(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(getAllPermutationsOfAString(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  }

  return (
      <PageContainer 
          title='Permutation of a String' 
          description='Get all permutaion of a string.'
          resultDescription='All permutation of the string are: '
          result={`${getAllPermutationsOfAString(stringFeed).join(',')}`} >
          <div>
              <label>The string: {stringFeed}</label>
          </div>
      </PageContainer>)
}

export default GetAllPermutationsOfAString;