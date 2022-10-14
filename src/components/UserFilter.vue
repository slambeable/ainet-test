<template>
  <el-select
    class="user-filter"
    v-model="variant"
    :placeholder="placeholder"
    clearable
    @clear="clearSelection"
  >
    <el-option-group
      v-for="group in userSelectOptions"
      :key="group.label"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-option-group>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import userSelectOptions from '@/constant/UserSelectOptions';

export default defineComponent({
  name: 'ContentBlock',
  setup() {
    const store = useStore();
    const placeholder = 'Select filter option';

    const variant = ref('');

    const clearSelection = async () => {
      await store.dispatch('fetchUsers');
    };

    watch(() => variant.value, async () => {
      await store.dispatch('fetchUsers');
      store.commit('filterUsers', variant.value);
    });

    return {
      userSelectOptions,
      placeholder,
      variant,
      clearSelection,
    };
  },
});
</script>

<style scoped lang="scss">
.user-filter {
  margin-bottom: 20px;
}
</style>
