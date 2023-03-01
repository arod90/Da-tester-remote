var _ = require('lodash');

var methods = {
  instatags: {
    //only takes on argument data
    evalHashtagFrequency: function (data) {
      var tags = {};
      //forEach only works in arrays, so mock an array
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
          freq: tags[tag],
        });
      }
      // Finally we have to sort the array in descending order (higher frequencies first),
      // and return it. Check the "Array.prototype.sort()" docs.
      return sortable.sort(function (a, b) {
        return b.freq - a.freq;
      });
    },

    //
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
    },
  },

  underline: {
    //The _.max() method is used to find the maximum element from the array.
    //iteratee is a function that is going to be called on each element of the array
    //Context is always the value of the this keyword
    max: function (list, iteratee, context) {
      var max = {};
      //if iterateee exists, then we want to apply iteratee on each element of the array
      if (iteratee) {
        // each Iterates over a list of elements, yielding each in turn to an iteratee function.
        // If list is a JavaScript object, iteratee's arguments will be (value, key, list)
        _.each(list, (el, key, coll) => {
          var rank = iteratee.call(context, el, key, coll);
          //if rank is not undefined it means something is already being stored as the max
          if (
            typeof rank === 'number' &&
            (max.rank === undefined || rank > max.rank)
          ) {
            max.el = el;
            max.rank = rank;
          }
        });
      } else {
        _.each(list, (el) => {
          if (typeof el === 'number' && (max.el === undefined || el > max.el))
            max.el = el;
        });
      }
      //if the list is empty we return -infinity
      return max.el === undefined ? Infinity : max.el;
    },

    min: function (list, iteratee, context) {},

    size: function (list) {
      if (Array.isArray(list)) return list.length;
      if (typeof list === 'object' && list !== null)
        return Object.keys(list).length;
      return 0;
    },
  },
};

module.exports = methods;
