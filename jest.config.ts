import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  collectCoverageFrom: [
    "**/pages/*.{js,jsx,ts,tsx}",
    "**/components/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/.next/**"
  ],
  setupFilesAfterEnv: ['./jest.init.ts'],
}

export default config;
