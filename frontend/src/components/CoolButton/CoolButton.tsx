import React from 'react';
import "./CoolButton.css"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string,
  size?: string
}

export const CoolButton = ({buttonText, size="sm", ...props}: IButtonProps) => {
  return(
    <button className='cool' type='button' {...props}>
      {buttonText}
    </button>
  );
}