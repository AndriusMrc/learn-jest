import React from "react";
import { render, screen } from "@testing-library/react";
import { calculateSum, Sum } from "./Sum";

describe(Sum, () => {
  it("adds x value to y", () => {
    const mockData = {
      x: 10,
      y: 2,
    };

    expect(calculateSum(mockData)).toBe(12);
  });

  // it("adds x value to y", () => {
  //   const mockData = {
  //     x: 10,
  //     y: 5,
  //   };
  //   render(<Sum {...mockData} />);
  //   const result = screen.getByText(15);

  //   expect(result).toStrictEqual(15);
  // });
});
