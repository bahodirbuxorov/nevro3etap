import { a as buildAssetsURL, p as publicAssetsURL } from '../routes/renderer.mjs';
import { ref, unref, withCtx, createVNode, mergeProps, defineComponent, openBlock, createBlock, Fragment, renderList, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import moment from 'moment';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'maska/vue';

const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "23",
    height: "21",
    viewBox: "0 0 23 21",
    fill: "none"
  }, _attrs))}><ellipse cx="13.5" cy="10.5002" rx="6.5" ry="5.93478" fill="white"></ellipse><path d="M11.5 0C12.3946 4.96463e-05 13.2585 0.297574 13.9303 0.836947L14.1074 0.989214L14.9102 1.7222C15.1305 1.92205 15.4182 2.04821 15.7268 2.08029L15.8821 2.08869H17.0322C17.9721 2.08864 18.8765 2.41693 19.5598 3.00622C20.243 3.59552 20.6535 4.40117 20.707 5.25796L20.7127 5.44908V6.4992C20.7127 6.78273 20.8185 7.05891 21.0094 7.27944L21.113 7.38445L21.9146 8.11744C22.5791 8.72068 22.9665 9.5326 22.9979 10.3877C23.0293 11.2427 22.7024 12.0765 22.0837 12.7191L21.9169 12.8808L21.1141 13.6138C20.8952 13.8149 20.757 14.0776 20.7219 14.3594L20.7127 14.5011V15.5512C20.7128 16.4094 20.3532 17.2351 19.7078 17.859C19.0623 18.4828 18.18 18.8576 17.2416 18.9064L17.0322 18.9116H15.8821C15.572 18.9117 15.2709 19.0072 15.0275 19.1826L14.9125 19.2771L14.1097 20.009C13.449 20.6157 12.5597 20.9694 11.6232 20.9981C10.6867 21.0268 9.77348 20.7283 9.06973 20.1634L8.89261 20.0111L8.0898 19.2781C7.86948 19.0783 7.58177 18.9521 7.2732 18.92L7.11793 18.9116H5.96778C5.02785 18.9117 4.12353 18.5834 3.44024 17.9941C2.75696 17.4048 2.3465 16.5992 2.29305 15.7424L2.2873 15.5512V14.5011C2.28719 14.218 2.18266 13.9431 1.99056 13.7209L1.88704 13.6159L1.08539 12.8829C0.420926 12.2796 0.0334876 11.4677 0.00207113 10.6127C-0.0293453 9.7576 0.297626 8.9238 0.916317 8.28126L1.08309 8.11954L1.88589 7.38655C2.10478 7.18539 2.24296 6.92271 2.27809 6.64097L2.2873 6.4992V5.44908L2.29305 5.25796C2.3444 4.43408 2.72599 3.65626 3.36509 3.07275C4.00418 2.48923 4.85609 2.14083 5.75845 2.09394L5.96778 2.08869H7.11793C7.42803 2.0886 7.72906 1.99316 7.97249 1.81776L8.0875 1.72325L8.89031 0.991314C9.23229 0.677211 9.63891 0.42793 10.0868 0.257804C10.5346 0.0876782 11.0149 6.41373e-05 11.5 0ZM15.7521 7.64698C15.5364 7.45011 15.2439 7.33952 14.9389 7.33952C14.634 7.33952 14.3415 7.45011 14.1258 7.64698L10.3383 11.104L8.8512 9.74722L8.74309 9.66006C8.51192 9.49686 8.22138 9.42012 7.93048 9.44542C7.63958 9.47072 7.37013 9.59617 7.17687 9.79629C6.98361 9.9964 6.88102 10.2562 6.88993 10.5229C6.89885 10.7895 7.01861 11.0431 7.22489 11.2321L9.52519 13.3323L9.63331 13.4195C9.8546 13.5762 10.1309 13.6539 10.4104 13.6378C10.69 13.6218 10.9535 13.5131 11.1515 13.3323L15.7521 9.13185L15.8476 9.03314C16.0192 8.83109 16.1042 8.5788 16.0867 8.32359C16.0691 8.06839 15.9501 7.82781 15.7521 7.64698Z" fill="url(#paint0_linear_1192_3)"></path><defs><linearGradient id="paint0_linear_1192_3" x1="-1.99699e-07" y1="2.89655" x2="24.0667" y2="4.44758" gradientUnits="userSpaceOnUse"><stop stop-color="#004EFF"></stop><stop offset="0.333333" stop-color="#0E88F7"></stop><stop offset="0.666667" stop-color="#007EFB"></stop><stop offset="1" stop-color="#004EFF"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Check.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" stroke-width="3"></path><path d="M19 22.3996V25.6004C19 28.639 19 30.1582 19.9115 30.7724C20.823 31.3864 22.0696 30.707 24.563 29.3482L27.4994 27.7476C30.4998 26.1124 32 25.2948 32 24C32 22.7052 30.4998 21.8876 27.4994 20.2524L24.563 18.6519C22.0696 17.293 20.823 16.6136 19.9115 17.2276C19 17.8417 19 19.361 19 22.3996Z" fill="white"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/PlayBtn.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
