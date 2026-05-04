<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h1 class="testimonials__title">
        Mижозларимизнинг ҳаётдаги <span style="color: #5aab29;">ижобий ўзгаришларига</span> ўзингиз гувоҳ бўлинг:
      </h1>

      <!-- Main Swiper -->
      <div class="testimonials__main">
        <Swiper :loop="true" :thumbs="{ swiper: thumbsSwiper }" :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }" :modules="modules" :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 }
        }">
          <SwiperSlide v-for="(item, index) in clients" :key="index">
            <div class="testimonials__card">
              <a data-fancybox :href="item.url" class="testimonials__play">
                <IconsPlayBtn />
              </a>
              <img :src="thumbnail(item.url)" alt="Img" class="testimonials__img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Thumbs Swiper -->
      <div class="testimonials__thumbsWrap">
        <Swiper :loop="true" :free-mode="true" :watch-slides-progress="true" :modules="modules" :navigation="{
          nextEl: '.swiper-button-next-custom1',
          prevEl: '.swiper-button-prev-custom1'
        }" :breakpoints="{
          320: { slidesPerView: 5, spaceBetween: 8 },
          768: { slidesPerView: 5, spaceBetween: 12 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
          1280: { slidesPerView: 8, spaceBetween: 12 }
        }" class="testimonials__thumbs" @swiper="setThumbsSwiper">
          <SwiperSlide v-for="(item, index) in clients" :key="index">
            <div class="testimonials__thumbItem">
              <img :src="thumbnail(item.url)" alt="Thumbnail" class="testimonials__thumbImg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { Autoplay, Navigation, FreeMode, Thumbs } from 'swiper/modules'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const modules = [Autoplay, Navigation, FreeMode, Thumbs]

const thumbsSwiper = ref<any>(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const { getThumbnail } = useYoutubeThumbnail()
const thumbnail = (link: string) => getThumbnail(link)

onMounted(() => {
  Fancybox.bind('[data-fancybox]', {})
})

onBeforeUnmount(() => {
  Fancybox.destroy()
})

interface ClientVideo {
  url: string
}

const clients: ClientVideo[] = [
  { url: 'https://youtube.com/shorts/gWgsIkBhJfo?feature=share' },
  { url: 'https://youtube.com/shorts/oTCpi0GzWWE?feature=share' },
  // { url: 'https://youtube.com/shorts/gIS0JU5YawU?feature=share' },
  { url: 'https://youtube.com/shorts/_XRIeLWejJU' },
  { url: 'https://youtube.com/shorts/VGarj-9-blY' },
  { url: 'https://youtube.com/shorts/1lmIMLciYZo' },
  { url: 'https://youtube.com/shorts/6YJXqjVC6Zg' }
]
</script>

<style scoped lang="scss">
$md: 768px;
$lg: 1024px;
$xl: 1280px;

.testimonials {
  padding: 40px 0;
  overflow: hidden;
  background: #e4f1ff;

  @media (min-width: $lg) {
    padding: 64px 0;
  }


  &__title {
    text-align: center;
    font-weight: 900;
    font-size: 28px;
    max-width: 732px;
    margin: 0 auto;

    @media (min-width: $lg) {
      font-size: 38px;
    }

    @media (min-width: $xl) {
      font-size: 50px;
    }
  }

  &__main {
    margin-top: 24px;

    @media (min-width: $lg) {
      margin-top: 40px;
    }
  }

  /* MAIN CARD: fixed height emas, ratio bilan */
  &__card {
    background: #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 9 / 16;
    /* shorts uchun ideal */
  }

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 10;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__thumbsWrap {
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (min-width: $lg) {
      margin-top: 20px;
      gap: 12px;
    }
  }

  &__thumbItem {
    background: #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    transition: opacity 0.2s ease;
    height: 80px;

    @media (min-width: $lg) {
      height: 96px;
    }
  }

  &__thumbImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

/* Swiper slide height fix (ba’zan kerak bo‘ladi) */
.swiper-slide {
  height: auto !important;
}
</style>
