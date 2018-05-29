import React from 'react';
import Movies from './Movies';

const Demo = () => {
  return [
    <div
      key="sidebar"
      className="demo-sidebar"
      style={{ width: '66%', display: 'inline-block' }}
    >
      <Movies />
    </div>,
    <div
      key="mainContent"
      className="demo-main"
      style={{ width: '33%', display: 'inline-block' }}
    >
      <Movies />
    </div>
  ];
};

export default Demo;
