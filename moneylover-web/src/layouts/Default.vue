<template>
  <div>
    <Navbar />
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped>
main {
  height: 100vh;
}
</style>
