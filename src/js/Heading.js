import React from 'react';
import ElementQuery from 'react-eq';

const Demo = () => {
  const queries = {
    small: 200,
    medium: 400
  };

  return (
    <ElementQuery queries={queries}>
      <h1>Hello</h1>
    </ElementQuery>
  );
};

export default Demo;
