const month = '08';
const year = '2004';

const fs = require('fs');
const readFile = require('fs/promises').readFile;
const path = require('path');
const contentDir = `../blog-lj/drafts/${year}/${month}`;
const outputDir = `./blog/${year}/${month}`;

(async () => {
  const summaryText = `---
title: LiveJournal Summary - ${year}-${month}-01
description: LiveJournal Summary - ${year}-${month}-01
datePublished: ${year}-${month}-01
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

        const pubDate = items.find((x) => x.indexOf('datePublished') > -1) ?? '';
        let pubDateStr = pubDate.replace('datePublished: ', '');

        if (pubDateStr === '') {
          const otherPubDate = items.find((x) => x.indexOf('date:') > -1);
          pubDateStr = otherPubDate.replace('date: ', '');
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
