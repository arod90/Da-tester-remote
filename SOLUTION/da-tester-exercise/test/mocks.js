const mocks = {
  //think of these as hashtags on social media posts, all posts in a feed
  instatags: {
    userMedia: [
      {
        tags: ['JavaScript', 'node.js', 'underscore.js'],
      },
      {
        tags: ['Testing', 'Chai', 'JavaScript'],
      },
      {
        tags: ['node.js', 'Chai', 'JavaScript'],
      },
      {
        tags: ['JavaScript', 'node.js'],
      },
    ],
    sortedMedia: [
      { tag: 'JavaScript', freq: 4 },
      { tag: 'node.js', freq: 3 },
      { tag: 'Chai', freq: 2 },
      { tag: 'Testing', freq: 1 },
      { tag: 'underscore.js', freq: 1 },
    ],
  },

  underline: {
    //regular mock data to test the underline functions
    numArray: [10, 210, 34.5, 7, 8, 27],
    numArrayMax: 210,
    numArraySize: 6,
    objArray: [
      { name: 'andres', age: 32 },
      { name: 'joe', age: 27 },
      { name: 'jane', age: 25 },
    ],
    objArrayMax: { name: 'andres', age: 32 },
    mixedArray: ['andres', 32, 'joe', 27, 'jane', 25],
    mixedArrayMax: 32,
  },
};

module.exports = mocks;
