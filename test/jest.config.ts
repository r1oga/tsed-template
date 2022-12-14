import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from '../tsconfig.json'

const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['index.ts', '/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleDirectories: ['node_modules', __dirname],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [compilerOptions.baseUrl],
  preset: 'ts-jest',
  rootDir: '..',
  setupFilesAfterEnv: ['./test/setup.ts'],
  verbose: true,
}

export default jestConfig
