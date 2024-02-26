import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("homepage api testing", async () => {
  render(<HomePage />);

  const paragraphElements = await screen.findAllByTestId("itemName");

  // Now you can perform assertions or interactions with the paragraphElements
  expect(paragraphElements).toHaveLength(4);
  // expect(paragraphElements[0]).toHaveTextContent("First paragraph text");
  // expect(paragraphElements[1]).toHaveTextContent("Second paragraph text");
  // Add more assertions or actions as needed
});
