
const cb = () => {
    // do Something
    process.nextTick(cb);
};

setTimeout(() => console.log('setTimeout executed'), 5);

// process.nextTick(cb);

setImmediate(() => cb);

console.log('Start');
