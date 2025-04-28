import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("home", () => {
  const name = ref("Kitou");
  const setName = () => {
    name.value = "Mike";
  };

  return { name, setName };
});
