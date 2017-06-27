'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test Description', function () {

    it('TestName', function () {
        expect(_index2.default.add(2, 2)).toBe(4);
    });
});