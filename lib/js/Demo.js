'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Movies = require('./Movies');

var _Movies2 = _interopRequireDefault(_Movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  return [_react2.default.createElement(
    'div',
    {
      key: 'sidebar',
      className: 'demo-sidebar',
      style: { width: '66%', display: 'inline-block' }
    },
    _react2.default.createElement(_Movies2.default, null)
  ), _react2.default.createElement(
    'div',
    {
      key: 'mainContent',
      className: 'demo-main',
      style: { width: '33%', display: 'inline-block' }
    },
    _react2.default.createElement(_Movies2.default, null)
  )];
};

exports.default = Demo;