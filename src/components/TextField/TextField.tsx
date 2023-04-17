import React from "react";
import "./TextField.css";

interface ITextFieldProps {
  label: string
}

export const TextField = ({label}: ITextFieldProps) => {

  return (
    <div className="text-field-encompasser">
      <label htmlFor={"textField"}>{label}: </label>
      <input type="text" id={"textField"} />
    </div>

  )
}