<template>
  <div class="bg-black">
    <div
      class="mx-auto flex max-w-[1200px] items-center gap-[137px] pt-[128px] lg:gap-[40px] lg:px-[24px] lg:pt-[80px]"
    >
      <div class="flex w-7/12 flex-col gap-[16px] lg:w-full">
        <div
          class="move-up flex gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <div
            class="cursor-pointer overflow-hidden rounded-[22px] border bg-[--color-background-primary80] p-[32px] transition-all duration-300 lg:p-[20px] h-[260px] w-3/5 border-[--color-border-solid]"
          >
            <!-- <iconpark-icon
              class="block dark:hidden"
              name="defi1"
              icon-id=""
              size="36"
            ></iconpark-icon
            ><iconpark-icon
              class="hidden dark:block"
              name="defidark1"
              icon-id=""
              size="36"
            ></iconpark-icon> -->
            <p class="text-[20px] font-bold lg:text-[16px]">
              Flexible positions, no rollover
            </p>
            <p class="mt-[12px]">
              Strategy flexibility, no contract expiry pressure
            </p>
          </div>
          <div
            class="cursor-pointer overflow-hidden rounded-[22px] border bg-[--color-background-primary80] p-[32px] transition-all duration-300 lg:p-[20px] h-[260px] w-2/5 border-[--color-border-line-more]"
          >
            <!-- <iconpark-icon
              class="block dark:hidden"
              name="defi2"
              icon-id=""
              size="36"
            ></iconpark-icon
            ><iconpark-icon
              class="hidden dark:block"
              name="defidark2"
              icon-id=""
              size="36"
            ></iconpark-icon>
            <p class="text-[20px] font-bold lg:text-[16px]">
              High leverage, long &amp; short trading
            </p>
            <iconpark-icon
              class="mt-[12px]"
              name="home10"
              icon-id=""
              size="24"
              color="var(--color-text)"
            ></iconpark-icon> -->
          </div>
        </div>
        <div
          class="move-up flex gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <div
            class="cursor-pointer overflow-hidden rounded-[22px] border bg-[--color-background-primary80] p-[32px] transition-all duration-300 lg:p-[20px] h-[260px] w-1/2 border-[--color-border-line-more]"
          >
            <!-- <iconpark-icon
              class="block dark:hidden"
              name="defi3"
              icon-id=""
              size="36"
            ></iconpark-icon
            ><iconpark-icon
              class="hidden dark:block"
              name="defidark3"
              icon-id=""
              size="36"
            ></iconpark-icon>
            <p class="text-[20px] font-bold lg:text-[16px]">
              Deep liquidity, low slippage
            </p>
            <iconpark-icon
              class="mt-[12px]"
              name="home10"
              icon-id=""
              size="24"
              color="var(--color-text)"
            ></iconpark-icon> -->
          </div>
          <div
            class="cursor-pointer overflow-hidden rounded-[22px] border bg-[--color-background-primary80] p-[32px] transition-all duration-300 lg:p-[20px] h-[260px] w-1/2 border-[--color-border-line-more]"
          >
            <!-- <iconpark-icon
              class="block dark:hidden"
              name="defi4"
              icon-id=""
              size="36"
            ></iconpark-icon
            ><iconpark-icon
              class="hidden dark:block"
              name="defidark4"
              icon-id=""
              size="36"
            ></iconpark-icon>
            <p class="text-[20px] font-bold lg:text-[16px]">
              Stable liquidation and controllable risks
            </p>
            <iconpark-icon
              class="mt-[12px]"
              name="home10"
              icon-id=""
              size="24"
              color="var(--color-text)"
            ></iconpark-icon> -->
          </div>
        </div>
      </div>

      <div
        class="w-5/12 lg:w-full flex flex-col gap-8 justify-between items-center"
      >
        <div>
          <div class="overflow-hidden">
            <h1
              class="fade-item text-[48px] font-bold lg:text-center lg:text-[36px]"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
              "
            >
              DeFi Perpetuals
            </h1>
          </div>
          <div class="overflow-hidden">
            <p
              class="fade-item text-[30px] font-bold lg:text-center lg:text-[22px]"
              style="
                translate: none;
                rotate: none;
                scale: none;
                transform: translate(0px, 0px);
                opacity: 1;
              "
            >
              Long &amp; Short On-Chain
            </p>
          </div>
        </div>

        <div class="overflow-hidden">
          <p
            class="fade-item text-[18px] text-[--color-text-weak] lg:text-center lg:text-[14px]"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            Diversified returns, capturing opportunities in both rising and
            falling markets, supporting hedging strategies, and helping manage
            risk
          </p>
        </div>

        <NuxtLink
          to="https://msx.com/contract-trading"
          target="_blank"
          class="msx-btn rounded-lg!"
        >
          <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
          <span>Trade Fi</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
