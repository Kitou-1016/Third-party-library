<script setup>
const route = useRoute();

const isShow = ref(false);
const userData = reactive({ id: "", name: "" });
const data = {
  id: route.params.id,
  name: "小明_" + route.params.id,
};

onMounted(async () => {
  setTimeout(() => {
    userData.id = data.id;
    userData.name = data.name;
    isShow.value = true;
    console.log(userData);
  }, 2000);
});
</script>

<template>
  <div v-if="isShow">
    <h2>使用者編號：{{ userData.id }}</h2>
    <p>姓名：{{ userData.name }}</p>
  </div>
  <div v-else>載入中...</div>
</template>