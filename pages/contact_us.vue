<template>
  <div class="bg-black">
    <div class="flex flex-col gap-[40px] px-[16px] lg:gap-0">
      <div
        class="flex h-[180px] flex-col justify-center bg-cover bg-center"
        style="
          background-image: url('/image/page/contact_us/property-bg-5lFlbQP8.png');
        "
      >
        <p class="text-center text-[44px] font-bold text-white">Contact us</p>
        <span class="mt-[4px] text-center text-[18px] text-white"
          >Contact Our Team</span
        >
      </div>

      <div
        class="px-auto mx-auto mb-[80px] grid max-w-[1152px] grid-cols-2 gap-[40px] lg:grid-cols-2"
      >
        <div
          class="h-[278px] w-[556px] rounded-[16px] border border-[--color-border-line] px-[40px] py-[40px] xl:w-auto"
        >
          <img
            alt=""
            class="mb-[16px] hidden h-[60px] w-[60px] dark:block"
            src="data:image/png;base64,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"
          /><img
            alt=""
            class="mb-[16px] h-[60px] w-[60px] dark:hidden"
            src="data:image/png;base64,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"
          />
          <div class="mb-[8px] text-[20px] font-medium">Contact Email</div>
          <div class="mb-[16px] w-auto text-[16px] text-[--color-text-subtle]">
            Please send your inquiries to our support email
          </div>
          <div class="">
            <p class="text-[--color-text-green-deep] cursor-pointer">
              info@msx.com
            </p>
            <p class="text-[--color-text-subtle]">
              Reply within 24 hours on weekdays
            </p>
          </div>
        </div>
        <div
          class="h-[278px] w-[556px] rounded-[16px] border border-[--color-border-line] px-[40px] py-[40px] xl:w-auto"
        >
          <img
            alt=""
            class="mb-[16px] h-[60px] w-[60px]"
            src="data:image/png;base64,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"
          />
          <div class="mb-[8px] text-[20px] font-medium">
            Online Customer Service
          </div>
          <div class="mb-[16px] w-auto text-[16px] text-[--color-text-subtle]">
            Click to contact support
          </div>
          <div class="">
            <p class="text-[--color-text-green-deep] cursor-pointer"></p>
          </div>
        </div>
        <div
          class="h-[278px] w-[556px] rounded-[16px] border border-[--color-border-line] px-[40px] py-[40px] xl:w-auto"
        >
          <img
            alt=""
            class="mb-[16px] h-[60px] w-[60px]"
            src="data:image/png;base64,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"
          />
          <div class="mb-[8px] text-[20px] font-medium">Telegram Community</div>
          <div class="mb-[16px] w-auto text-[16px] text-[--color-text-subtle]">
            Join our Telegram community for the latest updates
          </div>
          <button
            type="button"
            class="ant-btn css-ssgg9n ant-btn-round ant-btn-ghost ant-btn-lg h-[38px] border-[--color-text] py-[8px] text-[14px] [&amp;.ant-btn.ant-btn-round.ant-btn-md]:pl-[32px] [&amp;.ant-btn.ant-btn-round.ant-btn-md]:pr-[32px]"
          >
            <span>Join Community</span>
          </button>
        </div>
        <div
          class="h-[278px] w-[556px] rounded-[16px] border border-[--color-border-line] px-[40px] py-[40px] xl:w-auto"
        >
          <img
            alt=""
            class="mb-[16px] hidden h-[60px] w-[60px] dark:block"
            src="data:image/png;base64,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"
          /><img
            alt=""
            class="mb-[16px] h-[60px] w-[60px] dark:hidden"
            src="data:image/png;base64,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"
          />
          <div class="mb-[8px] text-[20px] font-medium">Social Media</div>
          <div class="mb-[16px] w-auto text-[16px] text-[--color-text-subtle]">
            Follow our X account for the latest news
          </div>
          <div class="">
            <p
              class="rounded-[8px] bg-[--color-background-primary50] px-[12px] py-[12px] text-[--color-text-green-deep] cursor-pointer"
            >
              @MSX_COM
            </p>
          </div>
        </div>
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
    return {};
  },
};
</script>

<style></style>
