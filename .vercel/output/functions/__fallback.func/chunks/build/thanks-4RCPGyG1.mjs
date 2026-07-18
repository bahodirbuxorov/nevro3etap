import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, s as setPageLayout } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'maska/vue';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="green" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CheckSuccess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "thanks",
  __ssrInlineRender: true,
  setup(__props) {
    setPageLayout("thanks");
    const countdown = ref(3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsCheckSuccess = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "thanks" }, _attrs))} data-v-3be8b1ac><div class="bg-shape bg-shape--1" aria-hidden="true" data-v-3be8b1ac></div><div class="bg-shape bg-shape--2" aria-hidden="true" data-v-3be8b1ac></div><section class="card" data-v-3be8b1ac><div class="icon-wrap" data-v-3be8b1ac>`);
      _push(ssrRenderComponent(_component_IconsCheckSuccess, { class: "success-icon" }, null, _parent));
      _push(`<span class="pulse" aria-hidden="true" data-v-3be8b1ac></span></div><h1 class="title" data-v-3be8b1ac>Ma&#39;lumotlar qabul qilindi!</h1><p class="subtitle" data-v-3be8b1ac> Tez orada maslahatchilarimiz siz bilan bog&#39;lanadi! Agar \u049B\u045E\u0448\u0438\u043C\u0447\u0430 \u0441\u0430\u0432\u043E\u043B\u043B\u0430\u0440\u0438\u043D\u0433\u0438\u0437 \u0431\u045E\u043B\u0441\u0430, quyidagi \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043B\u0430\u0440 \u043E\u0440\u049B\u0430\u043B\u0438 \u043C\u0443\u0440\u043E\u0436\u0430\u0430\u0442 \u049B\u0438\u043B\u0438\u043D\u0433. </p>`);
      if (unref(countdown) > 0) {
        _push(`<p class="countdown-text" data-v-3be8b1ac> Telegram \u043A\u0430\u043D\u0430\u043B\u0438\u043C\u0438\u0437\u0433\u0430 \u045E\u0442\u0438\u043B\u043C\u043E\u049B\u0434\u0430... ${ssrInterpolate(unref(countdown))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="actions" data-v-3be8b1ac><a href="tel:+998712021818" data-meta="contact-phone" target="_blank" rel="noopener" class="btn btn--primary" data-v-3be8b1ac> Qo&#39;ng&#39;iroq qilish </a><a href="https://t.me/NEVROSLIM" data-meta="contact-telegram" target="_blank" rel="noopener" class="btn btn--ghost" data-v-3be8b1ac> Telegram orqali bog&#39;lanish </a></div><div class="timeline" aria-label="Jarayon bosqichlari" data-v-3be8b1ac><div class="step done" data-v-3be8b1ac><span class="badge" data-v-3be8b1ac>1</span><div data-v-3be8b1ac><h3 data-v-3be8b1ac>Ariza yuborildi</h3><p data-v-3be8b1ac>Ma&#39;lumotlaringiz muvaffaqiyatli qabul qilindi.</p></div></div><div class="step active" data-v-3be8b1ac><span class="badge" data-v-3be8b1ac>2</span><div data-v-3be8b1ac><h3 data-v-3be8b1ac>Maslahatchi bog&#39;lanadi</h3><p data-v-3be8b1ac>\u0422\u0435\u0442\u0438\u043A\u043B\u0438\u043A \u0432\u0430 \u0445\u043E\u0442\u0438\u0440\u0436\u0430\u043C\u043B\u0438\u043A \u0441\u0430\u0440\u0438 \u0438\u043B\u043A \u049B\u0430\u0434\u0430\u043C!</p></div></div><div class="step" data-v-3be8b1ac><span class="badge" data-v-3be8b1ac>3</span><div data-v-3be8b1ac><h3 data-v-3be8b1ac>Yetkazib berish</h3><p data-v-3be8b1ac>\u041C\u0430\u044A\u049B\u0443\u043B\u043B\u0430\u043D\u0433\u0430\u0447, \u0431\u0443\u044E\u0440\u0442\u043C\u0430\u043D\u0433\u0438\u0437 \u0435\u0442\u043A\u0430\u0437\u0438\u0431 \u0431\u0435\u0440\u0438\u043B\u0430\u0434\u0438.</p></div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thanks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3be8b1ac"]]);

export { thanks as default };
//# sourceMappingURL=thanks-4RCPGyG1.mjs.map
