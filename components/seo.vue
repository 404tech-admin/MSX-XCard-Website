<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const props = defineProps({
  title: {
    type: String,
    default: "Malaysia Chicken Rice",
  },
  shortDesc: {
    type: String,
    default: "Malaysia Chicken Rice",
  },
  keywords: {
    type: String,
    default: "Malaysia Chicken Rice",
  },
});

let seoData = {};

seoData = {
  title: props.title,
  url: runtimeConfig.public.localUrl + route.fullPath.slice(1),
  shortDesc: props.shortDesc,
  keywords: props.keywords,
};

// onMounted(async () => {
//   // await getSeoData();
// });

useHead({
  title: seoData.title,
  description: seoData.shortDesc,
  meta: [
    { charset: "utf-8" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, user-scalable=no, minimal-ui",
    },
    {
      hid: "title",
      name: "title",
      content: seoData.title,
    },
    {
      hid: "url",
      name: "url",
      content: seoData.url,
    },
    {
      hid: "type",
      name: "type",
      content: "website",
    },
    { property: "og:title", content: seoData.title },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: seoData.url,
    },

    { property: "twitter:title", content: seoData.title },
    { property: "twitter:type", content: "website" },
    {
      property: "twitter:url",
      content: seoData.url,
    },
    {
      hid: "description",
      name: "description",
      content: seoData.shortDesc,
    },
    { property: "og:description", content: seoData.shortDesc },
    {
      property: "twitter:description",
      content: seoData.shortDesc,
    },
    {
      hid: "keywords",
      name: "keywords",
      content: seoData.keywords,
    },
  ],
});
</script>
