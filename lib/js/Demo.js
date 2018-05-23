'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  return [_react2.default.createElement(
    'div',
    {
      className: 'demo-sidebar',
      style: { width: '33%', display: 'inline-block', backgroundColor: 'red' }
    },
    _react2.default.createElement(_Heading2.default, null)
  ), _react2.default.createElement(
    'div',
    {
      className: 'demo-main',
      style: {
        width: '66%',
        display: 'inline-block',
        backgroundColor: 'yellow'
      }
    },
    _react2.default.createElement(_Heading2.default, null)
  )];
};

exports.default = Demo;