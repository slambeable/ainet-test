<template>
  <el-card class="footer-block">
    <span>{{ `${currentYear} — ` }}</span><strong>{{ title }}</strong>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterBlock',
  setup() {
    const currentYear = new Date().getFullYear();
    const title = 'Element Plus';

    return {
      currentYear,
      title,
    };
  },
});
</script>

<style scoped lang="scss">
.footer-block {
  background-color: var(--el-color-primary-light-3);
}
</style>
