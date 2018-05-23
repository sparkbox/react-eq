import React from 'react';
import Heading from './Heading';

const Demo = () => {
  return [
    <div
      className="demo-sidebar"
      style={{ width: '33%', display: 'inline-block', backgroundColor: 'red' }}
    >
      <Heading />
    </div>,
    <div
      className="demo-main"
      style={{
        width: '66%',
        display: 'inline-block',
        backgroundColor: 'yellow'
      }}
    >
      <Heading />
    </div>
  ];
};

export default Demo;
