<template>
  <div class="layout">
    <SidebarComponent />
    <div>
      <Navbar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
  components: {
    Navbar,
    SidebarComponent,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
}
main {
  height: 100vh;
}
</style>
