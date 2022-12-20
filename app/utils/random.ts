import { nanoid } from "nanoid/non-secure";

export const NAMES = [
  "Reece Escobar",
  "Ignacio Weeks",
  "Gunnar Bishop",
  "Clark Shaffer",
  "Elizabeth Faulkner",
  "Donavan Deleon",
  "Fernanda Ellis",
  "Leah Reyes",
  "Bianca Kaufman",
  "Madison Clark",
  "Iliana Bryant",
  "Wilson Cantu",
  "Jenna Gilmore",
  "Dangelo Daniel",
  "Clinton Lloyd",
  "Broderick Mejia",
  "Houston Pittman",
  "Raiden Reed",
  "Justice Green",
  "Kevin Wagner",
  "Lilianna Meadows",
  "Liam Burke",
  "Maggie Benjamin",
  "Steve Douglas",
  "Claudia Lynn",
  "Conrad Butler",
  "Deangelo Colon",
  "Rene Mcdowell",
  "Jared Sloan",
  "Yuliana Diaz",
  "Denisse Ortega",
  "Larissa Fernandez",
  "Jack Marquez",
  "Grace Bender",
  "Isabella Calderon",
  "Tori Forbes",
  "Sariah Pena",
  "Aditya Brooks",
  "Brittany Santana",
  "Paul Hernandez",
  "Dahlia Chase",
  "Justice Lam",
  "Elizabeth Abbott",
  "Makai Thompson",
  "Deon Rogers",
  "Killian Bridges",
  "Kailyn Kerr",
  "Brylee Savage",
  "Jaliyah Mcdaniel",
  "Winston Austin",
  "Madisyn Kennedy",
  "Eden Mccarty",
  "Zoe Oliver",
  "Christian Lopez",
  "Israel Summers",
  "Jonathon Jordan",
  "Braylon Wolfe",
  "Janiah Hodges",
  "Haiden Booth",
  "Alia Pugh",
  "Melany Harrell",
  "Brooke Frederick",
  "Annalise Rollins",
  "Zoey Jimenez",
  "Graham Horne",
  "Lewis Hanna",
  "Aydin Mccall",
  "Davon Cherry",
  "Kyle Barnes",
  "Sara Sellers",
  "Maci Ramos",
  "Milo Carney",
  "Kristina Mendoza",
  "Carl Bernard",
  "Simeon Price",
  "Genesis Howell",
  "Raquel Beasley",
  "Aydan Huynh",
  "Beau Rosario",
  "Rayan Gross",
  "Victor Villa",
  "Paige Ayala",
  "Quinn Robertson",
  "Rihanna Branch",
  "Kasen Wilkerson",
  "Myla Blackburn",
  "Freddy Roach",
  "Giancarlo Stephenson",
  "Colton Booker",
  "Miranda Shaw",
  "Josh Pugh",
  "Delaney Snow",
  "Marcos Salas",
  "Justice Carrillo",
  "Aiden Morris",
  "Eli Lang",
  "Alicia Wall",
  "Malakai Bird",
  "Royce Irwin",
  "Taniyah Simon",
];

/**
 * Generate a random integer value between `min` (inclusive) and `max` (inclusive).
 */
export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random boolean given a `probability` for truthiness.
 */
export function randomBoolean(probability: number) {
  return Math.random() < probability;
}

/**
 * Pick a random entry from the provided `choices` array.
 */
export function randomChoice<T>(choices: T[]): T {
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Return a randomly-generated id.
 */
export function randomId(): string {
  return nanoid();
}

/**
 * Return a randomly-selected name.
 */
export function randomName(): string {
  return randomChoice(NAMES);
}

/**
 * Return a randomly-generated bio.
 */
export async function randomBio(): Promise<string> {
  const result = await (
    await fetch("https://loripsum.net/api/short/plaintext/1/")
  ).text();

  return result.trim();
}

/**
 * Return a randomly-selected set of pictures.
 */
export function randomPictures(): string[] {
  const pictures: string[] = [];
  const picturesCount = randomInteger(1, 5);

  for (let i = 0; i < picturesCount; i++) {
    pictures.push(
      `https://picsum.photos/seed/${randomInteger(1, 1000)}/200/300`
    );
  }

  return pictures;
}
