import { Store } from "../interfaces/Store";
import { reactive } from "vue";

const store = reactive<Store>({
  name: "Alex",
  surname: "HC",
  age: 37,
  isStudent: false,
  growUp: () => {
    store.age++
  },
  reborn: () => {
      store.age = 0;
  }
});

export default store;
