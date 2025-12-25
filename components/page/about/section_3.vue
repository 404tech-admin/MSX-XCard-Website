<template>
  <div class="bg-black">
    <div
      class="mx-auto flex flex-col lg:flex-row max-w-[1200px] items-center gap-[160px] lg:pt-[200px] lg:gap-[40px] px-[24px] pt-[80px]"
    >
      <div class="flex flex-col gap-[40px] w-full">
        <NuxtLink
          to="https://msx.com"
          target="_blank"
          class="flex items-center justify-between rounded-[16px] border border-[#ffffff12] p-[28px] text-[16px] bg-[#141415] lg:gap-[32px] cursor-pointer"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <span>Step 1: Please link your wallet</span>
          <i class="fa-solid fa-arrow-trend-up"></i>
        </NuxtLink>
        <NuxtLink
          to="https://msx.com"
          target="_blank"
          class="flex items-center justify-between rounded-[16px] border p-[28px] border-[#ffffff12] text-[16px] bg-[#141415] lg:gap-[32px] cursor-pointer"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <span>Step 2: Please perform quick top-up</span>
          <i class="fa-solid fa-arrow-trend-up"></i>
        </NuxtLink>
        <NuxtLink
          to="https://msx.com/us-trading/1/20"
          target="_blank"
          class="flex items-center justify-between rounded-[16px] border p-[28px] text-[16px] border-[#ffffff12] bg-[#141415] lg:gap-[32px] cursor-pointer"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <span>Step 3: Start your trading journey</span>
          <i class="fa-solid fa-arrow-trend-up"></i>
        </NuxtLink>
      </div>

      <div class="flex flex-col justify-center items-center w-full">
        <div class="overflow-hidden">
          <h1
            class="fade-item text-[48px] font-bold lg:text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            Only 3 steps required
          </h1>
        </div>
        <div class="overflow-hidden">
          <p
            class="fade-item text-[30px] font-bold lg:text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            Start your trading journey
          </p>
        </div>
        <div class="overflow-hidden">
          <p
            class="fade-item mt-[32px] text-[18px] lg:text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            MSX provides you with the simplest way to use and the best user
            experience, efficient and convenient at your fingertips
          </p>
        </div>

        <NuxtLink
          to="https://msx.com/us-trading/1/20"
          target="_blank"
          class="msx-btn rounded-lg! mt-[32px]"
        >
          <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
          <span>Trade Fi</span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="bg-black">
    <div class="mx-auto max-w-[1200px] lg:pt-[200px] px-[24px] pt-[80px]">
      <h1
        class="text-center text-[48px] font-bold"
        style="
          translate: none;
          rotate: none;
          scale: none;
          opacity: 1;
          transform: translate(0px, 0px);
        "
      >
        Our advantages
      </h1>

      <p
        class="mt-[6px] text-center text-[18px]"
        style="
          translate: none;
          rotate: none;
          scale: none;
          opacity: 1;
          transform: translate(0px, 0px);
        "
      >
        We will escort your safe transactions
      </p>

      <div
        class="mt-[64px] grid grid-cols-1 gap-[80px] lg:grid-cols-4 lg:gap-[24px]"
      >
        <div
          class="flex flex-col items-center gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <img src="/image/page/about/svg/icon5.svg" class="w-9" />
          <span class="text-center text-[16px] font-bold"
            >Lightning Transfer</span
          ><span class="text-center text-[14px]"
            >10-second transfers via optimized path selection</span
          >
        </div>

        <div
          class="flex flex-col items-center gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <img src="/image/page/about/svg/icon6.svg" class="w-9" />
          <span class="text-center text-[16px] font-bold">Always-On</span
          ><span class="text-center text-[14px]"
            >24/7 operation with instant failover for zero downtime</span
          >
        </div>

        <div
          class="flex flex-col items-center gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <img src="/image/page/about/svg/icon7.svg" class="w-9" />
          <span class="text-center text-[16px] font-bold">Triple-Shield</span
          ><span class="text-center text-[14px]"
            >Audited contracts + multisig + time-lock for attack
            prevention</span
          >
        </div>

        <div
          class="flex flex-col items-center gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <img src="/image/page/about/svg/icon8.svg" class="w-9" />
          <span class="text-center text-[16px] font-bold">Direct Swaps</span
          ><span class="text-center text-[14px]"
            >Direct asset transfers, one-click wallet integration</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
