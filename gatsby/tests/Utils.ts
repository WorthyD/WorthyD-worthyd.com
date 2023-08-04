import { Actions } from 'gatsby';
import { vi } from 'vitest';

// eslint-disable-next-line import/prefer-default-export
export const GatsbyActionsMock = {
  createPage: vi.fn(),
  deletePage: vi.fn(),
  deleteNode: vi.fn(),
  createNode: vi.fn(),
  touchNode: vi.fn(),
  createNodeField: vi.fn(),
  createParentChildLink: vi.fn(),
  setWebpackConfig: vi.fn(),
  replaceWebpackConfig: vi.fn(),
  setBabelOptions: vi.fn(),
  setBabelPlugin: vi.fn(),
  setBabelPreset: vi.fn(),
  createJob: vi.fn(),
  createJobV2: vi.fn(),
  setJob: vi.fn(),
  endJob: vi.fn(),
  setPluginStatus: vi.fn(),
  createRedirect: vi.fn(),
  addThirdPartySchema: vi.fn(),
  createTypes: vi.fn(),
  createFieldExtension: vi.fn(),
  printTypeDefinitions: vi.fn(),
  unstable_createNodeManifest: vi.fn(),
  setRequestHeaders: vi.fn(),
  addGatsbyImageSourceUrl: vi.fn()
} as Partial<Actions>;
