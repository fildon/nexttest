import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['./jest.init.ts'],
}

export default config;
