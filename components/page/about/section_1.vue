<template>
  <div class="-mt-16 bg-black">
    <div
      class="relative flex flex-col h-[80vh] items-center justify-start gap-20 overflow-hidden bg-black bg-cover bg-center pb-10 pt-40 lg:flex-col"
      style="background-image: url('/image/page/about/top_bg-CDD65lnQ.png')"
    >
      <div
        class="mx-auto flex w-full max-w-[1200px] items-center justify-center gap-20 lg:flex-col-reverse lg:items-start lg:gap-6 lg:px-6"
      >
        <div
          class="pointer-events-none relative mt-10 flex w-full flex-col items-center justify-center text-[60px]"
        >
          <div class="overflow-hidden">
            <p
              class="fade-item pointer-events-none text-center font-bold text-[#FFFFFF]"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
              "
            >
              Decentralized
            </p>
          </div>
          <div class="overflow-hidden">
            <p
              class="fade-item pointer-events-none text-center font-bold text-[#FFFFFF]"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
              "
            >
              RWA Trading
            </p>
          </div>
          <div class="overflow-hidden">
            <p
              class="fade-item pointer-events-none mt-[18px] text-center text-[18px] text-[#8D8D8D]"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
              "
            >
              Real Value On-Chain from Wall Street to Your Wallet
            </p>
          </div>
          <div
            class="flex justify-center mx-auto mt-12 w-full pointer-events-auto move-up"
            style="
              translate: none;
              rotate: none;
              scale: none;
              opacity: 1;
              transform: translate(0px, 0px);
            "
          >
            <NuxtLink
              to="https://msx.com/us-trading/1/20"
              target="_blank"
              class="msx-btn rounded-lg!"
            >
              <img src="/image/icon/star.png" class="w-5 h-5" />
              <span>Trade Now</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="w-full py-[32px] text-white grid grid-cols-1 lg:grid-cols-4 lg:gap-[24px] px-[24px]"
      >
        <div class="flex flex-col flex-1 items-center">
          <span class="text-[32px] font-bold">$<span>106.58M</span></span
          ><span class="mt-[6px] text-[16px]">24h Vol</span>
        </div>
        <div class="flex flex-col flex-1 items-center">
          <span class="text-[32px] font-bold">$<span>22.27B</span></span
          ><span class="mt-[6px] text-[16px]">Total RWA Trading Volume</span>
        </div>
        <div class="flex flex-col flex-1 items-center">
          <span class="text-[32px] font-bold"><span>200+</span></span
          ><span class="mt-[6px] text-[16px]">RWA Tokens</span>
        </div>
        <div class="flex flex-col flex-1 items-center">
          <span class="text-[32px] font-bold"><span>171.5K</span></span
          ><span class="mt-[6px] text-[16px]">Users</span>
        </div>
      </div>
    </div>
  </div>
</template>
