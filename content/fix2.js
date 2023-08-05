/*
const replace = require('replace-in-file');

const options = {
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
    //const ljDate = items.find((x) => x.indexOf('date') > -1);
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
      :  'datePublished: ""';
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
  */

const fs = require('fs');
const readFile = require('fs/promises').readFile;
const path = require('path');
const contentDir = '../blog-lj/drafts/2008/01';
const outputDir = './blog/2008/01';

(async () => {
  const summaryText = `---
title: Livejournal Summary - 2008-01-01
description: Livejournal Summary - 2008-01-01
datePublished: 2008-01-01
dateModified:
category:
tags:
  - livejournal
---\n\n`;
  const posts = [];
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(contentDir);
    // Loop them all with the new for...of
    for (const file of files) {
      console.log('file', file);
      if (file !== 'summary.md' && file.indexOf('.md') > -1) {
        const text = await content(path.join(contentDir, file));

        const items = text.split('\n');
        const title = items
          .find((x) => x.indexOf('title') > -1)
          ?.replace('title: ', '')
          .replace('\r', '');

        let pubDate = items.find((x) => x.indexOf('datePublished') > -1) ?? '';
        const pubDateStr = pubDate.replace('datePublished: ', '');

        if (pubDateStr === '') {
          const otherPubDate = items.find((x) => x.indexOf('date:') > -1);
          pubDate = otherPubDate.replace('date: ', '');
        }

        const postTitle = `## ${title} - ${pubDateStr}`;
        const postContent = text.replace(/---[\S\s]*---/, '');

        posts.push({
          content: `${postTitle}\n\n ${postContent}`,
          pubDate: pubDateStr
        });
      }
    }
    posts.sort(function (a, b) {
      return new Date(a.pubDate) - new Date(b.pubDate);
    });
    await fs.writeFile(
      `${outputDir}/summary.md`,
      `${summaryText}${posts.map((x) => x.content).join('\n\n---\n\n')}`,
      () => {}
    );
  } catch (e) {
    // Catch anything bad that happens
    console.error('Error!', e);
  }
})();
async function content(path) {
  return await readFile(path, 'utf8');
}
