// import {
//   Node,
//   CreateNodeArgs,
//   PluginOptions,
//   CreateSchemaCustomizationArgs,
//   CreatePagesArgs
// } from 'gatsby';
// import cloneDeep from 'clone-deep';

// import {
//   onCreateNode,
//   createSchemaCustomization,
//   createPages
// } from '../gatsby-node';
// import { vi, describe, expect, it } from 'vitest';

// import { GatsbyActionsMock } from './Utils';

// import { config as configFixture } from '../../test/fixtures';

// import * as feedUtils from '../utils/feed';

// const mockedGatsbyActions = vi.mocked(GatsbyActionsMock, true);

// type NodeArgs = CreateNodeArgs<Record<string, unknown>>;

// vi.spyOn(global.console, 'error').mockImplementation(() => {});

// const mockedConsole = vi.mocked(global.console, true);

// vi.mock('../utils/feeds', () => ({
//   createFeed: vi.fn(),
//   initFeedMeta: vi.fn()
// }));

// const mockedFeedUtils = vi.mocked(feedUtils, true);

// vi.mock('../utils/queries', async () => {
//   const postListingFixture = await vi.importActual<
//     typeof import('../../test/fixtures')
//   >('../../test/fixtures').postListing;

//   const testListing = [
//     ...postListingFixture,
//     { ...postListingFixture[0], category: undefined, tags: undefined }
//   ];

//   return {
//     getIndexListing: vi.fn().mockResolvedValue(testListing),
//     getTagListing: vi.fn().mockResolvedValue(testListing),
//     getCategoryListing: vi.fn().mockResolvedValue(testListing)
//   };
// });

// describe('onCreateNode', () => {
//   it('sets proper fields for MDX nodes', async () => {
//     expect.assertions(4);

//     const testNode = {
//       id: 'testId',
//       children: [],
//       parent: 'parentId',
//       internal: {
//         type: 'Mdx',
//         contentDigest: 'testDigest',
//         owner: 'testOwner'
//       },
//       frontmatter: {
//         title: 'Test Title',
//         slug: 'Test Slug'
//       }
//     } as Node;

//     const nodeArgs = {
//       actions: GatsbyActionsMock,
//       node: testNode
//     } as unknown as NodeArgs;

//     const testConfig = cloneDeep(configFixture);
//     testConfig.pathPrefix = '/testPrefix';
//     testConfig.basePath = '/testBasePath';
//     testConfig.website.url = 'https://example.com';

//     const pluginOptions = testConfig as unknown as PluginOptions;

//     if (!onCreateNode) {
//       throw Error('onCreateNode is undefined.');
//     }

//     await onCreateNode(nodeArgs, pluginOptions, () => {});

//     expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
//       node: testNode,
//       name: 'slug',
//       value: '/test-slug'
//     });

//     expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
//       node: testNode,
//       name: 'route',
//       value: '/testBasePath/test-slug'
//     });

//     // expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
//     //   node: testNode,
//     //   name: 'pathName',
//     //   value: '/testPrefix/testBasePath/test-slug'
//     // });

//     // expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
//     //   node: testNode,
//     //   name: 'url',
//     //   value: 'https://example.com/testPrefix/testBasePath/test-slug'
//     // });
//   });

//   it('sets proper slug field for MDX nodes when missing the frontmatter slug field', async () => {
//     expect.assertions(1);

//     const testNode = {
//       id: 'testId',
//       children: [],
//       parent: 'parentId',
//       internal: {
//         type: 'Mdx',
//         contentDigest: 'testDigest',
//         owner: 'testOwner'
//       },
//       frontmatter: {
//         title: 'Test Title'
//       }
//     } as Node;

//     const nodeArgs = {
//       actions: GatsbyActionsMock,
//       node: testNode
//     } as unknown as NodeArgs;

//     // eslint-disable-next-line jest/no-if
//     if (!onCreateNode) {
//       throw Error('onCreateNode is undefined.');
//     }

//     await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

