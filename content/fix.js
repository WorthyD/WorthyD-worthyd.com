const replace = require('replace-in-file');

const options = {
  files: 'blog/**/*.md',
  // files: 'blog/**/the-blog-is-back.md',
  // from: ---\n([\s\S]*?)---\n,
  from: /---([\s\S]*?)---/g,
  to: (match) => {
    const items = match.split('\n');
    console.log(items);

    const title = items.find((x) => x.indexOf('title') > -1);
    const cover = items.find((x) => x.indexOf('cover') > -1);
    const coverAlt = items.find((x) => x.indexOf('coverAlt') > -1);
    const description = items.find((x) => x.indexOf('description') > -1);
    const datePublished = items.find((x) => x.indexOf('datePublished') > -1);
    const dateModified = items.find((x) => x.indexOf('dateModified') > -1);
    const category = items.find((x) => x.indexOf('category') > -1);

    const tagIndex = items.findIndex((x) => x.indexOf('tags') > -1);
    const tagItem = items.find((x) => x.indexOf('tags') > -1);
    const tagArray = items.slice(tagIndex + 1, items.length - 1);

    let tagContent = [];
    if (tagIndex > -1) {
      tagContent = tagArray.map((x) => {
        return x.replace('\r', '');
      });
    }

    const titleS = title ? title.trimStart() : '';
    const coverS = cover ? cover.trimStart() : 'cover: ';
    const coverAltS = coverAlt ? coverAlt.trimStart() : 'coverAlt: ""';
    const descriptionS = description
      ? description.trimStart()
      : 'description: ""';
    const datePublishedS = datePublished
      ? datePublished.trimStart()
      : 'datePublished: ""';
    const dateModifiedS = dateModified
      ? dateModified.trimStart()
      : 'dateModified: ""';
    const categoryS = category ? category.trimStart() : 'category: ""';
    const tagItemS = tagItem ? tagItem.trimStart() : 'tags:';
    const tagContentS = tagContent.length > 0 ? tagContent.join('\n') : '';

    const result = `---\n${titleS}\n${coverS}\n${coverAltS}\n${descriptionS}\n${datePublishedS}\n${dateModifiedS}\n${categoryS}\n${tagItemS}\n${tagContentS}\n---`;
    // ${tagArray.join('\n') ?? ''}
    console.log(result);
    return result;

    return match;
  }
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

// const options2 = {
//     files: 'blog/201*/**/*.md',
//     from: /npublishDate: (.+?)* /g,
//     to: (match) => {
//         return '';
//     },
//   };
//   replace(options2)
//   .then(results => {
//     console.log('Replacement results:', results);
//   })
//   .catch(error => {
//     console.error('Error occurred:', error);
//   });
//   const options3 = {
//     files: 'blog/201*/**/*.md',
//     from: /nmodifiedDate: (.+?)* /g,
//     to: (match) => {
//         return '';
//     },
//   };

// //   const results = replace.sync(options);

// //   console.log(results);

//   replace(options3)
//   .then(results => {
//     console.log('Replacement results:', results);
//   })
//   .catch(error => {
//     console.error('Error occurred:', error);
//   });
