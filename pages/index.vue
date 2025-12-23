<template>
  <div
    :style="`
      background-image: radial-gradient(at top left, #00D7FF2E 12%, #000218 76%);
    `"
  >
    <page-banner-video :videoUrl="'/image/page/home/bannerVideo.mp4'">
    </page-banner-video>
  </div>

  <div class="bg-black h-full lg:h-[20vh]">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 containerBootstrap">
      <div></div>

      <div class="card bg-[#bcff2f40] w-full shadow-sm">
        <div class="card-body gap-5">
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
        <div class="card-body gap-5">
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
    <!-- :bgImage="'/image/page/banner/home.png'" -->
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'60vh'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid grid-cols-1 lg:grid-cols-2 w-full h-full containerBootstrap"
        >
          <div class="flex justify-center items-start flex-col">
            <div class="text-4xl font-bold">We Have The</div>
            <div class="text-4xl font-bold">Most Users All Over</div>
            <div class="text-4xl font-bold">The World</div>
          </div>

          <div class="flex justify-center items-center h-full">
            <img src="/image/page/home/map2.png" />
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div class="bg-black">
    <div class="containerBootstrap py-40 flex flex-col gap-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="flex justify-start items-start flex-col">
          <div class="text-4xl font-bold">Our Services</div>
          <div class="text-4xl font-bold">Anywhere & Anytime</div>
        </div>
        <div>
          Maecenas dictum metus quis euismod feugiat. Sed accumsan maximus ex,
          ut mollis sem. Ut nec lacus id ipsum tincidunt ullamcorper. Cras vel
          sapien magna. Morbi eleifend ligula nunc, non elementum sem
          scelerisque a.
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="card w-full shadow-sm">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="card-body gap-5">
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

        <div class="card w-full shadow-sm">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="card-body gap-5">
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

        <div class="card w-full shadow-sm">
          <figure>
            <img src="/image/page/home/carousel.png" alt="Shoes" />
          </figure>
          <div class="card-body gap-5">
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
    <!-- :bgImage="'/image/page/banner/home.png'" -->
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-black'"
      :isCustomHeight="'60vh'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid grid-cols-1 lg:grid-cols-2 w-full h-full containerBootstrap"
        >
          <div class="flex justify-center items-center h-full">
            <img src="/image/page/home/phone.png" />
          </div>

          <div class="flex justify-center lg:items-end items-center flex-col">
            <div class="text-4xl font-bold">Easier & Hassle-Free</div>
            <div class="text-4xl font-bold">Invoice Control</div>
          </div>
        </div>
      </template>
    </page-banner-basic>
  </div>

  <div
    :style="`
      background-image: radial-gradient(at top left, #00D7FF2E 12%, #000218 76%);
    `"
  >
    <!-- :bgImage="'/image/page/banner/home.png'" -->
    <page-banner-basic
      :id="'02'"
      :backgroundPosition="'50%, 50% 100%'"
      :bgColor="'bg-transparent'"
      :isCustomHeight="'80vh'"
    >
      <template v-slot:contentBox>
        <div
          class="relative grid grid-cols-1 lg:grid-cols-2 w-full h-full containerBootstrap"
        >
          <div class="flex justify-center flex-col">
            <div class="text-4xl font-bold">Get Ready To Have</div>
            <div class="text-4xl font-bold">Best Smart</div>
            <div class="text-4xl font-bold">Payments</div>
            <div class="text-4xl font-bold">in The World</div>
          </div>

          <div
            class="flex lg:justify-end justify-center items-center lg:items-end"
          >
            <img src="/image/page/home/card_two.png" />
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
