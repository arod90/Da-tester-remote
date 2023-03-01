
var _ = require('lodash');

var methods = {

  instatags: {

    evalHashtagFrequency: function (data) {

      var tags = {};

      data.forEach(function (media) {
        media.tags.forEach(function (tag) {
          if (tags[tag]) tags[tag]++;
          else tags[tag] = 1;
        });
      });

      // Here we transform the tags object into an array, so we'll be able to sort it.
      var sortable = [];
      for (var tag in tags) {
        sortable.push({
          tag: tag,
          freq: tags[tag]
        });
      }

      // Finally we have to sort the array in descending order (higher frequencies first),
      // and return it. Check the "Array.prototype.sort()" docs.
      return sortable.sort(function (a, b) {
        return b.freq - a.freq;
      });
    },

    filterTags: function (tags, minFrequency) {
      var filtered = [];
      tags.forEach(function (tag) {
        if (tag.freq >= minFrequency) filtered.push(tag);
      });
      return filtered;
    },

    filterMedia: function (userMedia, tag) {
      var filtered = [];
      userMedia.forEach(function (media) {
        if (media.tags.includes(tag)) filtered.push(media);
      });
      return filtered;
    }

  },

  underline: {

    max: function (list, iteratee, context) {

    },

    min: function (list, iteratee, context) {

    },

    size: function (list) {

    }

  }

};

module.exports = methods;
