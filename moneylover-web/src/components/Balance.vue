<!-- balance-component.vue -->
<template>
  <div class="balance">
    <p>Số dư hiện tại: {{ formatCurrency(balance) }}</p>
  </div>
</template>

<script>
import { formatCurrency } from "../utils";

export default {
  props: {
    balance: { type: Number, required: true },
  },
  methods: {
    formatCurrency: formatCurrency, // Định rõ tên của hàm formatCurrency
  },
};
</script>
<style>
.balance {
  p {
    color: #333;
  }
}
</style>
