'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

require('custom-event-autopolyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var RESIZE_THROTTLE = 500;

var ElementQuery = (_class = function (_Component) {
  _inherits(ElementQuery, _Component);

  function ElementQuery(props) {
    _classCallCheck(this, ElementQuery);

    var _this = _possibleConstructorReturn(this, (ElementQuery.__proto__ || Object.getPrototypeOf(ElementQuery)).call(this, props));

    _this.state = { currentEQ: '' };

    if (!Object.keys(props.queries).length) {
      console.warn('No `queries` specified for ElementQuery');
    }
    return _this;
  }

  _createClass(ElementQuery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkWidth();

      if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
        window.addEventListener('resize', (0, _throttle2.default)(this.checkWidth, RESIZE_THROTTLE));
      }
    }
  }, {
    key: 'copyChild',
    value: function copyChild(child) {
      return (0, _react.cloneElement)(child, {
        ref: this.createRef
      });
    }
  }, {
    key: 'createRef',
    value: function createRef(el) {
      this.props.queryRef(el);
      this.containingEl = el;
    }
  }, {
    key: 'checkWidth',
    value: function checkWidth() {
      var _this2 = this;

      var currentWidth = this.containingEl.offsetWidth;
      var matches = [];

      Object.keys(this.props.queries).forEach(function (size) {
        if (_this2.props.queries[size] <= currentWidth) {
          matches.push(size);
        }
      });

      this.setState({ currentEQ: matches.join(' ') }, this.apply);
    }
  }, {
    key: 'apply',
    value: function apply() {
      var prevAttr = this.containingEl.getAttribute('data-eq-state');
      this.containingEl.setAttribute('data-eq-state', this.state.currentEQ);

      if (prevAttr !== this.state.currentEQ) {
        var e = new CustomEvent('eq-update', { bubbles: true });
        this.containingEl.dispatchEvent(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.queries) return null;

      return this.copyChild(this.props.children);
    }
  }]);

  return ElementQuery;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'createRef', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'createRef'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkWidth', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'checkWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'apply', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'apply'), _class.prototype)), _class);


ElementQuery.propTypes = {
  queries: _propTypes2.default.object.isRequired, /* eslint react/forbid-prop-types: 0*/
  children: _propTypes2.default.element.isRequired,
  queryRef: _propTypes2.default.func
};

ElementQuery.defaultProps = {
  queries: {},
  queryRef: function queryRef() {}
};

module.exports = ElementQuery;