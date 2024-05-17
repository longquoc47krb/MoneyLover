<template>
  <div class="sidebar flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
    <Button class="button-sidebar" icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss">
.sidebar {
  padding: 1rem;
  background-color: #dedede;
  height: 100lvh;
  max-width: 10vw;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure it stays on top */
}
.p-sidebar-header {
  justify-content: flex-end;
}
.button-sidebar {
  background: transparent;
  color: #333;
}
</style>

<!-- <style lang="scss" scoped>
.sidebar {
  padding: 1rem;
  background-color: #dedede;
  height: 100lvh;
  max-width: 10vw;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure it stays on top */
}
</style> -->
