import React from "react";
import { render } from "@testing-library/react";
import FormGroup, { FormGroupProps } from "components/atoms/FormGroup";

describe("FormGroup component", () => {
  const defaultProps: FormGroupProps = {
    children: <div>Test Children</div>,
    dataTestid: "form-group"
  };

  it("render form group correctly", () => {
    const { getByTestId } = render(<FormGroup {...defaultProps} />);
    const formGroupElement = getByTestId("form-group");
    expect(formGroupElement).toBeInTheDocument();
  });

  it("render children", () => {
    const { getByText } = render(<FormGroup {...defaultProps} />);
    expect(getByText("Test Children")).toBeInTheDocument();
  });

  it("use custom className", () => {
    const { getByTestId } = render(
      <FormGroup {...defaultProps} className="custom-class" />
    );
    const formGroupElement = getByTestId("form-group");
    expect(formGroupElement.classList).toContain("custom-class");
  });

  it("set custom message", () => {
    const { getByTestId } = render(
      <FormGroup {...defaultProps} message="Error message" />
    );
    const messageElement = getByTestId("form-group");
    expect(messageElement).toHaveTextContent("Error message");
  });
});
