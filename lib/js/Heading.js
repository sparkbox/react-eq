'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEq = require('react-eq');

var _reactEq2 = _interopRequireDefault(_reactEq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading() {
  var queries = {
    small: 200,
    medium: 400
  };

  return _react2.default.createElement(
    _reactEq2.default,
    { queries: queries },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 160 125', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
        _react2.default.createElement('path', { d: 'M0.5,124.5 L159.5,0.5', id: 'Line', stroke: '#979797' })
      )
    )
  );
};

exports.default = Heading;