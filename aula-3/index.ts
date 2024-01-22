import { Account } from "./types";
import { show } from "./decorators.js";

/**
 * Método que cria uma conta de usuário.
 * @returns { Account } Retorna uma conta de usuário.
 */
export function createAccount(): Account {
  const account: Account = {
    username: "admin",
    email: "account@email.com",
    password: "123456",
  };
  return account;
}

/**
 * Método que realiza a soma de N números
 * @param { number[] } numbers - Array de números.
 * @returns
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Contains methods for performing mathematical tasks.
 */
export class MathFunctions {
  /**
   * @description Calculates the square root of a number.
   * @param { number } x - The number to calculate the square root.
   * @returns { number }
   * @example
   * ```
   * sqrt(4);
   * // Will return 2
   * ```
   */
  @show()
  static sqrt(x: number): number {
    return Math.sqrt(x);
  }

  /**
   * @description Calculates the square of a number.
   * @param { number } x - The number to calculate the square.
   * @returns { number }
   * @example
   * ```
   * square(4);
   * // Will return 16
   * ```
   */
  @show()
  static square(x: number): number {
    return x ** 2;
  }

}

const sqrtAndSquare = (...numbers: number[]): void => {
  numbers.forEach((number) => {
    MathFunctions.sqrt(number);
    MathFunctions.square(number);
    console.log("");
  });
}

sqrtAndSquare(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);