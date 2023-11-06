import React from 'react';
import PageContainer from './PageContainer';

const GetAllNodeIdsFromAnAPIReturningJSONData = () => {
  const jsonData = {
    id: 'toplevelid',
    person: {
      id: 'id1',
      name: 'name1'
    },
    toolset1: {
      id: 'id1.5',
      tool1: {
        id: 'id2',
        name: 'name2'
      },
      tool2: {
        too2v1: {
          id: 'id3',
          name: 'name3'
        }
      },
      arr: [{id:'asdf1'}, {id:'asdf2'}]
    }
  };
  function getAllNodeIdsFromAnAPIReturningJSONData(node) {
    let res = [];
    if (!node) {
      return res;
    }
    if (node.id) {
      res.push(node.id);
    }
    for (let v of Object.values(node)) {
      if (typeof v === 'object' /*&& !Array.isArray(v)*/) {
        res.push(...getAllNodeIdsFromAnAPIReturningJSONData(v));
      }
    }
    return res;
  }

    return (
        <PageContainer 
            title='All Node Ids in JSON Data' 
            description='Get All Node Ids from an API Returning JSON Data.'
            resultDescription='All node ids are: '
            result={`${getAllNodeIdsFromAnAPIReturningJSONData(jsonData)}`} >
        </PageContainer>)
}

// let fib = (n) => ((n <= 1) ? 1 : fib(n-1) + fib(n-2));
// (() => {
// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 100);
// console.log(fib(42));
// new Promise((resolve) => {console.log(4); resolve()});
// (async () => console.log(8))()
// setTimeout(() => console.log(6), 0);
// new Promise(() => console.log(7));
// console.log(5);
// })()

// a = {x: 1,
//      f:  function () {
//       let aa = ({x: 2, b: function () { return this.x}, c: () => this.x});
//       let f = function () {return this.x};
//       console.log(aa.b());
//       console.log(aa.c());
//       return aa;
//      }
//     };

// if f is 'function'
// o.f() === f.bind(o)();
// if f is 'arrow'
// o.f() === f.bind(this);
export default GetAllNodeIdsFromAnAPIReturningJSONData;