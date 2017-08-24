import { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import autobind from 'autobind-decorator';
import './custom-event';

const RESIZE_THROTTLE = 500;

class ElementQuery extends Component {
  constructor(props) {
    super(props);

    this.state = { currentEQ: '' };

    if (!Object.keys(props.queries).length) {
      console.warn('No `queries` specified for ElementQuery');
    }
  }

  componentDidMount() {
    this.checkWidth();

    if (typeof window === 'object') {
      window.addEventListener('resize', throttle(this.checkWidth, RESIZE_THROTTLE));
    }
  }

  copyChild(child) {
    return cloneElement(child, {
      ref: this.createRef,
    });
  }

  @autobind
  createRef(el) {
    this.props.queryRef(el);
    this.containingEl = el;
  }

  @autobind
  checkWidth() {
    const currentWidth = this.containingEl.offsetWidth;
    const matches = [];

    Object.keys(this.props.queries).forEach((size) => {
      if (this.props.queries[size] <= currentWidth) {
        matches.push(size);
      }
    });

    this.setState({ currentEQ: matches.join(' ') }, this.apply);
  }

  @autobind
  apply() {
    const prevAttr = this.containingEl.getAttribute('data-eq-state');
    this.containingEl.setAttribute('data-eq-state', this.state.currentEQ);

    if (prevAttr !== this.state.currentEQ) {
      const e = new CustomEvent('eq-update', { bubbles: true });
      this.containingEl.dispatchEvent(e);
    }
  }

  render() {
    if (!this.props.queries) return null;

    return this.copyChild(this.props.children);
  }
}

ElementQuery.propTypes = {
  queries: PropTypes.object.isRequired, /* eslint react/forbid-prop-types: 0*/
  children: PropTypes.element.isRequired,
  queryRef: PropTypes.func,
};

ElementQuery.defaultProps = {
  queries: {},
  queryRef() {},
};

module.exports = ElementQuery;
