<template>
  <div class="relative bg-black">
    <page-banner-video :videoUrl="'/image/page/home/bannerVideo.mp4'">
    </page-banner-video>
  </div>

  <div class="relative bg-black">
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-transparent'"
      :isCustomHeight="'100%'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 py-20 lg:grid-cols-2 containerBootstrap lg:py-32"
        >
          <div class="flex flex-col items-start justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">X Card</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              Stablecoins Spending in Currency
            </div>
            <div class="text-[24px] font-bold text-[#bcff2f]">
              Connecting Stablecoins to the Real World Asset
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

  <div class="bg-black h-full lg:h-[20vh]">
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 containerBootstrap">
      <div></div>

      <div class="card bg-[#bcff2f40] w-full shadow-sm">
        <div class="gap-5 card-body">
          <h2 class="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div class="card-actions">
            <NuxtLink
              to="https://msx.com/contract-trading"
              target="_blank"
              class="msx-btn msx-btn-sm rounded-lg!"
            >
              <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
              <span>Trade Fi</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="card bg-[#bcff2f40] w-full shadow-sm">
        <div class="gap-5 card-body">
          <h2 class="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div class="card-actions">
            <NuxtLink
              to="https://msx.com/contract-trading"
              target="_blank"
              class="msx-btn msx-btn-sm rounded-lg!"
            >
              <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
              <span>Trade Fi</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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
      :isCustomHeight="'60vh'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid w-full h-full grid-cols-1 py-20 lg:py-32 lg:grid-cols-2 containerBootstrap"
        >
          <div class="flex flex-col items-start justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">We Have The</div>
            <div class="text-[24px] lg:text-[30px] font-bold">
              Most Users All Over
            </div>
            <div class="text-[24px] lg:text-[30px] font-bold">The World</div>
          </div>

          <div class="flex items-center justify-center h-full">
            <img src="/image/page/home/map2.png" />
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div class="bg-black">
    <div
      class="flex flex-col gap-10 py-20 lg:gap-20 lg:py-32 containerBootstrap"
    >
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div class="flex flex-col items-start justify-start">
          <div class="text-[36px] lg:text-[48px] font-bold">Our Services</div>
          <div class="text-[36px] lg:text-[48px] font-bold">
            Anywhere & Anytime
          </div>
        </div>
        <div>
          Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex,
          ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel
          sapien magna. Morbi eleifend ligula nunc, non elementum sem
          scelerisque a.
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div class="w-full shadow-sm card">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="gap-5 card-body">
            <h2 class="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div class="card-actions">
              <NuxtLink
                to="https://msx.com/contract-trading"
                target="_blank"
                class="msx-btn msx-btn-sm rounded-lg!"
              >
                <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
                <span>Trade Fi</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="w-full shadow-sm card">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="gap-5 card-body">
            <h2 class="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div class="card-actions">
              <NuxtLink
                to="https://msx.com/contract-trading"
                target="_blank"
                class="msx-btn msx-btn-sm rounded-lg!"
              >
                <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
                <span>Trade Fi</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="w-full shadow-sm card">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="gap-5 card-body">
            <h2 class="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div class="card-actions">
              <NuxtLink
                to="https://msx.com/contract-trading"
                target="_blank"
                class="msx-btn msx-btn-sm rounded-lg!"
              >
                <!-- <img src="/image/icon/star.png" class="w-5 h-5" /> -->
                <span>Trade Fi</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          class="relative grid w-full h-full grid-cols-1 gap-10 py-20 lg:gap-20 lg:grid-cols-2 lg:py-32 containerBootstrap"
        >
          <div class="flex items-center justify-center h-full">
            <img src="/image/page/home/phone.png" />
          </div>

          <div
            class="flex flex-col items-center justify-center order-first lg:items-end lg:order-last"
          >
            <div class="text-[36px] lg:text-[48px] font-bold">
              Easier & Hassle-Free
            </div>
            <div class="text-[36px] lg:text-[48px] font-bold">
              Invoice Control
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
          class="relative grid w-full h-full grid-cols-1 gap-10 py-20 lg:gap-20 lg:grid-cols-2 lg:py-32 containerBootstrap"
        >
          <div class="flex flex-col justify-center">
            <div class="text-[36px] lg:text-[48px] font-bold">
              The Gateway to the Future of Digital Finance
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img src="/image/page/home/section_1/1.png" />
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
