<template>
  <main class="thanks">
    <!-- Decorative background shapes -->
    <div class="bg-shape bg-shape--1" aria-hidden="true" />
    <div class="bg-shape bg-shape--2" aria-hidden="true" />

    <section class="card">
      <div class="icon-wrap">
        <!-- Your global icon component (fallback circle shown if missing) -->
        <IconsCheckSuccess class="success-icon" />
        <span class="pulse" aria-hidden="true" />
      </div>

      <h1 class="title">Ma'lumotlar qabul qilindi!</h1>
      <p class="subtitle">
        Tez orada maslahatchilarimiz siz bilan bog'lanadi! Agar қўшимча саволларингиз бўлса,
        quyidagi контактлар орқали мурожаат қилинг.
      </p>

      <!-- Optional: show request ID if you passed ?id=XYZ in the redirect
      <p v-if="requestId" class="meta">
        Murojaat raqami: <strong>#{{ requestId }}</strong>
      </p> -->

      <p v-if="countdown > 0" class="countdown-text">
        Telegram каналимизга ўтилмоқда... {{ countdown }}
      </p>
      <div class="actions">
        <a href="tel:+998712021818" target="_blank" rel="noopener" class="btn btn--primary">
          Qo'ng'iroq qilish
        </a>
        <a href="https://t.me/NEVROSLIM" target="_blank" rel="noopener" class="btn btn--ghost">
          Telegram orqali bog'lanish
        </a>
      </div>

      <div class="timeline" aria-label="Jarayon bosqichlari">
        <div class="step done">
          <span class="badge">1</span>
          <div>
            <h3>Ariza yuborildi</h3>
            <p>Ma'lumotlaringiz muvaffaqiyatli qabul qilindi.</p>
          </div>
        </div>
        <div class="step active">
          <span class="badge">2</span>
          <div>
            <h3>Maslahatchi bog'lanadi</h3>
            <p>Тетиклик ва хотиржамлик сари илк қадам!</p>
          </div>
        </div>
        <div class="step">
          <span class="badge">3</span>
          <div>
            <h3>Yetkazib berish</h3>
            <p>Маъқуллангач, буюртмангиз етказиб берилади.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
setPageLayout('thanks')

const countdown = ref(3);

onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(interval);
      window.open('https://t.me/NEVROSLIM', '_blank');
    }
  }, 1000);
})
</script>

<style scoped lang="scss">
// --- Color system (adjust to your brand) ---
$brand: #2e8b57; // Nevroslim — sog'lom yashil ohang
$brand-2: #1b6e44;
$accent: #76d4a0;
$bg: #f6fbf8;
$text: #163321;
$muted: #587a66;
$white: #fff;

.thanks {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: clamp(16px, 4vw, 32px);
  background: radial-gradient(60% 60% at 100% 0%, rgba($accent, .25) 0%, rgba($accent, 0) 60%),
    radial-gradient(55% 55% at 0% 100%, rgba($brand, .12) 0%, rgba($brand, 0) 60%),
    $bg;
  position: relative;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  filter: blur(60px);
  opacity: .25;
  transform: translateZ(0);

  &--1 {
    top: -80px;
    right: -60px;
    width: 420px;
    height: 420px;
    background: conic-gradient(from 180deg, $accent, $brand);
    border-radius: 50%;
    animation: float 10s ease-in-out infinite;
  }

  &--2 {
    bottom: -90px;
    left: -70px;
    width: 380px;
    height: 380px;
    background: radial-gradient(circle, $brand 0%, $brand-2 40%, transparent 70%);
    border-radius: 44% 56% 60% 40% / 50% 50% 50% 50%;
    animation: float 12s ease-in-out infinite reverse;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-8px) rotate(3deg);
  }
}

.card {
  position: relative;
  width: min(960px, 100%);
  background: $white;
  border-radius: 24px;
  padding: clamp(20px, 4vw, 40px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .06), 0 2px 8px rgba(0, 0, 0, .04);
  color: $text;
}

.icon-wrap {
  position: relative;
  width: 84px;
  height: 84px;
  margin-inline: auto;
  margin-bottom: 12px;

  .success-icon {
    width: 100%;
    height: 100%;
    display: block;
    color: $brand;
    filter: drop-shadow(0 6px 12px rgba($brand, .25));
  }

  .pulse {
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: rgba($accent, .35);
    animation: pulse 1.8s ease-out infinite;
    z-index: -1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: .7;
  }

  70% {
    transform: scale(1.25);
    opacity: 0;
  }

  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

.title {
  text-align: center;
  font-size: clamp(24px, 2.6vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 6px 0 8px;
  color: $text;
}

.subtitle {
  text-align: center;
  font-size: clamp(14px, 1.4vw, 16px);
  color: $muted;
  margin: 0 auto 18px;
  max-width: 56ch;
}

.meta {
  text-align: center;
  margin: 0 0 20px;
  color: $text;

  strong {
    color: $brand-2;
  }
}

.countdown-text {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: $brand;
  margin: 0 auto 14px;
  animation: pulse-text 1s ease-in-out infinite;
}

@keyframes pulse-text {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px 0 22px;
}

.btn {
  --ring: rgba($brand, .25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: transform .12s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
  border: 1px solid rgba(0, 0, 0, .06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .04);

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 6px var(--ring);
  }

  &:active {
    transform: translateY(1px);
  }

  &--primary {
    background: linear-gradient(180deg, $brand 0%, $brand-2 100%);
    color: $white;
    border-color: transparent;
  }

  &--primary:hover {
    filter: brightness(1.05);
  }

  &--ghost {
    background: rgba($brand, .06);
    color: $brand-2;
  }

  &--ghost:hover {
    background: rgba($brand, .1);
  }
}

.highlights {
  display: grid;
  gap: 10px;
  margin: 6px 0 22px;
  padding: 0;
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    align-items: start;
    gap: 10px;
    color: $text;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin-top: 6px;
    border-radius: 999px;
    background: $accent;
    box-shadow: 0 0 0 4px rgba($accent, .25);
  }
}

.timeline {
  display: grid;
  gap: 14px;
  margin: 8px 0 20px;

  .step {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 12px;
    align-items: start;
    padding: 12px;
    border-radius: 14px;
    background: #fafdfb;
    border: 1px dashed rgba($brand, .25);

    h3 {
      margin: 0 0 4px;
      font-size: 16px;
      color: $text;
    }

    p {
      margin: 0;
      color: $muted;
      font-size: 14px;
    }

    .badge {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      display: grid;
      place-items: center;
      font-weight: 800;
      color: $white;
      background: $brand;
      box-shadow: 0 4px 10px rgba($brand, .28);
    }

    &.active {
      background: linear-gradient(0deg, rgba($accent, .14), rgba($accent, .14)), #fbfffd;
      border-style: solid;
    }

    &.done {
      opacity: .9;
    }
  }
}

.faq {
  border-top: 1px solid rgba(0, 0, 0, .06);
  padding-top: 12px;
  margin-top: 6px;

  summary {
    cursor: pointer;
    font-weight: 700;
    color: $text;
  }

  &__item {
    margin: 10px 0;

    h4 {
      margin: 0 0 6px;
    }

    p {
      margin: 0;
      color: $muted;
    }
  }
}

.disclaimer {
  margin: 16px 0 0;
  font-size: 12px;
  color: $muted;
}

// Small screens
@media (max-width: 480px) {
  .actions {
    gap: 8px;
  }

  .btn {
    width: 100%;
  }
}
</style>
