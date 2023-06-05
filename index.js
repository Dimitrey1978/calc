function basicOp(operation, value1, value2) {
  if (operation === "+") {
    console.log(value1 + value2);
    return value1 + value2;
  } else if (operation === "-") {
    console.log(value1 - value2);
    return value1 - value2;
  } else if (operation === "*") {
    console.log(value1 * value2);
    return value1 * value2;
  } else if (operation === "/") {
    if (value2) {
      console.log(value1 / value2);
      return value1 / value2;
    } else console.log("На ноль делить нельзя");
    return value1 / value2;
  }
}

basicOp("+", 4, 7); // 11
basicOp("-", 15, 18); // -3
basicOp("*", 5, 5); // 25
basicOp("/", 49, 7); // 7
basicOp("/", 49, 0);
