import { fireEvent, render, screen } from "@testing-library/react";
import CreateAccountForm from "./CreateAccountForm";

describe.only("CreateAccountForm", () => {
  test("on change event testing on email", () => {
    render(<CreateAccountForm />);
    let input = screen.getByLabelText("Email Address *");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });

  test("on change event testing on password", () => {
    render(<CreateAccountForm />);
    let input = screen.getByLabelText("Password *");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });
  test("on change event testing on confirm password", () => {
    render(<CreateAccountForm />);
    let input = screen.getByLabelText("Confirm Password *");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });

  test("renders with a submit button", () => {
    render(<CreateAccountForm />);
    const submitButton = screen.getByRole("button", { name: "REGISTER" });

    // Assert that the button has the correct type attribute
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  test("method testing of register button", () => {
    render(<CreateAccountForm />);
    const btn = screen.getByRole("button", { name: "REGISTER" });
    fireEvent.click(btn);
    let inputEmail = screen.getByLabelText("Email Address *");
    let inputPassword = screen.getByLabelText("Password *");
    let inputPasswordConfirm = screen.getByLabelText("Confirm Password *");
    expect(inputEmail).toHaveValue("");
    expect(inputPassword).toHaveValue("");
    expect(inputPasswordConfirm).toHaveValue("");
  });

  // Additional tests can be added here
});
