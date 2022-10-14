<template>
  <content-block />
  <footer-block />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import ContentBlock from '@/components/ContentBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default defineComponent({
  name: 'App',
  components: {
    ContentBlock,
    FooterBlock,
  },
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch('fetchUsers');
    });
  },
});
</script>

<style lang="scss">
@import "./css/table";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 20px;
}
</style>
