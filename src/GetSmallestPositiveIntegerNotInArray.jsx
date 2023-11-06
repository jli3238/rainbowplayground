import React from 'react';
import PageContainer from './PageContainer';

const GetSmallestPositiveIntegerNotInArray = () => {
  // eslint-disable-next-line no-sparse-arrays
  const arrFeed = [-1, -2, 1, 3, 6, , 1, 2, 5];
  function getSmallestPositiveIntegerNotInArray(arr) {
    const aarPos = arr.filter(elem => elem > 0);
    if (aarPos.length === 0) return 1;
    const arrPosWODuplicates = [...new Set(aarPos)];
    const aarPosWODuplicatesSorted = arrPosWODuplicates.sort((a,b) => a-b);
    console.log(aarPosWODuplicatesSorted);
    for (let i = 1; i < aarPosWODuplicatesSorted[aarPosWODuplicatesSorted.length -1]; i++) {
        if (!aarPosWODuplicatesSorted.includes(i)) return i;
    };
    return "Not found";
  }

  return (
      <PageContainer 
          title='Smallest Positive Integer Not In Array' 
          description='Get Smallest Positive Integer Not In Array.'
          resultDescription='Smallest Positive Integer Not In Array is: '
          result={`${getSmallestPositiveIntegerNotInArray(arrFeed)}`} >
          <div>
              <label>The arr: {arrFeed.join(',')}</label>
          </div>
      </PageContainer>)
}

export default GetSmallestPositiveIntegerNotInArray;
