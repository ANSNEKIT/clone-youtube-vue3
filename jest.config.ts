import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}

export default jestConfig
