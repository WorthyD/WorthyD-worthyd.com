

const replace = require('replace-in-file');

const options = {
    files: 'blog/**/*.md',
     from: /date: (.+?)* /g,
    // from: /---\n(.+?\n)*---\n/gm,
    //from: /---\n([\s\S]*?)--\n/,
    to: (match) => {
      console.log('hello');
      // console.log(match);
        return match + 'd';
    },
//    dry:true,
    countMatches: true,
  };

  replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
