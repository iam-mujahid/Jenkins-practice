const { add } = require('./app');

console.log('Running tests...');

if (add(2, 3) !== 6){
    console.error('❌ Test failed');
    process.exit(1);
}

console.log('✅ Test passed');
