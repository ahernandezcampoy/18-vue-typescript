<template>
  <div>
    <h1>Name: {{ store.name }}</h1>
    <h2>Age: {{ store.age }}</h2>
    <button @click="store.growUp">Grow up</button>
    <button @click="store.reborn">Reborn</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "../store/store";


const Testing = defineComponent({
  setup() {
    // Definición sin tipo de objeto
    /*
    const person1 = ref({
      name: "Alex",
      surname: "HC",
      age: 30,
    });
    */

    // Definición con tipo de objeto
    /*
    const person = ref<Person>({
      name: "Charlie",
      surname: "Brown",
      age: 0,
      isStudent: false,
      growUp() {
        this.age++;
      },
    });

    return { person };
    */
   return {store}
  },
});

export default Testing;

/*
Método alternativo para definir el componente
export default defineComponent({
    setup() {
        
    },
})
*/
</script>
