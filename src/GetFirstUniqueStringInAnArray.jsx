import React from 'react';
import PageContainer from '../src/PageContainer';

const GetFirstUniqueStringInAnArray = () => {
    
    const stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'b', 'c', 'd', 'f', 'g'];

    function getFirstUniqueStringInAnArray() {
       // O(n)
        let s = {
            oneHead: null,
            oneTail: null,
            manyHead: null,
            manyTail: null,
        }
        let m = new Map();
        for (let i = 0; i < stringArr.length; i++) {
            let x = stringArr[i];
            if (m.has(x)) {
                let node = m.get(x);
                if (node.val === 1) {
                    node.val = node.val+1;
                    if (!node.prev) {
                        s.oneHead = node.next;
                    }
                    if (!node.next) {
                        s.oneTail = node.prev;
                    }
                    if (node.prev) node.prev.next = node.next;
                    if (node.next) node.next.prev = node.prev;
                    // if (s.manyHead) {
                    //     s.manyTail.next = node;
                    //     node.prev 
                    // }
                }
            } else {
                let node = {prev: null, next: null, val: 1, x};
                if (s.oneHead) {
                    s.oneTail.next = node;
                    node.prev = s.oneTail;
                    s.oneTail = node;
                } else {
                    s.oneHead = node;
                    s.oneTail = node;
                }
                m.set(x, node);
            }
        }
        return s.oneHead ? `${s.oneHead.x}` : 'No unique string found.';

        // // O(nlog(n))
        // // let m = new Map();
        // // // {x, i, n};
        // // stringArr.forEach((x, i) => {
        // //     if (m.has(x)) {
        // //         let node = m.get(x);
        // //         node.n = node.n+1;
        // //     } else {
        // //         let node = {x, i, n:1};
        // //         m.set(x, node);
        // //     }
        // // });
        // // let sorted = [...m.values()].sort((a,b) => a.n === b.n ? a.i - b.i : a.n - b.n);
        // // return sorted[0].n === 1 ? sorted[0].x : 'No unique string found';
        
        // // // O(n^2)
        // //     // if (getOccurrences(stringArr, stringArr[i]) === 1) {
        // //     //     return stringArr[i]; 
        // //     // }
        // // // return 'No unique string found';
    }
    // // // const getOccurrences = (arr, str) => {
    // // //     return arr.reduce((a, v) => (v === str ? a + 1 : a), 0);
    // // // };
    return (
        <PageContainer 
            title='What is the first unique string?' 
            description='Get the first unique string in a string array.'
            resultDescription='The first unique string in this array is: '
            result={getFirstUniqueStringInAnArray()} >
            <div>
                <div>{`string array: ${stringArr.join(',')}`}</div>
            </div>
        </PageContainer>)
}

export default GetFirstUniqueStringInAnArray;