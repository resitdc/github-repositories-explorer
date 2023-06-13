import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "components/atoms/Button";

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    children: "Button",
    onClick: jest.fn(),
  };

  it("render button correctly", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("call onClick function when clicked", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Button");
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("disable button when isLoading prop is true", () => {
    const { container } = render(<Button {...defaultProps} isLoading />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("btn-loading");
  });

  it("disable button when disabled prop is true", () => {
    const { getByText } = render(<Button {...defaultProps} disabled />);
    const buttonElement = getByText("Button") as HTMLButtonElement;
    expect(buttonElement.disabled).toBe(true);
  });

  it("use custom className", () => {
    const { getByText } = render(
      <Button {...defaultProps} className="custom-class" />
    );
    const buttonElement = getByText("Button");
    expect(buttonElement.classList).toContain("custom-class");
  });
});
