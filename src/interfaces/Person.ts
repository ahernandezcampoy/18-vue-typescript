export interface Person {
  name: string;
  surname: string;
  age: number;
  isStudent: boolean;
  // "void" define el tipo del retorno del método
  // Interrogante para indicar que puede no estar definida la función
  growUp?: () => void;
  // Supuestamente, indica también que la función puede no estar definida
  //   growUp: () => void | undefined;
}
