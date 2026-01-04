<template>
  <div class="absolute top-0 py-5 text-white bg-transparent z-100 navbar">
    <div class="navbar-start">
      <!-- mobile -->
      <div
        @click="openMobileNav()"
        class="cursor-pointer xl:hidden btn btn-ghost"
        style="z-index: 9999"
      >
        <div>
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
      </div>

      <!-- mobile drop down -->
      <div id="mobileNavDropdown" class="absolute xl:hidden">
        <ul class="items-center w-screen gap-5 menu menu-vertical">
          <li class="">
            <NuxtLink
              @click="openMobileNav()"
              :to="locale === 'cn' ? '/' : `/${locale}`"
              class="text-xl font-jetbrains"
            >
              {{ $t("navbar.home") }}
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink
              @click="openMobileNav()"
              :to="locale === 'cn' ? '/about' : `/${locale}/about`"
              class="text-xl font-jetbrains"
            >
              {{ $t("navbar.about") }}
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink
              @click="openMobileNav()"
              :to="locale === 'cn' ? '/contact_us' : `/${locale}/contact_us`"
              class="text-xl font-jetbrains"
            >
              {{ $t("navbar.contact_us") }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <NuxtLink
        :to="locale === 'cn' ? '/' : `/${locale}`"
        class="text-lg lg:text-xl"
        ><img src="/image/logo/logo.png" class="h-10"
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
    return { navbarOneState: false };
  },
  methods: {
    changeLanguage(lang) {
      this.setLocale(lang);
      console.log(this.c_wallet_address);
    },
    openMobileNav() {
      if (!this.navbarOneState) {
        var element = document.getElementById("mobileNavDropdown");
        document.body.classList.add("fixed");
        element.classList.add("open");
        this.navbarOneState = !this.navbarOneState;
      } else {
        var element = document.getElementById("mobileNavDropdown");
        document.body.classList.remove("fixed");
        element.classList.remove("open");
        this.navbarOneState = !this.navbarOneState;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
#mobileNavDropdown {
  opacity: 0;
  width: 100%;
  height: 20vh;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #000000, #000000);
  isolation: isolate;
  z-index: 9998;
  transition: 0.5s ease;
  pointer-events: none;

  overflow: scroll;
  .menu {
    width: 100%;
  }
  &.open {
    height: 100vh;
    opacity: 1;
    pointer-events: unset !important;
  }
  ul {
    position: absolute;
    top: 20vh;
    font-size: 16px;
  }
}
</style>
