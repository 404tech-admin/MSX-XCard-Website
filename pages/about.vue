<template>
  <!-- section 1 -->
  <PageAboutSection1></PageAboutSection1>

  <!-- section 6 -->
  <!-- <PageAboutSection6></PageAboutSection6> -->

  <!-- section 2 -->
  <PageAboutSection2></PageAboutSection2>

  <!-- section 7 -->
  <PageAboutSection7></PageAboutSection7>

  <!-- section 3 -->
  <PageAboutSection3></PageAboutSection3>

  <!-- section 4 -->
  <PageAboutSection4></PageAboutSection4>

  <!-- section 5 -->
  <PageAboutSection5></PageAboutSection5>
</template>

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    const { locale } = useI18n();

    return { config, locale };
  },
  data() {
    return {};
  },
};
</script>
