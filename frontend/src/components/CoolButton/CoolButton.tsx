import React from 'react';
import "./CoolButton.css"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
}

export const CoolButton = ({buttonText, ...props}: IButtonProps) => {
  return(
    <button className='cool' {...props}>
      {buttonText}
    </button>
  );
}