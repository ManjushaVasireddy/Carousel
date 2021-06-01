module.exports = {
    // verbose: true,
    // testURL: "http://localhost/",
    // globals: {
    //     navigator: {
    //         userAgent: "node.js",
    //         appVersion: ""
    //     }
    // },

    moduleFileExtensions: ["js", "json", "ts", "tsx", "vue"],
    transform: {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.ts$": "ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,vue}", "!src/app.ts", "!**/node_modules/**"],
    coverageDirectory: "<rootDir>/test/coverage",
    modulePaths: ["<rootDir>"],
    snapshotSerializers: ["jest-serializer-vue"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
