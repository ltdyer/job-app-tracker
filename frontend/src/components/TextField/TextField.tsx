import { useState, useEffect } from "react";
import "./TextField.css";


interface ITextFieldProps {
  label: string,
  onChange?: (str: string) => void
}

export const TextField = ({label, onChange}: ITextFieldProps) => {
  const [textValue, setTextValue] = useState("");
  
  useEffect(() => {
    if (textValue && onChange) {
      onChange(textValue);
    }
  }, [onChange, textValue]);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  }

  return (
    <div className="text-field-encompasser">
      <label htmlFor={"textField"}>{label}: </label>
      <input type="text" id={"textField"} onChange={getValue} value={textValue} />
    </div>

  )
}