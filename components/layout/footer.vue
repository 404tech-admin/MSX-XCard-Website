<template>
  <div class="bg-black">
    <footer
      class="py-10 text-white footer sm:footer-horizontal containerBootstrap"
    >
      <aside>
        <div class="flex flex-col gap-5">
          <img src="/image/logo/msx_logo.png" class="h-10" />
        </div>

        <div class="flex flex-col gap-0">
          <div>Innovation Drive Growth</div>
          <div>Do our best to help users achieve wealth growth</div>
        </div>
      </aside>

      <nav>
        <h6 class="opacity-100 footer-title">Community</h6>
        <div class="flex flex-col gap-5">
          <NuxtLink
            to="https://x.com/msxcom"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-brands fa-x-twitter"></i>MSX Official</NuxtLink
          >
          <NuxtLink
            to="https://x.com/MSX_CN"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-brands fa-x-twitter"></i>MSX CN</NuxtLink
          >
          <NuxtLink
            to="https://t.me/MSXGlobal"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-brands fa-telegram"></i>Telegram Global</NuxtLink
          >
          <NuxtLink
            to="https://t.me/MSXOfficial"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-brands fa-telegram"></i>Telegram CN</NuxtLink
          >
          <NuxtLink
            to="https://discord.com/invite/uGW5h9tdJE"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-brands fa-discord"></i>Discord</NuxtLink
          >
          <NuxtLink
            to="https://community.mystonks.org/"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            ><i class="fa-solid fa-check-to-slot"></i>Community Voting</NuxtLink
          >
        </div>
      </nav>

      <nav>
        <h6 class="opacity-100 footer-title">About Us</h6>
        <div class="flex flex-col gap-5">
          <NuxtLink
            to="/about"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            About MSX</NuxtLink
          >
          <NuxtLink
            to="/contact_us"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Contact Us</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/notice-center"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Notice</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/customer-support"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Customer Support</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/term-service"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Term of Service</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/privacy-protection"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Privacy Protection</NuxtLink
          >
          <NuxtLink
            to="#"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            White Paper</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/agency-plan"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
          >
            Affiliate Program</NuxtLink
          >
        </div>
      </nav>

      <nav>
        <h6 class="opacity-100 footer-title">Others</h6>
        <div class="flex flex-col gap-5">
          <NuxtLink
            to="https://msx.com/aml-statement"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            >AML Statement</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/disclaimer-statement"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            >Disclaimer</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/law-request"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            >Law Enforcement Request</NuxtLink
          >
          <NuxtLink
            to="https://msx.com/reserve-fund"
            target="_blank"
            class="flex items-center gap-2 opacity-50 link link-hover hover:no-underline hover:opacity-100"
            >Proof of Reserves</NuxtLink
          >
        </div>
      </nav>
    </footer>

    <footer
      class="flex items-center justify-center px-4 py-5 text-white bg-black border-t border-gray-800 footer footer-horizontal"
    >
      <div class="opacity-50">© 2025 MSX All rights reserved</div>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    return { config };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
