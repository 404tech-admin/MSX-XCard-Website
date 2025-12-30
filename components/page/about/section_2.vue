<template>
  <div class="bg-black">
    <div
      class="mx-auto flex max-w-[1200px] lg:flex-row flex-col items-center lg:pt-[128px] gap-[137px] lg:gap-[40px] containerBootstrap pt-[80px]"
    >
      <div class="flex flex-col gap-[16px] w-full">
        <div
          class="flex flex-col lg:flex-row gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <div
            v-for="(item, index) in gridList1"
            class="overflow-hidden cursor-pointer gap-5 flex flex-col rounded-[22px] border-[#ffffff12] border p-[20px] bg-[#141415] h-[260px] transition-all duration-300"
            @click="selectedGrid = item.id"
            :class="[
              selectedGrid == item.id ? 'lg:w-3/5 w-full' : 'lg:w-2/5 w-full',
              selectedGrid != 1 && selectedGrid != 2 ? 'w-full lg:w-1/2!' : '',
            ]"
          >
            <img :src="item.icon" class="w-9" />

            <div class="flex flex-col gap-2">
              <p class="text-[20px] font-bold">{{ item.title }}</p>
              <p :class="selectedGrid == item.id ? 'flex' : 'lg:hidden'">
                {{ item.subtitle }}
              </p>

              <div class="hidden lg:flex">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-[16px]"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0px, 0px);
          "
        >
          <div
            v-for="(item, index) in gridList2"
            class="overflow-hidden cursor-pointer gap-5 flex flex-col rounded-[22px] border border-[#ffffff12] p-[20px] bg-[#141415] h-[260px] transition-all duration-300"
            @click="selectedGrid = item.id"
            :class="[
              selectedGrid == item.id ? 'lg:w-3/5 w-full' : 'lg:w-2/5 w-full',
              selectedGrid != 3 && selectedGrid != 4 ? 'w-full lg:w-1/2!' : '',
            ]"
          >
            <img :src="item.icon" class="w-9" />

            <div class="flex flex-col gap-2">
              <p class="text-[20px] font-bold">{{ item.title }}</p>
              <p :class="selectedGrid == item.id ? 'flex' : 'lg:hidden'">
                {{ item.subtitle }}
              </p>

              <div class="hidden lg:flex">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between w-full gap-8">
        <div>
          <div class="overflow-hidden">
            <h1
              class="fade-item text-[36px] lg:text-[48px] font-bold lg:text-center"
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
              class="fade-item text-[24px] lg:text-[30px] font-bold text-center"
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
            class="fade-item text-[16px] lg:text-[18px] text-center"
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

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    const { locale } = useI18n();

    return { config, locale };
  },
  data() {
    return {
      selectedGrid: 1,
      gridList1: [
        {
          id: 1,
          icon: "/image/page/about/svg/icon1.svg",
          title: "Flexible positions, no rollover",
          subtitle: "Strategy flexibility, no contract expiry pressure",
        },
        {
          id: 2,
          icon: "/image/page/about/svg/icon2.svg",
          title: "High leverage, long & short trading",
          subtitle: "Go long or short, easily capture market ups and downs",
        },
      ],
      gridList2: [
        {
          id: 3,
          icon: "/image/page/about/svg/icon3.svg",
          title: "Deep liquidity, low slippage",
          subtitle:
            "Efficient matching, trade prices closely follow the market",
        },
        {
          id: 4,
          icon: "/image/page/about/svg/icon4.svg",
          title: "Stable liquidation and controllable risks",
          subtitle:
            "Multi-source oracle quotes to avoid incorrect liquidations caused by abnormal fluctuations",
        },
      ],
    };
  },
};
</script>
