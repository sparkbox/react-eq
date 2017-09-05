import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import cheerio from 'cheerio';

import ElementQuery from '../src/eq';

describe('Element Queries', () => {
  let iframe;
  let appContainer;

  beforeEach(() => {
    iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    appContainer = document.createElement('div');
    appContainer.id = 'app';

    iframe.contentDocument.body.appendChild(appContainer);
  });

  afterEach(() => {
    document.body.removeChild(iframe);
  });

  describe('starting size', () => {
    it('when medium, adds `data-eq-state="medium"` to the child wrapper', () => {
      const style = { width: '900px' };

      ReactDOM.render(
        <ElementQuery queries={{ medium: 600 }} >
          <div style={style}>Hello!</div>
        </ElementQuery>,
      appContainer);

      const html = iframe.contentDocument.body.innerHTML;
      const $ = cheerio.load(html);

      expect($('[data-eq-state="medium"]').length).to.equal(1);
    });

    it('when large, large adds `data-eq-state="medium large"` to the child wrapper', () => {
      const style = { width: '1000px' };

      ReactDOM.render(
        <ElementQuery queries={{ medium: 600, large: 900 }} >
          <div style={style}>Hello!</div>
        </ElementQuery>,
      appContainer);

      const html = iframe.contentDocument.body.innerHTML;
      const $ = cheerio.load(html);

      expect($('[data-eq-state="medium large"]').length).to.equal(1);
    });
  });

  describe('invalid states', () => {
    it('missing queries', () => {
      ReactDOM.render(
        <ElementQuery>
          <div>Hello!</div>
        </ElementQuery>,
      appContainer);

      const text = iframe.contentDocument.body.innerText;

      expect(text).to.equal('Hello!');
    });

    it('exits gracefully when the ref is missing', () => {
      ReactDOM.render(
        <ElementQuery queries={{ medium: 600, large: 900 }} />,
      appContainer);
    });

    it('warns when the ref is missing', () => {
      ReactDOM.render(
        <ElementQuery queries={{ medium: 600, large: 900 }} />,
      appContainer);
    });
  });
});