function useYoutubeThumbnail() {
  function getThumbnail(url) {
    if (!url) return void 0;
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (!match) return void 0;
    const videoId = match[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return { getThumbnail };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Autoplay, Navigation, FreeMode, Thumbs];
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const { getThumbnail } = useYoutubeThumbnail();
    const thumbnail = (link) => getThumbnail(link);
    const clients = [
      { url: "https://youtube.com/shorts/gWgsIkBhJfo?feature=share" },
      { url: "https://youtube.com/shorts/oTCpi0GzWWE?feature=share" },
      // { url: 'https://youtube.com/shorts/gIS0JU5YawU?feature=share' },
      { url: "https://youtube.com/shorts/_XRIeLWejJU" },
      { url: "https://youtube.com/shorts/VGarj-9-blY" },
      { url: "https://youtube.com/shorts/1lmIMLciYZo" },
      { url: "https://youtube.com/shorts/6YJXqjVC6Zg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsPlayBtn = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "testimonials"
      }, _attrs))} data-v-311bf609><div class="container" data-v-311bf609><h1 class="testimonials__title" data-v-311bf609> M\u0438\u0436\u043E\u0437\u043B\u0430\u0440\u0438\u043C\u0438\u0437\u043D\u0438\u043D\u0433 \u04B3\u0430\u0451\u0442\u0434\u0430\u0433\u0438 <span style="${ssrRenderStyle({ "color": "#5aab29" })}" data-v-311bf609>\u0438\u0436\u043E\u0431\u0438\u0439 \u045E\u0437\u0433\u0430\u0440\u0438\u0448\u043B\u0430\u0440\u0438\u0433\u0430</span> \u045E\u0437\u0438\u043D\u0433\u0438\u0437 \u0433\u0443\u0432\u043E\u04B3 \u0431\u045E\u043B\u0438\u043D\u0433: </h1><div class="testimonials__main" data-v-311bf609>`);
      _push(ssrRenderComponent(unref(Swiper), {
        loop: true,
        thumbs: { swiper: thumbsSwiper.value },
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        modules,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(clients, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="testimonials__card" data-v-311bf609${_scopeId2}><a data-fancybox${ssrRenderAttr("href", item.url)} class="testimonials__play" data-v-311bf609${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconsPlayBtn, null, null, _parent3, _scopeId2));
                    _push3(`</a><img${ssrRenderAttr("src", thumbnail(item.url))} alt="Img" class="testimonials__img" data-v-311bf609${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "testimonials__card" }, [
                        createVNode("a", {
                          "data-fancybox": "",
                          href: item.url,
                          class: "testimonials__play"
                        }, [
                          createVNode(_component_IconsPlayBtn)
                        ], 8, ["href"]),
                        createVNode("img", {
                          src: thumbnail(item.url),
                          alt: "Img",
                          class: "testimonials__img"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(clients, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "testimonials__card" }, [
                      createVNode("a", {
                        "data-fancybox": "",
                        href: item.url,
                        class: "testimonials__play"
                      }, [
                        createVNode(_component_IconsPlayBtn)
                      ], 8, ["href"]),
                      createVNode("img", {
                        src: thumbnail(item.url),
                        alt: "Img",
                        class: "testimonials__img"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="testimonials__thumbsWrap" data-v-311bf609>`);
      _push(ssrRenderComponent(unref(Swiper), {
        loop: true,
        "free-mode": true,
        "watch-slides-progress": true,
        modules,
        navigation: {
          nextEl: ".swiper-button-next-custom1",
          prevEl: ".swiper-button-prev-custom1"
        },
        breakpoints: {
          320: { slidesPerView: 5, spaceBetween: 8 },
          768: { slidesPerView: 5, spaceBetween: 12 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
          1280: { slidesPerView: 8, spaceBetween: 12 }
        },
        class: "testimonials__thumbs",
        onSwiper: setThumbsSwiper
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(clients, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="testimonials__thumbItem" data-v-311bf609${_scopeId2}><img${ssrRenderAttr("src", thumbnail(item.url))} alt="Thumbnail" class="testimonials__thumbImg" data-v-311bf609${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "testimonials__thumbItem" }, [
                        createVNode("img", {
                          src: thumbnail(item.url),
                          alt: "Thumbnail",
                          class: "testimonials__thumbImg"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(clients, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "testimonials__thumbItem" }, [
                      createVNode("img", {
                        src: thumbnail(item.url),
                        alt: "Thumbnail",
                        class: "testimonials__thumbImg"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-311bf609"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="red" stroke="#888888" d="M12 19.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm2-3h-4v-.129A62 62 0 0 0 8.033.88L8 .75V.5h8v.25l-.033.129A62 62 0 0 0 14 16.37z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Und.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none"><g clip-path="url(#clip0_1046_1220)"><path d="M16.5117 1.93164C19.8726 1.93299 23.1297 3.09622 25.7312 5.22422C28.3326 7.35222 30.1183 10.3141 30.7859 13.6081C31.4534 16.9021 30.9616 20.3255 29.3939 23.2984C27.8261 26.2713 25.2788 28.6107 22.1836 29.9204C18.6238 31.4247 14.6122 31.4532 11.0313 29.9997C7.45043 28.5462 4.59363 25.7298 3.08936 22.1699C1.58508 18.6101 1.55656 14.5985 3.01005 11.0176C4.46355 7.43676 7.28001 4.57996 10.8398 3.07568C12.6342 2.31636 14.5634 1.92724 16.5117 1.93164ZM16.5117 -0.00195312C7.39934 -0.00195312 0.0117188 7.38566 0.0117188 16.498C0.0117188 25.6104 7.39934 32.998 16.5117 32.998C25.6241 32.998 33.0117 25.6104 33.0117 16.498C33.0117 7.38566 25.6241 -0.00195312 16.5117 -0.00195312Z" fill="#5AAB29"></path><path d="M21.322 25.3833C20.3636 25.3188 19.0126 24.9882 17.6939 24.5164C13.0443 22.8522 8.50742 18.4185 7.5432 12.2168C7.37175 11.1127 7.55222 10.104 8.38882 9.28288C8.66919 9.00831 8.91863 8.70281 9.19255 8.42179C10.2238 7.36025 11.7307 7.33318 12.7987 8.35282C13.1371 8.67509 13.4813 8.99284 13.8113 9.32542C14.2631 9.77105 14.5248 10.3744 14.5413 11.0089C14.5577 11.6433 14.3277 12.2594 13.8996 12.7279C13.6418 13.0141 13.371 13.2861 13.0991 13.5574C12.8019 13.8539 12.4326 14.0241 12.0362 14.1478C11.547 14.3012 11.4561 14.5062 11.6785 14.9735C13.0836 17.9164 15.2829 20.0354 18.2766 21.3305C18.6768 21.5032 18.8618 21.4252 19.0229 21.0282C19.3761 20.1574 20.0239 19.5226 20.7683 19.0095C21.6107 18.4294 22.8173 18.5583 23.6152 19.2441C24.0527 19.62 24.4707 20.018 24.8676 20.4365C25.2946 20.8934 25.5319 21.4956 25.5313 22.121C25.5307 22.7464 25.2922 23.3481 24.8643 23.8042C24.7399 23.9395 24.6117 24.0717 24.4924 24.2109C23.7744 25.0455 22.8637 25.4361 21.322 25.3833Z" fill="#5AAB29"></path></g><defs><clipPath id="clip0_1046_1220"><rect width="33" height="33" fill="white"></rect></clipPath></defs></svg></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Phone.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConsultationPopup",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close", "submitted"],
  setup(__props, { emit: __emit }) {
    const regionOptions = [
      { value: "70", label: "Toshkent shahri" },
      { value: "66", label: "Toshkent viloyati" },
      { value: "60", label: "Samarqand viloyati" },
      { value: "48", label: "Buxoro viloyati" },
      { value: "46", label: "Andijon viloyati" },
      { value: "50", label: "Farg'ona viloyati" },
      { value: "54", label: "Namangan viloyati" },
      { value: "58", label: "Qashqadaryo viloyati" },
      { value: "64", label: "Surxondaryo viloyati" },
      { value: "68", label: "Xorazm viloyati" },
      { value: "56", label: "Navoiy viloyati" },
      { value: "62", label: "Sirdaryo viloyati" },
      { value: "52", label: "Jizzax viloyati" },
      { value: "44", label: "Qoraqalpog'iston Respublikasi" }
    ];
    const name = ref("");
    const phone = ref("+998");
    const region = ref("");
    const isSubmitting = ref(false);
    const isDuplicateModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsPhone = __nuxt_component_0;
      const _directive_maska = resolveDirective("maska");
      let _temp0;
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "consult-overlay" }, _attrs))} data-v-7c1e8f9d><div class="consult-popup" data-v-7c1e8f9d><button class="consult-popup__close" data-v-7c1e8f9d>\xD7</button><h2 class="consult-popup__title" data-v-7c1e8f9d>\u0410\u0440\u0438\u0437\u0430 \u049B\u043E\u043B\u0434\u0438\u0440\u0438\u043D\u0433 \u0432\u0430 \u0441\u043E\u0493\u043B\u0438\u049B \u0441\u0430\u0440\u0438 \u049B\u0430\u0434\u0430\u043C \u0442\u0430\u0448\u043B\u0430\u043D\u0433</h2><p class="consult-popup__subtitle" data-v-7c1e8f9d>\u041C\u0435\u043D\u0435\u0436\u0435\u0440\u043B\u0430\u0440\u0438\u043C\u0438\u0437 \u0442\u0435\u0437 \u043E\u0440\u0430\u0434\u0430 \u0441\u0438\u0437 \u0431\u0438\u043B\u0430\u043D \u0431\u043E\u0493\u043B\u0430\u043D\u0430\u0434\u0438</p><form class="consult-popup__form" data-v-7c1e8f9d><div class="consult-popup__field" data-v-7c1e8f9d><label class="consult-popup__field-label" data-v-7c1e8f9d>\u0418\u0441\u043C\u0438\u043D\u0433\u0438\u0437</label><div class="consult-popup__field-wrap" data-v-7c1e8f9d><input required${ssrRenderAttr("value", unref(name))} type="text" class="consult-popup__input" placeholder="\u0418\u0441\u043C\u0438\u043D\u0433\u0438\u0437\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" data-v-7c1e8f9d></div></div><div class="consult-popup__field" data-v-7c1e8f9d><label class="consult-popup__field-label" data-v-7c1e8f9d>\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0440\u0430\u049B\u0430\u043C</label><div class="consult-popup__field-wrap" data-v-7c1e8f9d><input${ssrRenderAttrs((_temp0 = mergeProps({
          pattern: "\\+998\\(\\d{2}\\)\\s\\d{3}\\s\\d{2}\\s\\d{2}",
          required: "",
          autocomplete: "off",
          value: unref(phone),
          type: "text",
          class: "consult-popup__input",
          "data-maska": "+998(##) ### ## ##",
          placeholder: "+998(__) ___ __ __"
        }, ssrGetDirectiveProps(_ctx, _directive_maska)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(phone)))))} data-v-7c1e8f9d></div></div><div class="consult-popup__field" data-v-7c1e8f9d><label class="consult-popup__field-label" data-v-7c1e8f9d>\u0412\u0438\u043B\u043E\u044F\u0442</label><div class="consult-popup__field-wrap" data-v-7c1e8f9d><select required class="${ssrRenderClass([{ "consult-popup__select--placeholder": !unref(region) }, "consult-popup__input consult-popup__select"])}" data-v-7c1e8f9d><option value="" disabled data-v-7c1e8f9d${ssrIncludeBooleanAttr(Array.isArray(unref(region)) ? ssrLooseContain(unref(region), "") : ssrLooseEqual(unref(region), "")) ? " selected" : ""}>\u0412\u0438\u043B\u043E\u044F\u0442\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043D\u0433</option><!--[-->`);
        ssrRenderList(regionOptions, (r) => {
          _push(`<option${ssrRenderAttr("value", r.value)} data-v-7c1e8f9d${ssrIncludeBooleanAttr(Array.isArray(unref(region)) ? ssrLooseContain(unref(region), r.value) : ssrLooseEqual(unref(region), r.value)) ? " selected" : ""}>${ssrInterpolate(r.label)}</option>`);
        });
        _push(`<!--]--></select></div></div><button id="submit-lead-btn" data-meta="lead-submit" type="submit" class="consult-popup__submit btn--main"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-7c1e8f9d>${ssrInterpolate(unref(isSubmitting) ? "\u042E\u0411\u041E\u0420\u0418\u041B\u041C\u041E\u049A\u0414\u0410..." : "\u042E\u0411\u041E\u0420\u0418\u0428")}</button></form></div>`);
        if (unref(isDuplicateModal)) {
          _push(`<div class="duplicate-overlay" data-v-7c1e8f9d><div class="duplicate-popup" data-v-7c1e8f9d><button class="duplicate-popup__close" data-v-7c1e8f9d>\xD7</button><div class="duplicate-popup__icon" data-v-7c1e8f9d>`);
          _push(ssrRenderComponent(_component_IconsPhone, null, null, _parent));
          _push(`</div><h1 class="duplicate-popup__title" data-v-7c1e8f9d>\u0421\u0438\u0437 \u043E\u043B\u0434\u0438\u043D \u04B3\u0430\u043C \u043C\u0443\u0440\u043E\u0436\u0430\u0430\u0442 \u049B\u043E\u043B\u0434\u0438\u0440\u0433\u0430\u043D\u0441\u0438\u0437!</h1><p class="duplicate-popup__text" data-v-7c1e8f9d> \u041C\u0435\u043D\u0435\u0436\u0435\u0440\u043B\u0430\u0440\u0438\u043C\u0438\u0437 \u0442\u0435\u0437 \u043E\u0440\u0430\u0434\u0430 siz \u0431\u0438\u043B\u0430\u043D \u0431\u043E\u0493\u043B\u0430\u043D\u0430\u0434\u0438. \u0418\u043B\u0442\u0438\u043C\u043E\u0441, \u043A\u0443\u0442\u0438\u0431 \u0442\u0443\u0440\u0438\u043D\u0433! </p><div class="duplicate-popup__actions" data-v-7c1e8f9d><a href="tel:+998712021818" data-meta="contact-phone" class="duplicate-popup__btn duplicate-popup__btn--primary" data-v-7c1e8f9d> \u049A\u045E\u043D\u0493\u0438\u0440\u043E\u049B \u049B\u0438\u043B\u0438\u0448 </a><a href="https://t.me/NEVROSLIM" data-meta="contact-telegram" target="_blank" rel="noopener" class="duplicate-popup__btn duplicate-popup__btn--ghost" data-v-7c1e8f9d> Telegram </a></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConsultationPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c1e8f9d"]]);
const _imports_0 = "" + buildAssetsURL("dori.DlM05f4s.webp");
const _imports_1 = "" + buildAssetsURL("certificate.CREHTyyZ.webp");
const _imports_2 = "" + buildAssetsURL("how.B48UyRdn.webp");
const _imports_3 = "" + buildAssetsURL("how2.DXvMVj0-.webp");
const _imports_4 = "" + buildAssetsURL("ttb.Bte2Wij6.webp");
const _imports_5 = "" + buildAssetsURL("benefit-img.fW91E1rJ.webp");
const _imports_6 = publicAssetsURL("/new-certificate.webp");
const _imports_7 = publicAssetsURL("/webp/about-img-2.webp");
const _imports_8 = "data:image/svg+xml,%3csvg%20class='t-null__slds-arrow%20t-null__slds-arrow_1'%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20style='display:%20block;'%3e%3cpath%20d='M39%2068L60%2047L39%2026'%20stroke='black'%20vector-effect='non-scaling-stroke'%20style='stroke-width:%201px;%20stroke:%20rgb(0,%200,%200);'%3e%3c/path%3e%3c/svg%3e";
const _imports_9 = "data:image/webp;base64,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";
const _imports_10 = "" + buildAssetsURL("order-image.PJrvvYsR.webp");
const _imports_11 = "" + buildAssetsURL("clouds.CEQV1tFk.webp");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref(null);
    ref(moment(/* @__PURE__ */ new Date()).add(1, "day").format("MM.DD.YYYY"));
    ref("00");
    ref("00");
    ref("00");
    ref("00");
    ref(false);
    const isConsultPopupOpen = ref(false);
    function closeConsultPopup() {
      isConsultPopupOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsCheck = __nuxt_component_0$2;
      const _component_Testimonials = __nuxt_component_1;
      const _component_IconsUnd = __nuxt_component_2;
      const _component_ConsultationPopup = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)}><header class="header"><div class="container"><div class="header-in"><div class="header-left"><h1 class="header-title"> Nevroslim - <span>\u0410\u0441\u0430\u0431 \u043A\u0430\u0441\u0430\u043B\u043B\u0438\u043A\u043B\u0430\u0440\u0438\u043D\u0438\u043D\u0433</span> \u0431\u0430\u0440\u0447\u0430 \u0442\u0443\u0440\u043B\u0430\u0440\u0438\u0433\u0430 \u0442\u0430\u0432\u0441\u0438\u044F \u0435\u0442\u0438\u043B\u0430\u0434\u0438! </h1><div class="header-items"><div class="header-items__item" data-aos="fade-right" data-aos-delay="200">`);
      _push(ssrRenderComponent(_component_IconsCheck, null, null, _parent));
      _push(` \u0422\u0430\u0431\u0438\u0438\u0439 \u043C\u0430\u04B3\u0441\u0443\u043B\u043E\u0442 </div><div class="header-items__item" data-aos="fade-right">`);
      _push(ssrRenderComponent(_component_IconsCheck, null, null, _parent));
      _push(` \u041D\u043E\u0436\u045E\u044F \u0442\u0430\u044A\u0441\u0438\u0440\u043B\u0430\u0440\u0441\u0438\u0437 </div><div class="header-items__item" data-aos="fade-right" data-aos-delay="100">`);
      _push(ssrRenderComponent(_component_IconsCheck, null, null, _parent));
      _push(` \u042E\u049B\u043E\u0440\u0438 \u0441\u0430\u043C\u0430\u0440\u0430\u0434\u043E\u0440\u043B\u0438\u043A </div></div><button id="header-btn-desktop" data-meta="lead-open" type="button" class="header-btn btn--main" data-aos="fade-right" data-aos-delay="300"> \u041C\u0430\u0441\u043B\u0430\u04B3\u0430\u0442 \u043E\u043B\u0438\u0448 </button><p class="header-desc" data-aos="fade-right"> \u0414\u043E\u0438\u043C\u0438\u0439 \u0441\u0442\u0440\u0435\u0441\u0441 \u0432\u0430 \u0431\u0435\u0437\u043E\u0432\u0442\u0430\u043B\u0438\u043A\u0434\u0430\u043D \u0447\u0430\u0440\u0447\u0430\u0433\u0430\u043D \u0431\u045E\u043B\u0441\u0430\u043D\u0433\u0438\u0437, \u0431\u0438\u0437 \u0431\u0438\u043B\u0430\u043D \u0431\u043E\u0493\u043B\u0430\u043D\u0438\u043D\u0433! </p></div><div class="header-right" data-aos="fade-left"><img${ssrRenderAttr("src", _imports_0)} width="500" height="auto" alt="Product"><div class="header-certificate"><img${ssrRenderAttr("src", _imports_1)} width="100" height="auto" alt="Certificate"></div></div><button id="header-btn-mobile" data-meta="lead-open" type="button" class="header-btn btn--main header--mobile" data-aos="fade-right" data-aos-delay="300"> \u041C\u0430\u0441\u043B\u0430\u04B3\u0430\u0442 \u043E\u043B\u0438\u0448 </button></div></div></header>`);
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(`<section class="how"><div class="container"><h2 class="how__title main-title"><span>&quot;\u041D\u0435\u0432\u0440\u043E\u0441\u043B\u0438\u043C&quot;</span> \u043D\u0438\u043C\u0430 \u0443\u0447\u0443\u043D \u043A\u0435\u0440\u0430\u043A? </h2><div class="how-in"><div class="how-left"><img${ssrRenderAttr("src", _imports_2)} alt="how"></div><div class="how-right"><div class="how-item" data-aos="fade-right" data-aos-delay="50"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041A\u0443\u043D\u0434\u0430\u043B\u0438\u043A \u0442\u043E\u043B\u0438\u049B\u0438\u0448 \u0432\u0430 \u0431\u043E\u0448\u0434\u0430\u0433\u0438 \u043E\u0493\u0438\u0440\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="100"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0422\u0443\u0448\u043A\u0443\u043D \u043A\u0430\u0439\u0444\u0438\u044F\u0442 \u0432\u0430 \u049B\u0443\u0432\u0432\u0430\u0442\u0441\u0438\u0437\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="150"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0417\u0435\u04B3\u043D \u0432\u0430 \u0445\u043E\u0442\u0438\u0440\u0430\u043D\u0438 \u043C\u0443\u0441\u0442\u0430\u04B3\u043A\u0430\u043C\u043B\u0430\u0448</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="200"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041A\u0443\u0447\u043B\u0438 \u0437\u045E\u0440\u0438\u049B\u0438\u0448 \u0432\u0430 \u0431\u0435\u0437\u043E\u0432\u0442\u0430\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="250"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0423\u0439\u049B\u0443 \u0441\u0438\u0444\u0430\u0442\u0438 \u0432\u0430 \u0438\u0447\u043A\u0438 \u04B3\u0430\u044F\u0436\u043E\u043D</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="300"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041A\u0430\u0439\u0444\u0438\u044F\u0442\u043D\u0438\u043D\u0433 \u043F\u0430\u0441\u0442\u043B\u0438\u0433\u0438 \u0432\u0430 \u04B3\u043E\u043B\u0441\u0438\u0437\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="350"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0418\u0448\u0442\u0438\u0451\u049B\u0441\u0438\u0437\u043B\u0438\u043A \u0432\u0430 \u0444\u0430\u043E\u043B\u043B\u0438\u043A \u0435\u0442\u0438\u0448\u043C\u0430\u0441\u043B\u0438\u0433\u0438</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="400"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0421\u0430\u0431\u0430\u0431\u0441\u0438\u0437 \u0431\u0435\u0437\u043E\u0432\u0442\u0430\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="450"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041A\u045E\u043A\u0440\u0430\u043A \u049B\u0430\u0444\u0430\u0441\u0438\u0434\u0430\u0433\u0438 \u043D\u043E\u049B\u0443\u043B\u0430\u0439\u043B\u0438\u043A \u04B3\u0438\u0441\u0441\u0438</p></div></div></div></div></section><hr><section class="how"><div class="container"><h2 class="how__title main-title"> \u0410\u0441\u0430\u0431\u0438\u0439\u043B\u0438\u043A \u0432\u0430 \u0441\u0442\u0440\u0435\u0441\u0441\u0433\u0430 <span class="red-text">\u0431\u0435\u044D\u044A\u0442\u0438\u0431\u043E\u0440 \u0431\u045E\u043B\u0438\u0448</span> \u043D\u0438\u043C\u0430\u043B\u0430\u0440\u0433\u0430 \u043E\u043B\u0438\u0431 \u043A\u0435\u043B\u0430\u0434\u0438? </h2><div class="how-in how--reverse"><div class="how-left"><img${ssrRenderAttr("src", _imports_3)} alt="how"></div><div class="how-right column-2"><div class="how-item" data-aos="fade-right" data-aos-delay="50"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0418\u0447\u043A\u0438 \u049B\u045E\u0440\u049B\u0443\u0432 \u0432\u0430 \u04B3\u0430\u044F\u0436\u043E\u043D</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="100"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u040E\u0437\u0438\u0433\u0430 \u0438\u0448\u043E\u043D\u0447 \u043F\u0430\u0441\u0442\u043B\u0438\u0433\u0438</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="150"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041A\u0443\u0447\u043B\u0438 \u04B3\u0430\u0432\u043E\u0442\u0438\u0440</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="200"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0422\u0435\u0437 \u0436\u0430\u04B3\u043B \u0447\u0438\u049B\u0438\u0448\u0438 \u0432\u0430 \u04B3\u043E\u043B\u0441\u0438\u0437\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="250"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u041D\u0430\u0444\u0430\u0441 \u043E\u043B\u0438\u0448\u0434\u0430\u0433\u0438 \u043D\u043E\u049B\u0443\u043B\u0430\u0439\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="300"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0423\u043C\u0443\u043C\u0438\u0439 \u04B3\u043E\u043B\u0430\u0442\u043D\u0438\u043D\u0433 \u0451\u043C\u043E\u043D\u043B\u0430\u0448\u0438\u0448\u0438</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="350"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0422\u0443\u043D\u0433\u0438 \u0431\u0435\u0437\u043E\u0432\u0442\u0430\u043B\u0438\u043A</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="400"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0421\u0442\u0440\u0435\u0441\u0441 - \u0438\u0447\u043A\u0438 \u0441\u0438\u049B\u0438\u043B\u0438\u0448\u043B\u0430\u0440</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="450"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u04B2\u0430\u0451\u0442\u0433\u0430 \u0431\u045E\u043B\u0433\u0430\u043D \u049B\u0438\u0437\u0438\u049B\u0438\u0448\u043D\u0438\u043D\u0433 \u043F\u0430\u0441\u0430\u0439\u0438\u0448\u0438</p></div><div class="how-item" data-aos="fade-right" data-aos-delay="450"><div class="how-icon">`);
      _push(ssrRenderComponent(_component_IconsUnd, null, null, _parent));
      _push(`</div><p class="how-text">\u0414\u043E\u0438\u043C\u0438\u0439 \u0437\u045E\u0440\u0438\u049B\u0438\u0448 \u04B3\u0438\u0441\u0441\u0438</p></div></div></div></div></section><section class="benefits"><div class="image"><div class="container"><img${ssrRenderAttr("src", _imports_4)} alt="takib"></div></div><div class="container"><h2 class="benefits__title main-title"> \u041C\u0430\u04B3\u0441\u0443\u043B\u043E\u0442 \u0442\u0430\u0440\u043A\u0438\u0431\u0438\u0434\u0430\u0433\u0438 <span>&quot;\u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442&quot;</span> \u043B\u0430\u0440\u043D\u0438\u043D\u0433 \u0442\u0430\u0431\u0438\u0438\u0439 \u0445\u0443\u0441\u0443\u0441\u0438\u044F\u0442\u043B\u0430\u0440\u0438 </h2><div class="benefits__row"><div class="benefit" data-aos-delay="50"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">1</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u0413\u0438\u043D\u043A\u0433\u043E \u0431\u0438\u043B\u043E\u0431\u0430</h4><p class="benefit__desc"> \u0424\u0430\u043E\u043B\u043B\u0438\u043A\u043D\u0438 \u043E\u0448\u0438\u0440\u0430\u0434\u0438 \u0432\u0430 \u0434\u0438\u049B\u049B\u0430\u0442\u043D\u0438 \u0436\u0430\u043C\u043B\u0430\u0448\u0433\u0430 \u0451\u0440\u0434\u0430\u043C \u0431\u0435\u0440\u0430\u0434\u0438. </p></div><div class="benefit__img"><img${ssrRenderAttr("src", _imports_5)} alt="benefit"></div></div></div></div><div class="benefit" data-aos-delay="100"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">2</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u0412\u0430\u043B\u0435\u0440\u0438\u0430\u043D\u0430</h4><p class="benefit__desc"> \u0421\u0442\u0440\u0435\u0441\u0441 \u0432\u0430 \u0431\u0435\u0437\u043E\u0432\u0442\u0430\u043B\u0438\u043A\u043D\u0438 \u0435\u043D\u0433\u0438\u043B\u043B\u0430\u0448\u0442\u0438\u0440\u0430\u0434\u0438\u0433\u0430\u043D \u0442\u0430\u0431\u0438\u0438\u0439 \u0432\u043E\u0441\u0438\u0442\u0430, \u0434\u0430\u043C \u043E\u043B\u0438\u0448\u0433\u0430 \u0432\u0430 \u0443\u0439\u049B\u0443 \u0441\u0438\u0444\u0430\u0442\u0438\u043D\u0438 \u044F\u0445\u0448\u0438\u043B\u0430\u0448\u0433\u0430 \u0451\u0440\u0434\u0430\u043C \u0431\u0435\u0440\u0430\u0434\u0438. </p></div><div class="benefit__img"><img src="https://optim.tildacdn.one/tild3337-6131-4864-b063-303337313035/-/resize/272x/-/format/webp/6-2-1.png" alt="benefit"></div></div></div></div><div class="benefit" data-aos-delay="150"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">3</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u049A\u043E\u0440\u0430 \u0430\u043D\u0434\u0438\u0437</h4><p class="benefit__desc"> \u041C\u0438\u044F \u0444\u0430\u043E\u043B\u0438\u044F\u0442\u0438\u043D\u0438 \u049B\u045E\u043B\u043B\u0430\u0431-\u049B\u0443\u0432\u0432\u0430\u0442\u043B\u0430\u0439\u0434\u0438, \u0443\u043C\u0443\u043C\u0438\u0439 \u04B3\u043E\u043B\u0430\u0442\u0433\u0430 \u0435\u043D\u0433\u0438\u043B\u043B\u0438\u043A \u0432\u0430 \u0442\u0435\u0442\u0438\u043A\u043B\u0438\u043A \u0431\u0430\u0493\u0438\u0448\u043B\u0430\u0439\u0434\u0438. </p></div><div class="benefit__img"><img src="https://optim.tildacdn.one/tild3536-6464-4836-b635-396135663666/-/resize/416x/-/format/webp/6-3-1.png" alt="benefit"></div></div></div></div><div class="benefit" data-aos-delay="200"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">4</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u0417\u0430\u043D\u0436\u0430\u0431\u0438\u043B</h4><p class="benefit__desc"> \u0418\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442 \u0442\u0438\u0437\u0438\u043C\u0438\u043D\u0438 \u043C\u0443\u0441\u0442\u0430\u04B3\u043A\u0430\u043C\u043B\u0430\u0448 \u0432\u0430 \u0438\u0447\u043A\u0438 \u043C\u0443\u0432\u043E\u0437\u0430\u043D\u0430\u0442\u043D\u0438 \u0441\u0430\u049B\u043B\u0430\u0448 \u0443\u0447\u0443\u043D \u043C\u0443\u04B3\u0438\u043C \u0442\u0430\u0431\u0438\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442. </p></div><div class="benefit__img"><img src="https://optim.tildacdn.one/tild3163-3834-4234-a234-333633343065/-/resize/344x/-/format/webp/6-4-1.png" alt="benefit"></div></div></div></div><div class="benefit" data-aos-delay="250"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">5</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u041C\u0443\u043C\u0438\u0451</h4><p class="benefit__desc"> \u0423\u043C\u0443\u043C\u0438\u0439 \u04B3\u043E\u043B\u0430\u0442\u043D\u0438 \u044F\u0445\u0448\u0438\u043B\u0430\u0439\u0434\u0438, \u0438\u0447\u043A\u0438 \u049B\u0443\u0432\u0432\u0430\u0442\u043D\u0438 \u0442\u0438\u043A\u043B\u0430\u0439\u0434\u0438 \u0432\u0430 \u0442\u0435\u0440\u0438\u043D\u0438\u043D\u0433 \u0442\u0430\u0431\u0438\u0438\u0439 \u04B3\u043E\u043B\u0430\u0442\u0438\u043D\u0438 \u0441\u0430\u049B\u043B\u0430\u0439\u0434\u0438. </p></div><div class="benefit__img"><img src="https://optim.tildacdn.one/tild3335-3430-4264-b835-313939653666/-/resize/488x/-/format/webp/6-5-1.png" alt="benefit"></div></div></div></div><div class="benefit" data-aos-delay="300"><div class="benefit__main"><div class="benefit__number"><p class="benefit__circle">6</p></div><div class="benefit__row"><div class="benefit__left"><h4 class="benefit__name">\u0414\u043E\u043B\u0447\u0438\u043D</h4><p class="benefit__desc"> \u0423\u043C\u0443\u043C\u0438\u0439 \u0444\u0430\u0440\u043E\u0432\u043E\u043D\u043B\u0438\u043A\u043D\u0438 \u044F\u0445\u0448\u0438\u043B\u0430\u0439\u0434\u0438, \u0438\u0447\u043A\u0438 \u0445\u043E\u0442\u0438\u0440\u0436\u0430\u043C\u043B\u0438\u043A\u043D\u0438 \u0442\u0430\u044A\u043C\u0438\u043D\u043B\u0430\u0439\u0434\u0438 \u0432\u0430 \u043A\u0443\u043D\u0434\u0430\u043B\u0438\u043A \u0437\u045E\u0440\u0438\u049B\u0438\u0448\u043B\u0430\u0440\u043D\u0438 \u043A\u0430\u043C\u0430\u0439\u0442\u0438\u0440\u0430\u0434\u0438. </p></div><div class="benefit__img"><img src="https://optim.tildacdn.one/tild3137-3562-4539-b364-313232393935/-/resize/386x/-/format/webp/6-6-1.png" alt="benefit"></div></div></div></div></div><div class="who-bottom"><div class="who-bottom__img1"><img src="https://optim.tildacdn.one/tild6338-3865-4637-b438-346266393938/-/resize/186x/-/format/webp/Leaves_Overlay_1_4.png" width="186" height="auto" alt="Img"></div><button id="benefits-btn" data-meta="lead-open" type="button" class="who-bottom__btn btn--main"> \u041C\u0430\u0441\u043B\u0430\u04B3\u0430\u0442 \u043E\u043B\u0438\u0448 </button><div class="who-bottom__img2"><img src="https://optim.tildacdn.one/tild6639-3835-4564-b263-633834316438/-/resize/302x/-/format/webp/Leaves_Overlay_1_5.png" width="302" height="auto" alt="Img"></div></div></div></section><section class="about"><div class="container"><h2 class="about__title main-title"> \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043B\u0430\u0440 </h2><div class="about-slider"><div class="about-slider__main">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Pagination)],
        effect: "fade",
        speed: 500,
        navigation: {
          nextEl: ".about-slider__prev",
          prevEl: ".about-slider__next",
          disabledClass: "disabled"
        },
        slidesPerView: 1,
        "space-between": 30,
        centeredSlides: true,
        pagination: {
          clickable: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="about-slider__slide"${_scopeId2}><a data-fancybox="gallery" href="/new-certificate.webp"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)}${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "about-slider__slide" }, [
                      createVNode("a", {
                        "data-fancybox": "gallery",
                        href: "/new-certificate.webp"
                      }, [
                        createVNode("img", { src: _imports_6 })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="about-slider__slide"${_scopeId2}><a data-fancybox="gallery" href="/webp/about-img-2.webp"${_scopeId2}><img${ssrRenderAttr("src", _imports_7)}${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "about-slider__slide" }, [
                      createVNode("a", {
                        "data-fancybox": "gallery",
                        href: "/webp/about-img-2.webp"
                      }, [
                        createVNode("img", { src: _imports_7 })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "about-slider__slide" }, [
                    createVNode("a", {
                      "data-fancybox": "gallery",
                      href: "/new-certificate.webp"
                    }, [
                      createVNode("img", { src: _imports_6 })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "about-slider__slide" }, [
                    createVNode("a", {
                      "data-fancybox": "gallery",
                      href: "/webp/about-img-2.webp"
                    }, [
                      createVNode("img", { src: _imports_7 })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="about-slider__button about-slider__prev"><img${ssrRenderAttr("src", _imports_8)} alt="prev slide"></button><button class="about-slider__button about-slider__next"><img${ssrRenderAttr("src", _imports_8)} alt="next slide"></button></div></div></section><section class="order"><div class="container"><h1 class="order__title main-title"> \u049A\u0430\u043D\u0434\u0430\u0439 \u049B\u0438\u043B\u0438\u0431 \u0431\u0443\u044E\u0440\u0442\u043C\u0430 \u0431\u0435\u0440\u0438\u043B\u0430\u0434\u0438? </h1><div class="order__row"><div class="order__left"><div class="order-card"><div class="order-card__main"><div class="order-card__img"><img${ssrRenderAttr("src", _imports_9)} alt="order with phone"></div><p class="order-card__name"> \u0428\u0443 \u0441\u0430\u0439\u0442\u0438\u043C\u0438\u0437 \u043E\u0440\u049B\u0430\u043B\u0438 \u043C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u0438\u043D\u0433\u0438\u0437\u043D\u0438 \u049B\u043E\u043B\u0434\u0438\u0440\u0438\u043D\u0433 </p></div></div><div class="order-card"><div class="order-card__main"><div class="order-card__img"><img${ssrRenderAttr("src", _imports_9)} alt="order with phone"></div><p class="order-card__name"> \u041C\u0430\u043B\u0430\u043A\u0430\u043B\u0438 \u043C\u0430\u0441\u043B\u0430\u04B3\u0430\u0442\u0447\u0438\u043B\u0430\u0440\u0438\u043C\u0438\u0437 \u0441\u0438\u0437 \u0431\u0438\u043B\u0430\u043D \u0431\u043E\u0493\u043B\u0430\u043D\u0430\u0434\u0438 </p></div></div><div class="order-card"><div class="order-card__main"><div class="order-card__img"><img${ssrRenderAttr("src", _imports_9)} alt="order with phone"></div><p class="order-card__name"> \u0415\u0442\u043A\u0430\u0437\u0438\u0431 \u0431\u0435\u0440\u0438\u0448 \u0432\u0430\u049B\u0442\u0438\u0434\u0430 \u043C\u0430\u043D\u0437\u0438\u043B\u0438\u043D\u0433\u0438\u0437\u043D\u0438 \u0442\u0430\u0441\u0434\u0438\u049B\u043B\u0430\u043D\u0433 </p></div></div></div><div class="order__right"><div class="order__image"><img${ssrRenderAttr("src", _imports_10)} alt="operator"></div></div></div><div class="who-bottom"><div class="who-bottom__img1"><img src="https://optim.tildacdn.one/tild6338-3865-4637-b438-346266393938/-/resize/186x/-/format/webp/Leaves_Overlay_1_4.png" width="186" height="auto" alt="Img"></div><button id="order-btn" data-meta="lead-open" type="button" class="who-bottom__btn btn--main">\u041C\u0430\u0441\u043B\u0430\u04B3\u0430\u0442 \u043E\u043B\u0438\u0448 </button><div class="who-bottom__img2"><img src="https://optim.tildacdn.one/tild6639-3835-4564-b263-633834316438/-/resize/302x/-/format/webp/Leaves_Overlay_1_5.png" width="302" height="auto" alt="Img"></div></div><div class="order__clouds"><img${ssrRenderAttr("src", _imports_11)} alt="clouds"></div></div></section>`);
      _push(ssrRenderComponent(_component_ConsultationPopup, {
        "is-open": unref(isConsultPopupOpen),
        onClose: closeConsultPopup
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--ZR6XVVp.mjs.map
