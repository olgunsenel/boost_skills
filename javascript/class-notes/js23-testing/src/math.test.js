// ! node module import formatı
const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math.js");

// ! es6 module format
// import { calculateTotal,
// celsiusToFahrenheit,
// fahrenheitToCelsius,
// fibonacci } from './math';

describe("calculateTotal", () => {
  // test caselerini oluşturuyoruz
  it("should exist", () => {
    expect(calculateTotal).toBeDefined();
  });

  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it("should return with default VAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

describe("celsiusToFahrenheit", () => {
  //
});

describe("fahrenheitToCelsius", () => {
  //
});

describe("fibonacci", () => {
  //
});
