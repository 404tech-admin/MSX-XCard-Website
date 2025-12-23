<template>
  <div
    :id="id"
    class="w-screen h-screen bg-no-repeat bg-cover"
    :class="[bgColor ? bgColor : 'bg-white']"
    :style="[
      `background-image: url('${bgImage}'); background-position: ${backgroundPosition}`,
      isCustomHeight ? `height: ${isCustomHeight} !important` : '',
    ]"
  >
    <slot name="contentBox"></slot>
  </div>
</template>

<script>
export default {
  props: ["id", "bgColor", "bgImage", "backgroundPosition", "isCustomHeight"],
  setup() {
    const { locale, setLocale } = useI18n();
    return { locale, setLocale };
  },
  data() {
    return {};
  },

  methods: {},

  computed: {},

  mounted() {},
};
</script>

<style lang="scss"></style>
