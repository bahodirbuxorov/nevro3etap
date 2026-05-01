<template>
  <section id="experts" class="experts">
    <div class="container">
      <h1 data-aos="fade-up" class="experts__title">
        <span style="color: #5aab29;">Тажрибали маслаҳатчиларнинг</span> "Неврослим" ҳақидаги фикрлари!
      </h1>

      <!-- Main Swiper -->
      <div class="experts__main" data-aos="fade-up">
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
          <SwiperSlide v-for="(item, index) in experts" :key="index">
            <div class="experts__card">
              <a data-fancybox :href="item.url" class="experts__play">
                <IconsPlayBtn />
              </a>
              <img :src="thumbnail(item.url)" alt="Img" class="experts__img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Thumbs Swiper -->
      <div class="experts__thumbsWrap">
        <Swiper :loop="true" :free-mode="true" :watch-slides-progress="true" :modules="modules" :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }" :breakpoints="{
          320: { slidesPerView: 5, spaceBetween: 8 },
          768: { slidesPerView: 5, spaceBetween: 12 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
          1280: { slidesPerView: 8, spaceBetween: 12 }
        }" class="experts__thumbs" @swiper="setThumbsSwiper">
          <SwiperSlide v-for="(item, index) in experts" :key="index">
            <div class="experts__thumbItem">
              <img :src="thumbnail(item.url)" alt="Thumbnail" class="experts__thumbImg" />
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

/* Swiper modules */
const modules = [Autoplay, Navigation, FreeMode, Thumbs]

/* Thumbs swiper reference */
const thumbsSwiper = ref<any>(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

/* Youtube thumbnail composable */
const { getThumbnail } = useYoutubeThumbnail()

const thumbnail = (link: string) => {
  return getThumbnail(link)
}

/* Fancybox init (SSR safe) */
onMounted(() => {
  Fancybox.bind('[data-fancybox]', {})
})

onBeforeUnmount(() => {
  Fancybox.destroy()
})

/* Experts list */
interface Expert {
  url: string
}

const experts: Expert[] = [
  { url: 'https://www.youtube.com/embed/jjcvOUnVdOI' },
  { url: 'https://www.youtube.com/embed/g_HQ5voaJhg' },
  { url: 'https://www.youtube.com/embed/wKSMGVmhnDc' },
  { url: 'https://www.youtube.com/embed/BgROwg-U4k8' },
  { url: 'https://www.youtube.com/embed/Wt9ATFL7AzU' }
]
</script>

<style scoped lang="scss">
/* Breakpoints */
$md: 768px;
$lg: 1024px;
$xl: 1280px;

.experts {
  padding: 40px 0;
  overflow: hidden;
  position: relative;
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
    margin-top: 40px;
  }

  &__card {
    background: #e5e7eb;
    border-radius: 8px;
    position: relative;
    aspect-ratio: 9 / 16; // video format
    overflow: hidden;
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
    border-radius: 5px;
  }

  &__thumbsWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;

    @media (min-width: $lg) {
      gap: 16px;
      margin-top: 28px;
    }
  }

  &__thumbs {
    width: 100%;
  }

  &__thumbItem {
    background: #e5e7eb;
    border-radius: 5px;
    overflow: hidden;
    height: 80px;
    cursor: pointer;
    transition: opacity 0.2s ease;


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
</style>