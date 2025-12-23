<template>
  <div class="relative h-full">
    <!-- navbar -->
    <layout-navbar></layout-navbar>

    <!--  content -->
    <slot></slot>

    <!-- footer -->
    <layout-footer />
  </div>
</template>

<script>
export default {
  setup() {
    const envConfig = useRuntimeConfig();

    return {
      envConfig,
    };
  },
  data() {
    return {
      navbarOneState: false,
    };
  },

  mounted() {},

  methods: {},

  computed: {},
};
</script>

<style lang="scss"></style>
