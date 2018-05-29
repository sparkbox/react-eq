import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import hljs from 'highlight.js';

ReactDOM.render(<Demo />, document.querySelector('.demo-area'));

hljs.initHighlightingOnLoad();
