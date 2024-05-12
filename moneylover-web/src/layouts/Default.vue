<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  height: 100vh;
}
</style>
