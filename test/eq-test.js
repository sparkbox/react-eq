import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ElementQuery from '../src/eq';

describe('Element Queries', () => {
  it('renders the child component', () => {
    const rendered = shallow(
      <ElementQuery>
        <div>Hello 👋🏼</div>
      </ElementQuery>
    );

    expect(rendered.contains(<div>Hello 👋🏼</div>)).to.equal(true);
  })
});
