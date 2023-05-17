import { useState, useEffect } from "react";
import "./TextField.css";


interface ITextFieldProps {
  label: string,
  onChange?: (str: string) => void
}

export const TextField = ({label, onChange}: ITextFieldProps) => {
  const [textValue, setTextValue] = useState("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  }

  return (
    <div className="text-field-encompasser">
      <label htmlFor={`textField${label}`}>{label}: </label>
      <input type="text" id={`textField${label}`} onChange={getValue} value={textValue} />
    </div>

  )
}