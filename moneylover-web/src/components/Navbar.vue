<template>
  <nav>
    <beaker-icon class="icon"/>
        <cog-6-tooth-icon class="icon"/>
  </nav>
</template>

<script>
import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
export default {
  name: "Navbar",
  components: { BeakerIcon, Cog6ToothIcon }
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
