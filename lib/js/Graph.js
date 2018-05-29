'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEq = require('react-eq');

var _reactEq2 = _interopRequireDefault(_reactEq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graph = function Graph() {
  var queries = {
    small: 200,
    medium: 400
  };

  return _react2.default.createElement(
    _reactEq2.default,
    { queries: queries },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 243 152', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('polyline', {
        fill: 'none',
        stroke: '#979797',
        points: '0.965433277 151.000649 64.7421875 87.4570312 89.5884416 119.171892 140.592662 53.9173736 164.674737 87.4570312 241.914062 0.9609375'
      })
    )
  );
};

exports.default = Graph;