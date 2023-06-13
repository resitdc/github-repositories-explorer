import { render, fireEvent } from "@testing-library/react";
import Input, { InputProps } from "components/atoms/Input";

describe("Input component", () => {
  const defaultProps: InputProps = {
    onChange: jest.fn(),
    dataTestid: "input"
  };

  it("render input correctly", () => {
    const { getByTestId } = render(<Input {...defaultProps} />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("call onChange function when input value changes", () => {
    const { getByTestId } = render(<Input {...defaultProps} />);
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("use custom className", () => {
    const { getByTestId } = render(
      <Input {...defaultProps} className="custom-class" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement.classList).toContain("custom-class");
  });

  it("set input value", () => {
    const { getByTestId } = render(<Input {...defaultProps} value="test" />);
    const inputElement = getByTestId("input") as HTMLInputElement;
    expect(inputElement.value).toBe("test");
  });
});
