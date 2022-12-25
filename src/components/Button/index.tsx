import React from 'react';

export interface Props {
  onClick: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { onClick } = props;

  return <button onClick={onClick}>index</button>;
};

export default Button;
