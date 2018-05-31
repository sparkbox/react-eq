'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEq = require('react-eq');

var _reactEq2 = _interopRequireDefault(_reactEq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Movies = function Movies() {
  var queries = {
    small: 340,
    medium: 400
  };

  return _react2.default.createElement(
    _reactEq2.default,
    { queries: queries },
    _react2.default.createElement(
      'section',
      { className: 'movies' },
      _react2.default.createElement(
        'header',
        { className: 'actor' },
        _react2.default.createElement(
          'div',
          { className: 'actor-image-container' },
          _react2.default.createElement('img', {
            className: 'actor-image',
            src: 'https://ia.media-imdb.com/images/M/MV5BMjE2MjI4NTQxN15BMl5BanBnXkFtZTgwMDMyMDg4NTE@._V1_UY317_CR18,0,214,317_AL_.jpg'
          })
        ),
        _react2.default.createElement(
          'h1',
          { className: 'actor-name' },
          'Jack Black'
        )
      ),
      _react2.default.createElement(
        'h2',
        { className: 'movie-header' },
        'Filmography'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'movie-list' },
        _react2.default.createElement(
          'li',
          { className: 'movie-list--item' },
          _react2.default.createElement('img', {
            className: 'movie-image',
            src: 'https://ia.media-imdb.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
          }),
          _react2.default.createElement(
            'span',
            { className: 'movie-title' },
            'Jumanji: Welcome to the Jungle'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'movie-list--item' },
          _react2.default.createElement('img', {
            className: 'movie-image',
            src: 'https://ia.media-imdb.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg'
          }),
          _react2.default.createElement(
            'span',
            { className: 'movie-title' },
            'Kung Fu Panda'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'movie-list--item' },
          _react2.default.createElement('img', {
            className: 'movie-image',
            src: 'https://ia.media-imdb.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
          }),
          _react2.default.createElement(
            'span',
            { className: 'movie-title' },
            'School of Rock'
          )
        )
      )
    )
  );
};

exports.default = Movies;