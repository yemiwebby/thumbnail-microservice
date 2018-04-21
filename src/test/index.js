import chai from 'chai';
import Images from '../controllers/images';

// const assert = require('chai').assert;
// const Images = require('../controllers/images').sample;

chai.assert();

describe('Service', () => {
    describe('sample()', () => {
        it('Should return Hello', () => {
            assert.equal(Images.sample(), 'Hello');
        })
    })
});