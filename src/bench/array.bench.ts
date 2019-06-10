import * as Benchmark from 'benchmark';
// const Benchmark = require('benchmark');
// const jsonReporter = require('benchmark-json-reporter');

const suite = new Benchmark.Suite('my-bench-suite');

// Just this
// jsonReporter(suite);

suite
  .add('bench-name-1', () => {
      setTimeout(()=>{console.log('Fast done')},1000);
    // Faster heavy process
  })
  // ...
  .add('bench-name-n', () => {
    setTimeout(()=>{console.log('Slow done')},5000);
    // Slower heavy process
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });