<template>
  <div class="sticky top-0 z-50 text-white bg-black navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn lg:btn-md btn-sm btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabindex="-1"
          class="z-50 p-2 mt-3 border border-white shadow menu menu-sm dropdown-content secondary-bg-color rounded-box w-52"
        >
          <li>
            <NuxtLink :to="locale === 'cn' ? '/' : `/${locale}`">
              {{ $t("navbar.home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="locale === 'cn' ? '/about' : `/${locale}/about`">{{
              $t("navbar.about")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="locale === 'cn' ? '/contact_us' : `/${locale}/contact_us`"
              >{{ $t("navbar.contact_us") }}</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- <a class="text-lg lg:text-xl">{{ $t("navbar.logo") }}</a> -->
      <NuxtLink
        :to="locale === 'cn' ? '/' : `/${locale}`"
        class="text-lg lg:text-xl"
        ><img src="/image/logo/logo.png" class="w-10 h-10"
      /></NuxtLink>
    </div>

    <!-- nav center -->
    <div class="hidden navbar-center lg:flex">
      <ul class="px-1 menu menu-horizontal">
        <li>
          <NuxtLink :to="locale === 'cn' ? '/' : `/${locale}`">
            {{ $t("navbar.home") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="locale === 'cn' ? '/about' : `/${locale}/about`">{{
            $t("navbar.about")
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="locale === 'cn' ? '/contact_us' : `/${locale}/contact_us`"
            >{{ $t("navbar.contact_us") }}</NuxtLink
          >
        </li>
      </ul>
    </div>

    <!-- nav end -->
    <div class="gap-5 pr-5 navbar-end">
      <ul class="items-center gap-2 lg:gap-5 menu menu-horizontal">
        <li>
          <div class="p-0 m-0 dropdown dropdown-end">
            <div tabindex="0" role="button" class="p-0 m-0">
              <i class="fa-solid fa-globe"></i>
            </div>

            <ul
              tabindex="-1"
              class="p-2 shadow-sm primary-text-color primary-bg-color dropdown-content menu rounded-box z-1 w-52"
            >
              <li>
                <a @click="changeLanguage('en')" class="whitespace-nowrap">{{
                  $t("navbar.lang_en")
                }}</a>
              </li>
              <li>
                <a @click="changeLanguage('cn')" class="whitespace-nowrap">{{
                  $t("navbar.lang_cn")
                }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    const { locale, setLocale } = useI18n();

    const {
      c_wallet_type,
      c_wallet_address,
      c_wallet_data,
      c_user_once,
      c_last_login,
      c_current_login,
      c_selected_coin,
    } = useGlobalStates();

    return {
      config,
      locale,
      setLocale,
      c_wallet_type,
      c_wallet_address,
      c_wallet_data,
      c_user_once,
      c_last_login,
      c_current_login,
      c_selected_coin,
    };
  },
  data() {
    return {};
  },
  methods: {
    changeLanguage(lang) {
      this.setLocale(lang);
      console.log(this.c_wallet_address);
    },
  },
  mounted() {},
};
</script>

<style></style>
