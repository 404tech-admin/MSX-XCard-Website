<template>
  <div class="relative z-50 bg-black">
    <page-banner-video :videoUrl="'/image/page/home/bannerVideo.mp4'">
    </page-banner-video>

    <div class="relative containerBootstrap">
      <div
        class="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:absolute lg:bottom-[-20vh] bg-[#444343] w-full"
      >
        <div class="flex items-center justify-center w-full lg:col-span-2">
          <img src="/image/page/home/section_3/4.png" class="object-cover" />
        </div>

        <div class="w-full shadow-sm lg:col-span-3 card">
          <div class="gap-5 card-body">
            <h2 class="card-title">Funding</h2>
            <p>Stablecoins credited in seconds</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-black lg:pt-[15vh]">
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-transparent'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 py-10 lg:grid-cols-2 containerBootstrap lg:py-32"
        >
          <div class="flex flex-col items-start justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">X Card</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              Global New Gateway to Digital Finance
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img src="/image/page/home/section_1/1a.png" />
          </div>

          <div
            class="grid grid-cols-2 col-span-1 gap-5 lg:grid-cols-4 lg:col-span-2"
          >
            <div class="w-full shadow-sm card">
              <figure>
                <img
                  src="/image/page/home/section_1/1b.png"
                  class="w-32 h-32"
                />
              </figure>
              <div class="items-center gap-5 card-body">
                <h2 class="card-title">Globalwide Spending</h2>
              </div>
            </div>

            <div class="w-full shadow-sm card">
              <figure>
                <img
                  src="/image/page/home/section_1/1c.png"
                  class="w-32 h-32"
                />
              </figure>
              <div class="items-center gap-5 card-body">
                <h2 class="card-title">Instant Withdrawal</h2>
              </div>
            </div>

            <div class="w-full shadow-sm card">
              <figure>
                <img
                  src="/image/page/home/section_1/1d.png"
                  class="w-32 h-32"
                />
              </figure>
              <div class="items-center gap-5 card-body">
                <h2 class="card-title">Free Transfer</h2>
              </div>
            </div>

            <div class="w-full shadow-sm card">
              <figure>
                <img
                  src="/image/page/home/section_1/1e.png"
                  class="w-32 h-32"
                />
              </figure>
              <div class="items-center gap-5 card-body">
                <h2 class="card-title">Accessible US Stock</h2>
              </div>
            </div>
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div
    :style="`
      background-image: black;
    `"
  >
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 py-10 lg:py-32 lg:gap-40 lg:grid-cols-2 containerBootstrap"
        >
          <div class="flex flex-col items-start justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">Funding</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              Stablecoins credited in seconds
            </div>
          </div>

          <div class="flex items-end justify-end w-full h-full">
            <img
              src="/image/page/home/section_2/2.png"
              class="w-full lg:w-[30vw]"
            />
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div
    :style="`
      background-image: black;
    `"
  >
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 gap-10 py-10 lg:gap-40 lg:py-32 lg:grid-cols-2 containerBootstrap"
        >
          <div class="flex items-center justify-center h-full">
            <img src="/image/page/home/section_3/1.png" />
          </div>

          <div
            class="flex flex-col justify-center order-first lg:items-end lg:order-last"
          >
            <div class="text-[36px] lg:text-[48px] font-bold">Trading</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              U.S. Stock RWA
            </div>
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div
    :style="`
      background-image: black;
    `"
  >
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 gap-10 py-10 lg:py-32 lg:gap-40 lg:grid-cols-2 containerBootstrap"
        >
          <div class="flex flex-col items-start justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">Withdrawal</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              Global usage with the X Card
            </div>
          </div>

          <div class="flex items-center justify-center h-full">
            <img src="/image/page/home/section_3/5.png" />
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div
    :style="`
      background-image: black;
    `"
  >
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 gap-10 py-10 lg:gap-40 lg:grid-cols-2 lg:py-32 containerBootstrap"
        >
          <div class="flex items-center justify-center h-full">
            <img src="/image/page/home/section_3/3.png" />
          </div>

          <div
            class="flex flex-col items-center justify-center order-first lg:items-end lg:order-last"
          >
            <div class="text-[24px] lg:text-[30px] font-bold lg:text-end">
              X makes Global Asset Allocation Within Reach
            </div>
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div class="bg-black">
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-transparent'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 gap-10 py-10 lg:gap-40 lg:grid-cols-2 lg:py-32 containerBootstrap"
        >
          <div class="flex flex-col justify-center">
            <div class="text-[24px] lg:text-[30px] font-bold">
              The Gateway to the Future of Digital Finance
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img src="/image/page/home/section_3/2.png" />
          </div>
        </div>
      </template>
    </page-banner-basic>
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
    return {};
  },
};
</script>

<style></style>
