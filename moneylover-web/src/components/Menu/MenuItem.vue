<template>
  <div
    class="text-[#333] flex items-center justify-between px-4 py-6 border-b border-b-[#949494] hover:bg-[#d1d1d165] hover:cursor-pointer"
  >
    <div class="flex items-center gap-x-2">
      <i :class="['pi', icon]" style="font-size: 1rem; color: #333"></i>
      <span class="text-sm">{{ title }}</span>
    </div>
    <i
      :class="['pi', 'pi-chevron-right']"
      style="font-size: 1rem; color: #333"
    ></i>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
