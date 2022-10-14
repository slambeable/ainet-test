<template>
  <el-table
    class="user-table"
    v-loading="isLoading"
    :element-loading-text="UserTableOptionsEnum.elementLoadingText"
    :element-loading-spinner="UserTableOptionsEnum.svg"
    :element-loading-svg-view-box="UserTableOptionsEnum.elementLoadingSvgViewBox"
    :element-loading-background="UserTableOptionsEnum.elementLoadingBackground"
    :data="$store.state.users"
    :max-height="UserTableOptionsEnum.tableMaxHeight"
    :style="{
      borderRadius: UserTableOptionsEnum.borderRadius,
    }"
  >
    <el-table-column
      :label="UserTableOptionsEnum.header"
      :width="UserTableOptionsEnum.tableColumnWidth">
      <template #default="scope">
        <el-popover
          effect="light"
          trigger="click"
          placement="top"
          width="auto">
          <template #default>
            <div>{{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-avatar
              class="user-table__avatar"
              :src="scope.row.avatar"
            >
            </el-avatar>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column>
      <template #default="scope">
        <div class="table-title" v-html="scope.row.title"></div>
        <div class="table-description" v-html="scope.row.subtitle"></div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import UsersInterface from '@/types/UsersInterface';
import UserTableOptionsEnum from '@/constant/UserTableOptionsEnum';
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'UserTable',
  setup() {
    const store = useStore();

    const isLoading = ref(true);

    const toggleLoadingStatus = async (value: UsersInterface[]) => {
      if (value[0]) {
        isLoading.value = false;
      } else {
        isLoading.value = true;
      }
    };

    watch(() => store.state.users, toggleLoadingStatus);

    return {
      isLoading,
      UserTableOptionsEnum,
    };
  },
});
</script>

<style scoped lang="scss">
.user-table {
  border: 1px solid var(--el-border-color);
  margin-bottom: 20px;
  width: 500px;
  min-height: 410px;
  max-width: calc(100vw - 16px);

  &__avatar {
    cursor: pointer;
  }
}
</style>
