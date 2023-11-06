let fib = (n) => ((n <= 1) ? 1 : fib(n-1) + fib(n-2));
const networkRequest = () => { setTimeout(() => {console.log('async code'); }, 2000)};
(() => {
console.log(1);
console.log(2);
networkRequest();
setTimeout(() => console.log(3), 100);
console.log(fib(42));
new Promise((resolve) => {console.log(4); resolve()});
(async () => console.log(8))()
setTimeout(() => console.log(6), 0);
new Promise(() => console.log(7));
console.log(5);
})()