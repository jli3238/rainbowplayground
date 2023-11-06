import React from 'react';
import PageContainer from './PageContainer';

const GetMostPopularNameInAnArray = () => {
    
    const nameArray = ['AaAa','AbAb', 'CaCa', 'BaBa', 'BaBa', 'CaCa', 'CaCa', 'BaBa', 'BaBa', 'BaBa' ];
    function getMostPopularNameInAnArray(names) {
      // O(n)
      //   let s = {
      //     oneHead: null,
      //     oneTail: null,
      //     manyHead: null,
      //     manyTail: null,
      // }
      // let m = new Map();
      // for (let i = 0; i < nameArray.length; i++) {
      //     let x = nameArray[i];
      //     if (m.has(x)) {
      //         let node = m.get(x);
      //         if (node.val === 1) {
      //             node.val = node.val+1;
      //             if (!node.prev) {
      //                 s.oneHead = node.next;
      //             }
      //             if (!node.next) {
      //                 s.oneTail = node.prev;
      //             }
      //             if (node.prev) node.prev.next = node.next;
      //             if (node.next) node.next.prev = node.prev;
      //             // if (s.manyHead) {
      //             //     s.manyTail.next = node;
      //             //     node.prev 
      //             // }
      //         }
      //     } else {
      //         let node = {prev: null, next: null, val: 1, x};
      //         if (s.oneHead) {
      //             s.oneTail.next = node;
      //             node.prev = s.oneTail;
      //             s.oneTail = node;
      //         } else {
      //             s.oneHead = node;
      //             s.oneTail = node;
      //         }
      //         m.set(x, node);
      //     }
      // }
      // return `${s.oneTail.x}`;

      // // O(nlog(n))
      let m = new Map();
      // {x, i, n};
      nameArray.forEach((x, i) => {
          if (m.has(x)) {
              let node = m.get(x);
              node.n = node.n+1;
          } else {
              let node = {x, i, n:1};
              m.set(x, node);
          }
      });
      let sorted = [...m.values()].sort((a,b) => a.n === b.n ? a.i - b.i : b.n - a.n);
      return sorted[0].x;

      // // // O(n^2)
      // // // let popularNameSoFar = '';
      // // // let mostOccurrences = 0;
      // // // for (let i = 0; i < names.length; i++) {
      // // //   if (getOccurrences(names, names[i]) > mostOccurrences) {
      // // //       mostOccurrences = getOccurrences(names, names[i]);
      // // //       popularNameSoFar = names[i]; 
      // // //   }
      // // // }
      // // // return popularNameSoFar;
    }
    // // // const getOccurrences = (arr, str) => {
    // // //   return arr.reduce((a, v) => (v === str ? a + 1 : a), 0);
    // // // };
    return (
        <PageContainer 
            title='Most Popular Name' 
            description='Get Most Popular Name in an Array.'
            resultDescription='The most popular name in this array is: '
            result={`${getMostPopularNameInAnArray(nameArray)}`} >
            <div>
              <div>{`name array: ${nameArray.join(',')}`}</div>
            </div>
        </PageContainer>)
}

export default GetMostPopularNameInAnArray;