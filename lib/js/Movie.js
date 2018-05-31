"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Movie = function Movie(_ref) {
  var title = _ref.title,
      img = _ref.img;
  return _react2.default.createElement(
    "li",
    { className: "movie-list--item" },
    _react2.default.createElement("img", { className: "movie-image", src: img }),
    _react2.default.createElement(
      "span",
      { className: "movie-title" },
      title
    )
  );
};

exports.default = Movie;