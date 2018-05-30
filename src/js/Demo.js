import React from 'react';
import Movies from './Movies';

const Demo = () => {
  return [
    <div
      key="mainContent"
      className="demo-main"
    >
      <Movies />
    </div>,
    <div
      key="sidebar"
      className="demo-sidebar"
    >
      <Movies />
    </div>
  ];
};

export default Demo;
