import printerError from "./Printer_Error_Kata";

test("sum adds two numbers", () => {
  expect(printerError("aaabbbbhaijjjm")).toBe("0/14");
});


test("sum adds two numbers cancelling", () => {
  expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toBe("8/22");
});

