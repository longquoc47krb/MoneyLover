<template>
  <Layout
    ><div class="home-view">
      <h1>Welcome to My App!</h1>
      <p>This is the profile page of your Vue 3 application.</p>
    </div></Layout
  >
</template>

<script>
import Layout from "../layouts/Default.vue";
export default {
  name: "Profile",
  components: { Layout },
};
</script>

<style lang="scss" scoped></style>
