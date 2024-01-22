import { Spaceship } from "./types";

const spaceship: Spaceship = {
  name: "Apollo",
  speed: 100,
  colors: ["white", "black", "red"],
};

const showSpaceship = () => {
  console.log(spaceship);
  console.log(typeof spaceship);
};

document
  .getElementById("spaceshipButton")
  ?.addEventListener("click", showSpaceship);

/* 
tipos diferentes:
1. unknown: não sabemos o tipo da variável, mas a verificação de tipos funciona
2. any: não sabemos o tipo da variável, e a verificação de tipos não funciona. O TS para de verificar o código
3. never: Um retorno de função que não deveria acontecer. Não tem como atribuir um valor a uma variável do tipo never. Vai aparecer se você tiver feito merda no código. Um cocô bem grande, grosso e fedorento.
*/

let list: number[] = [1, 2, 3, 4, 5, 6];

console.log(list.filter((item) => item % 2 == 0));

class MySpaceship implements Spaceship {
  name: string;
  speed: number;
  colors: [string, string, string];

  constructor(name: string, speed: number, colors: [string, string, string]) {
    this.name = name;
    this.speed = speed;
    this.colors = colors;
  }
}
