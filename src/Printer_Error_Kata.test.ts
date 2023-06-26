import printerError from "./Printer_Error_Kata";

test("check in a string how many that are not A-M", () => {
  expect(printerError("aaabbbbhaijjjm")).toBe("0/14");
});

test("check in a string how many that are not A-M", () => {
  expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toBe("8/22");
});
