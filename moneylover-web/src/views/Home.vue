<template>
  <Layout>
    <div class="flex items-center justify-center m-4">
      <TransactionComponent />
    </div>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default.vue";
import TransactionComponent from "../components/Transaction/TransactionComponent.vue";
export default {
  name: "Home",
  components: {
    Layout,
    TransactionComponent,
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
