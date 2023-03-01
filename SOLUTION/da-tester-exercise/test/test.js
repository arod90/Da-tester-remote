'use strict';

require('chai').should();

const chai = require('chai');
// const assert = chai.assert;
// const expect = chai.expect;
// const should = chai.should;

var methods = require('../index.js');
var instatags = methods.instatags;
var underline = methods.underline;
var mocks = require('./mocks.js');

describe('Instatags', function () {
  describe('evalHashtagFrequency', function () {
    const data = mocks.instatags.userMedia;
    // console.log(userMedia);
    //this test is important because evalHashtagFrequency uses .forEach which is an array method, would work with objects
    it('The data passed to evalHashtagFrequency should be an array', function () {
      // instatags.evalHashtagFrequency(mocks.instatags.userMedia).should.be.a('array');
      instatags.evalHashtagFrequency(data).should.be.a('array');
    });
    // console.log(instatags.evalHashtagFrequency(data));
    it('UserMedia data should have a tags property', function () {
      instatags.evalHashtagFrequency(data)[0].should.haveOwnProperty('tag');
    });
    it('SortedMedia should have a freq property', function () {
      instatags.evalHashtagFrequency(data)[0].should.haveOwnProperty('freq');
    });
    it('should not modify the original data', function () {
      instatags.evalHashtagFrequency(data);
      data.should.eql(mocks.instatags.userMedia);
    });
    it('should return an empty array if there is no data', function () {
      instatags.evalHashtagFrequency([]).should.eql([]);
    });
    it('0 should equal 0', function () {
      '0'.should.eql('0');
    });
  });
});

describe('Underline', function () {
  describe('max', function () {
    it('should return the max value in a list', () => {
      underline
        .max(mocks.underline.numArray)
        .should.equal(mocks.underline.numArrayMax);
      // .should.equal(210);
    });
    it('should return the max value in a list of objects', () => {
      underline
        .max(mocks.underline.objArray, (person) => person.age)
        .should.deep.equal(mocks.underline.objArrayMax);
    });
    it('should return Infinity when there is no list with numeric values', function () {
      underline.max([]).should.equal(Infinity);
      underline.max({}).should.equal(Infinity);
      underline.max(NaN).should.equal(Infinity);
    });
    describe('Size', () => {
      it('should return the size of a list', function () {
        underline.size([]).should.equal(0);
        underline
          .size(mocks.underline.numArray)
          .should.equal(mocks.underline.numArraySize);
      });
    });
  });
});
