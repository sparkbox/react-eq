'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEq = require('react-eq');

var _reactEq2 = _interopRequireDefault(_reactEq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  var queries = {
    small: 200,
    medium: 400
  };

  return _react2.default.createElement(
    _reactEq2.default,
    { queries: queries },
    _react2.default.createElement(
      'h1',
      null,
      'Hello'
    )
  );
};

exports.default = Demo;