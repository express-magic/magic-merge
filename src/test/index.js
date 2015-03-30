import {should as sh} from 'chai';
import merge from '../index.js';

var should = sh()
  , arr1 = ['testvalue1']
  , arr2 = ['testvalue2']
  , obj1 = {
      notReplaced: true
    , outer: {
        inner: {
          replaced: false
        }
      }
    }
  , obj2 = {
      outer: {
        inner: {
          replaced: true
        }
      }
    }
;

describe('merge arrays and objects', () => {

  describe('#merge(array, array)', () => {
    it('should return an array  of length 2 with correct values', () => {
      var merged = merge(arr1, arr2);
      merged.should.be.a('array');
      merged.should.have.length.of(2);
      merged[0].should.equal('testvalue1');
      merged[1].should.equal('testvalue2');
    });
    
    it('should always apply array items in the correct order', () => {
      var merged = merge(arr2, arr1);
      merged[0].should.equal('testvalue2');
      merged[1].should.equal('testvalue1');
    });
  });

  describe('#merge(object, object)', () => {
    var merged = merge(obj1, obj2);
    it('should return an object', () => {
      merged.should.be.a('object');
    });
    it('notReplaced key of object 1 should still exist', () => {
      merged.notReplaced.should.equal(obj1.notReplaced);
    });

    it('merged keys and values should match obj2', () => {
      merged.outer.should.deep.equal(obj2.outer);
      merged.outer.inner.replaced.should.equal(obj2.outer.inner.replaced);
    });
  });
  
  describe('#merge(array, object)', () => {
    var merged = merge(arr1, obj2);
    it('should return an array', () => {
      merged.should.be.a('array');
    });
    it('first element should equal "testvalue1"', () => {
      merged[0].should.equal('testvalue1');
    });
    it('merged[1] should deep equal obj2.outer', () => {
      merged[1].outer.should.deep.equal(obj2.outer);
    });
  });

  describe('#merge(object, array)', () => {
    var merged = merge(obj2, arr2);
    it('should return an object', () => {
      merged.should.be.a('object');
    })
    it('should have "testvalue2" at zero index', () => {
      merged[0].should.equal('testvalue2');
    });
    it('should have the object values set correctly', () => {
      merged.outer.should.deep.equal(obj2.outer);
    });
  });

  describe('#merge(object, undefined)', () => {
    var merged = merge(obj1);
    it('should return an unchanged object', () => {
      merged.should.be.deep.equal(obj1);
    });
  });


  describe('#merge(undefined, undefined)', () => {
    var merged = merge();
    it('should return undefined', () => {
      (typeof merged === 'undefined').should.be.true;
    });
  });

  describe('#merge(undefined, undefined)', () => {
    var merged = merge();
    it('should return undefined', () => {
      (typeof merged === 'undefined').should.be.true;
    });
  });
  
});
