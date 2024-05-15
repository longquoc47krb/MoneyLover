<template>
  <nav>
    <balance-component :balance="10000000"></balance-component>
  </nav>
</template>

<script>
import Balance from "../components/Balance.vue";
export default {
  name: "Navbar",
  components: {
    "balance-component": Balance,
  },
};
</script>

<style scoped>
nav {
  background-color: #ededed;
  padding: 1rem;
  width: calc(100vw - 1rem);
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure it stays on top */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