//     expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
//       node: testNode,
//       name: 'slug',
//       value: '/test-title'
//     });
//   });

//   it('logs an error when fails to generate a slug', async () => {
//     expect.assertions(2);

//     const testNode = {
//       id: 'testId',
//       children: [],
//       parent: 'parentId',
//       internal: {
//         type: 'Mdx',
//         contentDigest: 'testDigest',
//         owner: 'testOwner'
//       },
//       frontmatter: {}
//     } as Node;

//     const nodeArgs = {
//       actions: GatsbyActionsMock,
//       node: testNode
//     } as unknown as NodeArgs;

//     // eslint-disable-next-line jest/no-if
//     if (!onCreateNode) {
//       throw Error('onCreateNode is undefined.');
//     }

//     await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

//     expect(mockedConsole.error).toHaveBeenCalledWith(
//       'onCreateNode: Failed to generate a slug for an MDX post. Aborting.'
//     );

//     nodeArgs.node.frontmatter = undefined;
//     mockedConsole.error.mockClear();

//     await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

//     expect(mockedConsole.error).toHaveBeenCalledWith(
//       'onCreateNode: Failed to generate a slug for an MDX post. Aborting.'
//     );
//   });

//   //   it("ignores non-MDX nodes", async () => {
//   //     expect.assertions(1);

//   //     const testNode = {
//   //       id: "testId",
//   //       children: [],
//   //       parent: "parentId",
//   //       internal: {
//   //         type: "not-mdx",
//   //         contentDigest: "testDigest",
//   //         owner: "testOwner",
//   //       },
//   //     } as Node;

//   //     const nodeArgs = {
//   //       actions: GatsbyActionsMock,
//   //       node: testNode,
//   //     } as unknown as NodeArgs;

//   //     // eslint-disable-next-line jest/no-if
//   //     if (!onCreateNode) throw Error("onCreateNode is undefined.");

//   //     mockedGatsbyActions.createNodeField.mockClear();

//   //     await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

//   //     expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledTimes(0);
//   //   });
//   // });

//   // describe("createSchemaCustomization", () => {
//   //   it("sets GraphQL schema types", async () => {
//   //     expect.assertions(1);

//   //     // eslint-disable-next-line jest/no-if
//   //     if (!createSchemaCustomization)
//   //       throw Error("createSchemaCustomization is undefined.");

//   //     await createSchemaCustomization(
//   //       { actions: GatsbyActionsMock } as CreateSchemaCustomizationArgs,
//   //       {} as PluginOptions,
//   //       () => {}
//   //     );

//   //     expect(mockedGatsbyActions.createTypes).toHaveBeenCalledTimes(1);
//   //   });
//   // });

//   // type CreatePagesFirstArg = CreatePagesArgs & {
//   //   traceId: "initial-createPages";
//   // };

//   // describe("createPages", () => {
//   //   it("creates feed and post pages", async () => {
//   //     expect.assertions(5);

//   //     // eslint-disable-next-line jest/no-if
//   //     if (!createPages) throw Error("createPages is undefined.");

//   //     await createPages(
//   //       {
//   //         graphql: jest.fn(),
//   //         actions: GatsbyActionsMock,
//   //       } as unknown as CreatePagesFirstArg,
//   //       {} as PluginOptions,
//   //       () => {}
//   //     );

//   //     expect(mockedFeedUtils.initFeedMeta).toHaveBeenCalledTimes(1);
//   //     expect(mockedGatsbyActions.createPage).toHaveBeenCalledTimes(9);

//   //     expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
//   //       expect.anything(),
//   //       expect.anything(),
//   //       expect.anything(),
//   //       "index"
//   //     );

//   //     expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
//   //       expect.anything(),
//   //       expect.anything(),
//   //       expect.anything(),
//   //       "tag",
//   //       expect.anything()
//   //     );
//   //     expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
//   //       expect.anything(),
//   //       expect.anything(),
//   //       expect.anything(),
//   //       "category",
//   //       expect.anything()
//   //     );
//   //   });
//   // });
// });
