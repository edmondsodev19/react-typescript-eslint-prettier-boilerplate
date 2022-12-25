import React from 'react';

export interface Props {
  color: string;
}

const Text = (props: Props): JSX.Element => {
  const { color } = props;
  return <div style={{ color: color }}>Text</div>;
};

export default Text;
