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

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px 8px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
</style>
