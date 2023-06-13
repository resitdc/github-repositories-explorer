import React from "react";

interface FormGroupProps {
  children: React.ReactNode;
  className?: string | string[];
  message?: string;
  dataTestid?: string;
};

const FormGroup: React.FC<FormGroupProps> = ({children, className, message, dataTestid}) => {
  const classes = ["form-group"];
  
  if (Array.isArray(className)) {
    classes.push(...className);
  } else if (className) {
    classes.push(className);
  }

  return (
    <div
      className={classes.join(" ")}
      data-testid={dataTestid}
    >
      {children}
      {
        message &&
        <div className="form-group-message">{message}</div>
      }
    </div>
  );
};

export default FormGroup;
export type { FormGroupProps };
