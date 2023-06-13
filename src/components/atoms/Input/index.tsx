import React, { ChangeEvent } from "react";

interface InputProps {
  name?: string;
  type?: string;
  pattern?: string;
  className?: string | string[];
  value?: any;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  id?: string;
  dataTestid?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    required,
    readonly,
    disabled,
    pattern,
    onKeyDown,
    onPaste,
    id,
    dataTestid,
  } = props;
  const className = ["form-input"];
  
  if (Array.isArray(props.className)) {
    className.push(...props.className);
  } else if (props.className) {
    className.push(props.className);
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (props.onFocus) props.onFocus(event);
  };

  return (
    <input
      name={name}
      type={type}
      pattern={pattern}
      className={className.join(" ")}
      value={value === null ? "" : value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      readOnly={readonly}
      disabled={disabled}
      onFocus={handleOnFocus}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      id={id}
      data-testid={dataTestid}
    />
  );
};

export default Input;
export type { InputProps };
