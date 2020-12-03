import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  setupFilesAfterEnv: ['./jest.init.ts'],
}

export default config;
