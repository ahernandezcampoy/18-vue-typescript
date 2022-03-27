export interface Store {
  name: string;
  surname: string;
  age: number;
  isStudent: boolean;
  growUp?: () => void;
  reborn?: () => void;
}
