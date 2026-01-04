<template>
  <div class="h-screen pointer-events-none"></div>

  <div class="absolute top-0 bottom-0 w-full h-[80vh] bg-cover">
    <div class="relative w-full h-full">
      <video
        v-if="videoUrl"
        class="object-cover"
        width="100%"
        height="100%"
        preload="auto"
        loop="1"
        autoplay="1"
        muted="1"
        playsinline
        style="visibility: visible; width: 100%; height: 100%"
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoUrl"],
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
