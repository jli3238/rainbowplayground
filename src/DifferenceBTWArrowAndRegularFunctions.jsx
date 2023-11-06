a = {x: 1,
    f:  function () {
     let aa = ({x: 2, b: function () { return this.x}, c: () => this.x});
     let f = function () {return this.x};
     console.log(aa.b());
     console.log(aa.c());
     return aa;
    }
   };
   
a.f()