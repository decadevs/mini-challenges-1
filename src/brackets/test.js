const isValid = require("./");

describe("Brackets Suite", () => {
  test("Single Character - valid inputs", () => {
    expect(isValid("()")).toBe("valid");
    expect(isValid("[]")).toBe("valid");
    expect(isValid("{}")).toBe("valid");
  });

  test("Multiple Characters - invalid inputs", () => {
    expect(isValid("(}")).toBe("invalid");
    expect(isValid("{(")).toBe("invalid");
    expect(isValid("]]")).toBe("invalid");
    expect(isValid("{)")).toBe("invalid");
  });

  test("Single Character - valid inputs", () => {
    expect(isValid("(())")).toBe("valid");
    expect(isValid("(()()())")).toBe("valid");
    expect(isValid("()()()()()")).toBe("valid");
    expect(isValid("((())(())(())(()))")).toBe("valid");

    expect(isValid("[[]]")).toBe("valid");
    expect(isValid("[][][[]]")).toBe("valid");
    expect(isValid("[][[[]]]")).toBe("valid");
    expect(isValid("[[[[[]]]]]")).toBe("valid");

    expect(isValid("{{{{{{{{{{{{{}}}}}}}}}}}}}")).toBe("valid");
    expect(isValid("{}{{}}{{{}}}{{{{}}}}{}{}{}")).toBe("valid");
  });

  test("Complex characters - invalid", () => {
    expect(isValid("({()}[()]}")).toBe("invalid");
    expect(isValid("[](){{{}}")).toBe("invalid");
    expect(isValid("{{{{{{{{{{{{}}}}}}}}}}}()[]")).toBe("invalid");
    expect(isValid("}{{{{}}}}{([])(((()))){")).toBe("invalid");
  });

  test("invalid closes", () => {
    expect(isValid("(([))]")).toBe("invalid");
    expect(isValid("[{}]({}){[[[}]]]")).toBe("invalid");
    expect(isValid("{{{{{{{{{{{{}}}}}}}}}}}()[}]")).toBe("invalid");
  });

  test("Complex chracters - valid", () => {
    expect(isValid("{[()[]]()}()")).toBe("valid");
    expect(isValid("{{{(())}}[[()]]}")).toBe("valid");
    expect(isValid("[{()}({[]})(){}[]]")).toBe("valid");
    expect(isValid("(){}[](([][]){})")).toBe("valid");
    expect(isValid("{{[][()]}{[][()]}{[][()]}}")).toBe("valid");
  });
});
