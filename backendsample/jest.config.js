module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/server.js',
        '!**/node_modules/**'
    ],
    coverageDirectory: 'coverage',
    verbose: true,
    testTimeout: 10000,
    // Ignore warnings about deprecated packages
    silent: false
};
