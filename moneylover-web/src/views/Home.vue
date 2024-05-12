<template>
  <Layout>
    <h1>Home Page</h1>
    <p>This is the home page content.</p>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default.vue";
export default {
  name: "Home",
  components: {
    Layout,
  },
};
</script>

<style scoped>
.affix {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f4f4f4;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>
