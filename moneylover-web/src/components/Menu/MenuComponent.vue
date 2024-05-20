<template>
  <div>
    <MenuItem
      v-for="(item, index) in menuItems"
      :key="index"
      :icon="item.icon"
      :title="item.title"
    />
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "MenuComponent",
  components: {
    MenuItem,
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every((item) => "icon" in item && "title" in item);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
