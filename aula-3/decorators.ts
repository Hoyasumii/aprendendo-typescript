export function ToSquare(desiredNumber: number): CallableFunction {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const oldMethod = descriptor.value;
    console.log(
      "Além de calcular a raiz quadrada, eu também vou calcular ao quadrado!"
    );

    descriptor.value = function (arg: number): void {
      const values = [desiredNumber, arg];

      values.forEach((value) => {
        const result = oldMethod(value);
        console.log(`sqrt(${value}) == ${result}`);
        console.log(`square(${value}) == ${value ** 2}`);
      });
    };
  };
}

export function show(): CallableFunction {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {

    const oldMethod = descriptor.value;

    descriptor.value = function (arg: number): void {
      const result = oldMethod(arg);
      console.log(`${key}(${arg}) == ${result}`);
    }
  };
}