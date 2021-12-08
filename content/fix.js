

const replace = require('replace-in-file');

const options = {
    files: 'blog/201*/**/*.md',
    from: /date: (.+?)* /g,
    to: (match) => {
        const x =  match.split(': ')
        const newThing = `${match}\ndatePublished: ${x[1]} \ndateModified: ${x[1]}`
        return newThing;
    },
  };
  console.log('stuff');

//   const results = replace.sync(options);
  
//   console.log(results);

  replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
const options2 = {
    files: 'blog/201*/**/*.md',
    from: /npublishDate: (.+?)* /g,
    to: (match) => {
        return '';
    },
  };
  console.log('stuff');

//   const results = replace.sync(options);
  
//   console.log(results);

  replace(options2)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
  const options3 = {
    files: 'blog/201*/**/*.md',
    from: /nmodifiedDate: (.+?)* /g,
    to: (match) => {
        return '';
    },
  };

//   const results = replace.sync(options);
  
//   console.log(results);

  replace(options3)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });