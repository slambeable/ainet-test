<template>
  <el-space wrap class="content-block">
    <el-container direction="vertical">
      <el-space wrap fill>
        <el-image
          class="content-block__image"
          alt="Element plus logo"
          :src="require('../assets/logo.png')"
        />
      </el-space>
      <el-container direction="vertical">
        <user-filter></user-filter>
        <user-table></user-table>
      </el-container>
    </el-container>
  </el-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserTable from '@/components/UserTable.vue';
import UserFilter from '@/components/UserFilter.vue';

export default defineComponent({
  name: 'ContentBlock',
  components: {
    UserTable,
    UserFilter,
  },
});
</script>

<style scoped lang="scss">
.content-block {
  &__image {
    width: min-content;
    margin-bottom: 20px;
  }
}
</style>
