import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Starter", () => {
  it("should render corretly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello AG world/i);
    expect(linkElement).toBeTruthy();
  });
});
