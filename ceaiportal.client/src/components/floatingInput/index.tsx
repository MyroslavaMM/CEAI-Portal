import React, { useState } from "react";
import { Input } from "antd";
import "./index.less";

interface FloatingInputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  name,
  value,
  onChange,
  label,
}) => {
  const [focused, setFocused] = useState(false);
  console.log(value);

  return (
    <div className={`floating-input ${focused || value ? "active" : ""}`}>
      <Input
        name={name}
        className={"email-form-input"}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingInput;
