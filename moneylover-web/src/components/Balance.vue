<!-- balance-component.vue -->
<template>
  <div class="balance">
    <i class="pi pi-wallet" style="font-size: 3rem; color: #333"></i>
    <div class="balance-text">
      <p>Số dư</p>
      <p style="font-weight: 700">{{ formatCurrency(balance) }}</p>
    </div>
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
<style lang="scss">
.balance {
  &-text {
    color: #333;
    font-size: 1rem;
    line-height: 0.5rem;
    p {
      line-height: 1rem;
      margin: 0.5rem auto;
    }
    text-align: left;
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
