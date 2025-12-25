<template>
  <div class="bg-black">
    <div
      class="mx-auto flex max-w-[1200px] lg:flex-row flex-col items-center lg:pt-[128px] gap-[137px] lg:gap-[40px] px-[24px] pt-[80px]"
    >
      <div class="flex flex-col gap-5 justify-center items-center w-full">
        <div class="overflow-hidden">
          <h1
            class="fade-item text-[48px] font-bold text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            MSXBridge
          </h1>
        </div>

        <div class="overflow-hidden">
          <p
            class="fade-item text-[30px] font-bold text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            Move assets freely and securely across chains
          </p>
        </div>

        <div class="overflow-hidden">
          <p
            class="fade-item text-[18px] text-center"
            style="
              translate: none;
              rotate: none;
              scale: none;
              transform: translate(0px, 0px);
              opacity: 1;
            "
          >
            Cross-chain is faster and safer, supporting multi-chain
            interoperability and one-click exchange, allowing assets to flow
            freely across global networks
          </p>
        </div>

        <NuxtLink
          to="https://bridge.msx.com/?from=&to="
          target="_blank"
          class="msx-btn rounded-lg!"
        >
          <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
          <span>Go Now</span>
        </NuxtLink>
      </div>

      <div
        class="w-full move-up"
        style="
          translate: none;
          rotate: none;
          scale: none;
          opacity: 1;
          transform: translate(0px, 0px);
        "
      >
        <img
          alt=""
          class="w-full"
          src="/image/page/about/home_v2_01_dark-B1q-gm0P.png"
        />
      </div>
    </div>
  </div>
</template>
