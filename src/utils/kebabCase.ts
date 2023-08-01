// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
const re = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

export const kebabCase = (str: string) =>
  (String(str ?? '').match(re) || []).map((x) => x.toLowerCase()).join('-');
