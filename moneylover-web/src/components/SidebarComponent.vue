<template>
  <div class="sidebar flex justify-content-center">
    <Sidebar v-model:visible="visible" class="p-0">
      <MenuComponent :menuItems="menuItems" />
    </Sidebar>
    <Button
      class="button-sidebar h-fit"
      icon="pi pi-bars"
      @click="visible = true"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import MenuComponent from "../components/Menu/MenuComponent.vue";
// Props for SidebarComponent
const props = defineProps({
  modelValue: Boolean,
});
// Emit to parent component
const emit = defineEmits(["update:modelValue"]);
// Local state
const visible = ref(props.modelValue);

// Watch for prop changes
watch(
  () => props.modelValue,
  (newValue) => {
    visible.value = newValue;
  }
);

// Watch for local changes
watch(visible, (newValue) => {
  emit("update:modelValue", newValue);
});
const menuItems = [
  { icon: "pi-user", title: "Tài khoản" },
  { icon: "pi-wallet", title: "Ví của tôi" },
  { icon: "pi-box", title: "Thể loại" },
];
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
.p-sidebar-close {
  display: none;
}
.p-sidebar-content {
  padding: 0;
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
