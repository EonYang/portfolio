const converter = (input, outputUnit) => {
  if (typeof input === "string" && typeof input === "numer") return -1;
  // input number is considered px
  const [w, h] = [window.innerWidth, window.innerHeight];
  const vw1 = w / 100,
    vh1 = h / 100;
  const anythinToPx = (input) => {
    if (typeof input === "number") return input;
    const regex = /(\d+)\s*(\w+)/g;
    const [inputNumber, inputUnit] = regex.exec(input);
    console.log(inputNumber, inputUnit);
    switch (inputUnit) {
      case "px":
        return inputNumber;
      case "vw":
        return inputNumber * vw1;
      case "vh":
        return inputNumber * vh1;
      default:
        return -1;
    }
  };

  switch (outputUnit) {
    case "vw":
      return (anythinToPx(input) / vw1).toString();
    case "vh":
      return (anythinToPx(input) / vh1).toString();
    case "px":
      return anythinToPx(input).toString();
    case "number":
      return anythinToPx(input);
    default:
      return -1;
  }
};

export default converter;
