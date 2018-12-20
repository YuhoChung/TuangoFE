// const test = require('./server');

// var func = (a,b) => void doesNotReturn();
// function aaa(a,b) {
//     console.log("a+b");
// };


// let fn = () => void aaa();

// console.log(func());
// console.log(fn());
// console.log(fn());
// var a = fn();
// console.log(a);


// test.print();

const events = require('events');

var emitter = new events.EventEmitter();

emitter.addListener('aa',function(a,b) {
    console.log('callback!!!'+a+b);
})

setTimeout(function() {emitter.emit('aa','hello',1)},3000);


