<template>
  <footer class="footer sm:footer-horizontal bg-black text-white p-10">
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
      <h6 class="footer-title opacity-100">Community</h6>
      <div class="flex gap-5 flex-col">
        <NuxtLink
          to="https://x.com/msxcom"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-brands fa-x-twitter"></i>MSX Official</NuxtLink
        >
        <NuxtLink
          to="https://x.com/MSX_CN"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-brands fa-x-twitter"></i>MSX CN</NuxtLink
        >
        <NuxtLink
          to="https://t.me/MSXGlobal"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-brands fa-telegram"></i>Telegram Global</NuxtLink
        >
        <NuxtLink
          to="https://t.me/MSXOfficial"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-brands fa-telegram"></i>Telegram CN</NuxtLink
        >
        <NuxtLink
          to="https://discord.com/invite/uGW5h9tdJE"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-brands fa-discord"></i>Discord</NuxtLink
        >
        <NuxtLink
          to="https://community.mystonks.org/"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          ><i class="fa-solid fa-check-to-slot"></i>Community Voting</NuxtLink
        >
      </div>
    </nav>

    <nav>
      <h6 class="footer-title opacity-100">About Us</h6>
      <div class="flex gap-5 flex-col">
        <NuxtLink
          to="/about"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          About MSX</NuxtLink
        >
        <NuxtLink
          to="/contact_us"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Contact Us</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/notice-center"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Notice</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/customer-support"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Customer Support</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/term-service"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Term of Service</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/privacy-protection"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Privacy Protection</NuxtLink
        >
        <NuxtLink
          to="#"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          White Paper</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/agency-plan"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
        >
          Affiliate Program</NuxtLink
        >
      </div>
    </nav>

    <nav>
      <h6 class="footer-title opacity-100">Others</h6>
      <div class="flex gap-5 flex-col">
        <NuxtLink
          to="https://msx.com/aml-statement"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          >AML Statement</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/disclaimer-statement"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          >Disclaimer</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/law-request"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          >Law Enforcement Request</NuxtLink
        >
        <NuxtLink
          to="https://msx.com/reserve-fund"
          target="_blank"
          class="link link-hover opacity-50 flex gap-2 items-center hover:no-underline hover:opacity-100"
          >Proof of Reserves</NuxtLink
        >
      </div>
    </nav>
  </footer>

  <footer
    class="flex justify-center items-center px-4 py-5 footer footer-horizontal bg-black text-white border-t border-gray-800"
  >
    <div class="opacity-50">© 2025 MSX All rights reserved</div>
  </footer>
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
