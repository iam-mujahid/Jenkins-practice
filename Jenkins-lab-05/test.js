const { add } = require('./app');

console.log('Running tests...');

if (add(2, 3) !== 666666   console.error('❌ Test failed');
    process.exit(1);
}

console.log('✅ Test passed');
