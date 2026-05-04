<template>
	<main>
		<header class="header">
			<div class="container">
				<div class="header-in">
					<div class="header-left">
						<h1 class="header-title">
							Nevroslim - <span>Асаб касалликларининг</span> барча турларига тавсия етилади!
						</h1>
						<div class="header-items">
							<div class="header-items__item" data-aos="fade-right" data-aos-delay="200">
								<IconsCheck />
								Табиий маҳсулот
							</div>
							<div class="header-items__item" data-aos="fade-right">
								<IconsCheck />
								Ножўя таъсирларсиз
							</div>
							<div class="header-items__item" data-aos="fade-right" data-aos-delay="100">
								<IconsCheck />
								Юқори самарадорлик
							</div>
						</div>
						<button id="header-btn-desktop" data-meta="lead-open" type="button" @click="openConsultPopup" class="header-btn btn--main" data-aos="fade-right" data-aos-delay="300">
							Маслаҳат олиш
						</button>
						<p class="header-desc" data-aos="fade-right">
							Доимий стресс ва безовталикдан чарчаган бўлсангиз, биз билан боғланинг!
						</p>
					</div>
					<div class="header-right" data-aos="fade-left">
						<img src="~/assets/images/webp/dori.webp" width="500" height="auto" alt="Product" />
						<div class="header-certificate">
							<img src="~/assets/images/webp/certificate.webp" width="100" height="auto" alt="Certificate" />
						</div>
					</div>
					<button id="header-btn-mobile" data-meta="lead-open" type="button" @click="openConsultPopup" class="header-btn btn--main header--mobile" data-aos="fade-right" data-aos-delay="300">
						Маслаҳат олиш
					</button>
				</div>
			</div>
		</header>

		<Testimonials />

		<section class="how">
			<div class="container">
				<h2 class="how__title main-title">
					<span>"Неврослим"</span> нима учун керак?
				</h2>
				<div class="how-in">
					<div class="how-left">
						<img src="~/assets/images/webp/how.webp" alt="how" />
					</div>
					<div class="how-right">
						<div class="how-item" data-aos="fade-right" data-aos-delay="50">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Кундалик толиқиш ва бошдаги оғирлик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="100">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Тушкун кайфият ва қувватсизлик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="150">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Зеҳн ва хотирани мустаҳкамлаш</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="200">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Кучли зўриқиш ва безовталик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="250">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Уйқу сифати ва ички ҳаяжон</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="300">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Кайфиятнинг пастлиги ва ҳолсизлик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="350">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Иштиёқсизлик ва фаоллик етишмаслиги</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="400">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Сабабсиз безовталик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="450">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Кўкрак қафасидаги ноқулайлик ҳисси</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<hr>

		<section class="how">
			<div class="container">
				<h2 class="how__title main-title">
					Асабийлик ва стрессга <span class="red-text">беэътибор бўлиш</span> нималарга олиб келади?
				</h2>
				<div class="how-in how--reverse">
					<div class="how-left">
						<img src="~/assets/images/webp/how2.webp" alt="how" />
					</div>
					<div class="how-right column-2">
						<div class="how-item" data-aos="fade-right" data-aos-delay="50">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Ички қўрқув ва ҳаяжон</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="100">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Ўзига ишонч пастлиги</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="150">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Кучли ҳавотир</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="200">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Тез жаҳл чиқиши ва ҳолсизлик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="250">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Нафас олишдаги ноқулайлик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="300">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Умумий ҳолатнинг ёмонлашиши</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="350">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Тунги безовталик</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="400">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Стресс - ички сиқилишлар</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="450">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Ҳаётга бўлган қизиқишнинг пасайиши</p>
						</div>
						<div class="how-item" data-aos="fade-right" data-aos-delay="450">
							<div class="how-icon">
								<IconsUnd />
							</div>
							<p class="how-text">Доимий зўриқиш ҳисси</p>
						</div>
					</div>
				</div>

				<!-- <p class="how-bottom">
					Асабийлик ва стресс узоқ давом этса, <span>ҳаёт сифати</span> сезиларли даражада пасайиши мумкин.
				</p> -->
			</div>
		</section>

		<!-- <section class="gallery">
			<div class="container">
				<h1 class="gallery__title main-title">
					МИЖОЗЛАРИМИЗНИНГ <span>МУВАФФАҚИЯТЛАРИ</span>
				</h1>
				<div class="gallery-slider full">
					<div class="gallery-slider__main">
						<button class="gallery-slider__button gallery-slider__prev prev-2">
							<img src="~/assets/images/svg/about-arrow-left.svg" alt="prev slide" />
						</button>
						<Swiper :modules="[Navigation]" effect="fade" :speed="500" :navigation="{
							nextEl: '.gallery-slider__next.next-2',
							prevEl: '.gallery-slider__prev.prev-2',
							disabledClass: 'disabled',
						}" :breakpoints="breakpointsGallery">
							<SwiperSlide>
								<div class="gallery-slider__slide">
									<a data-fancybox="gallery2" href="/webp/gallery-1.webp">
										<img src="/webp/gallery-1.webp" />
									</a>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div class="gallery-slider__slide">
									<a data-fancybox="gallery2" href="/webp/gallery-6.webp">
										<img src="/webp/gallery-6.webp" />
									</a>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div class="gallery-slider__slide">
									<a data-fancybox="gallery2" href="/webp/gallery-7.webp">
										<img src="/webp/gallery-7.webp" />
									</a>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div class="gallery-slider__slide">
									<a data-fancybox="gallery2" href="/webp/gallery-8.webp">
										<img src="/webp/gallery-8.webp" />
									</a>
								</div>
							</SwiperSlide>
						</Swiper>
						<button class="gallery-slider__button gallery-slider__next next-2">
							<img src="~/assets/images/svg/about-arrow-left.svg" alt="next slide" />
						</button>
					</div>
				</div>
			</div>
		</section> -->

		<!-- <section class="pill-age">
			<div class="container">
				<h2 class="pill-age__title main-title">
					<span>"Неврослим"</span> кимлар учун тавсия этилади?
				</h2>

				<div class="pill-age__row">
					<div class="pill-age__left">
						<div class="pill-card">
							<h5 class="pill-card__title">3 ёшдан 12 ёшгача</h5>
							<ul class="pill-card__options">
								<li class="pill-card__option">
									<IconsCheck />
									<p>Болаларда диққат ва зеҳнни оширади</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Тез чарчаш ва йиғлоқиликнинг олдини олади</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Умумий қувватни оширади</p>
								</li>
							</ul>

							<div class="pill-card__image">
								<img src="~/assets/images/webp/pill-age-child.webp" alt="for childs" />
							</div>
						</div>
						<div class="pill-card">
							<h5 class="pill-card__title">12 ёшдан 30 ёшгача</h5>
							<ul class="pill-card__options">
								<li class="pill-card__option">
									<IconsCheck />
									<p>Ички хотиржамлик ва тетиклик беради</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Ўрганиш қобилиятини яхшилайди</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Кайфиятни кўтариб, уйқуни тинчлантиради</p>
								</li>
							</ul>

							<div class="pill-card__image">
								<img src="~/assets/images/webp/pill-age-child.webp" alt="for childs" />
							</div>
						</div>
						<div class="pill-card">
							<h5 class="pill-card__title">30 ёшдан 65 ёшгача</h5>
							<ul class="pill-card__options">
								<li class="pill-card__option">
									<IconsCheck />
									<p>Мия фаоллигини қўллаб-қувватлайди</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Ички мувозанатни сақлашга ёрдам беради</p>
								</li>
								<li class="pill-card__option">
									<IconsCheck />
									<p>Кундалик зўриқиш ва ноқулайликда самарали</p>
								</li>
							</ul>

							<div class="pill-card__image">
								<img src="~/assets/images/webp/pill-age-child.webp" alt="for childs" />
							</div>
						</div>
					</div>
					<div class="pill-age__right">
						<div class="pill-age__circle">
							<div class="pill-age__image">
								<img src="~/assets/images/webp/pill-age-pill.webp" alt="image pill" />
							</div>
						</div>
					</div>
				</div>

				<div class="pill-order">
					<h3 class="pill-order__title">
						Ўзингиз ва оилангиз хотиржамлигига беэътибор бўлманг
					</h3>
					<a href="#contact" @click="openConsultPopup" class="pill-order__btn btn--main"> Буюртма бериш </a>
					<p class="pill-order__desc">Оилангиз фаровонлиги ўз қўлингизда!</p>
				</div>
			</div>
		</section> -->

		<!-- <section class="reasons">
			<div class="image">
				<div class="container">
					<img src="~/assets/images/webp/about.jpg" alt="about" />
				</div>
			</div>
			<div class="container">
				<h2 class="reasons__title main-title">
					<span>"НЕВРОСЛИМ"</span> маҳсулоти ҳақида
				</h2>

				<div class="reasons__row">
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">1</p>
							</div>
							<p class="reason__name">
								Турли ҳид ва таъм берувчи воситалар, ширинлаштирувчи моддалар каби сунъий ва синтетик маҳсулотлардан
								холи.
							</p>
						</div>
					</div>
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">2</p>
							</div>
							<p class="reason__name">
								Ножўя таъсирларсиз ва болалар учун хавфсиз (натурал таркиб)
							</p>
						</div>
					</div>
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">3</p>
							</div>
							<p class="reason__name">
								Синовдан ўтган — 5 йилдан бери халқимиз томонидан севиб истеъмол қилинади.
							</p>
						</div>
					</div>
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">4</p>
							</div>
							<p class="reason__name">
								Маҳсулотимиздан мамнун бўлганлар 1000+
							</p>
						</div>
					</div>
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">5</p>
							</div>
							<p class="reason__name">
								Ўзбекистон бўйлаб етказиб бериш хизмати мутлақо бепул
							</p>
						</div>
					</div>
					<div class="reason">
						<div class="reason__main">
							<div class="reason__number">
								<p class="reason__circle">6</p>
							</div>
							<p class="reason__name">
								Органик — ГМО қўшимчалари ва бўёқлар қўшилмаган
							</p>
						</div>
					</div>
				</div>
			</div>
		</section> -->

		<section class="benefits">
			<div class="image">
				<div class="container">
					<img src="~/assets/images/webp/ttb.webp" alt="takib" />
				</div>
			</div>
			<div class="container">
				<h2 class="benefits__title main-title">
					Маҳсулот таркибидаги <span>"экстракт"</span> ларнинг табиий хусусиятлари
				</h2>
				<div class="benefits__row">
					<div class="benefit" data-aos-delay="50">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">1</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Гинкго билоба</h4>
									<p class="benefit__desc">
										Фаолликни оширади ва диққатни жамлашга ёрдам беради.
									</p>
								</div>
								<div class="benefit__img">
									<img src="~/assets/images/webp/benefit-img.webp" alt="benefit" />
								</div>
							</div>
						</div>
					</div>
					<div class="benefit" data-aos-delay="100">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">2</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Валериана</h4>
									<p class="benefit__desc">
										Стресс ва безовталикни енгиллаштирадиган табиий восита, дам олишга ва уйқу сифатини яхшилашга ёрдам беради.
									</p>
								</div>
								<div class="benefit__img">
									<img
										src="https://optim.tildacdn.one/tild3337-6131-4864-b063-303337313035/-/resize/272x/-/format/webp/6-2-1.png"
										alt="benefit" />
								</div>
							</div>
						</div>
					</div>
					<div class="benefit" data-aos-delay="150">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">3</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Қора андиз</h4>
									<p class="benefit__desc">
										Мия фаолиятини қўллаб-қувватлайди, умумий ҳолатга енгиллик ва тетиклик бағишлайди.
									</p>
								</div>
								<div class="benefit__img">
									<img
										src="https://optim.tildacdn.one/tild3536-6464-4836-b635-396135663666/-/resize/416x/-/format/webp/6-3-1.png"
										alt="benefit" />
								</div>
							</div>
						</div>
					</div>
					<div class="benefit" data-aos-delay="200">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">4</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Занжабил</h4>
									<p class="benefit__desc">
										Иммунитет тизимини мустаҳкамлаш ва ички мувозанатни сақлаш учун муҳим табиий компонент.
									</p>
								</div>
								<div class="benefit__img">
									<img
										src="https://optim.tildacdn.one/tild3163-3834-4234-a234-333633343065/-/resize/344x/-/format/webp/6-4-1.png"
										alt="benefit" />
								</div>
							</div>
						</div>
					</div>
					<div class="benefit" data-aos-delay="250">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">5</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Мумиё</h4>
									<p class="benefit__desc">
										Умумий ҳолатни яхшилайди, ички қувватни тиклайди ва терининг табиий ҳолатини сақлайди.
									</p>
								</div>
								<div class="benefit__img">
									<img
										src="https://optim.tildacdn.one/tild3335-3430-4264-b835-313939653666/-/resize/488x/-/format/webp/6-5-1.png"
										alt="benefit" />
								</div>
							</div>
						</div>
					</div>
					<div class="benefit" data-aos-delay="300">
						<div class="benefit__main">
							<div class="benefit__number">
								<p class="benefit__circle">6</p>
							</div>
							<div class="benefit__row">
								<div class="benefit__left">
									<h4 class="benefit__name">Долчин</h4>
									<p class="benefit__desc">
										Умумий фаровонликни яхшилайди, ички хотиржамликни таъминлайди ва кундалик зўриқишларни камайтиради.
									</p>
								</div>
								<div class="benefit__img">
									<img
										src="https://optim.tildacdn.one/tild3137-3562-4539-b364-313232393935/-/resize/386x/-/format/webp/6-6-1.png"
										alt="benefit" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="who-bottom">
					<div class="who-bottom__img1">
						<img
							src="https://optim.tildacdn.one/tild6338-3865-4637-b438-346266393938/-/resize/186x/-/format/webp/Leaves_Overlay_1_4.png"
							width="186" height="auto" alt="Img" />
					</div>
					<button id="benefits-btn" data-meta="lead-open" type="button" @click="openConsultPopup" class="who-bottom__btn btn--main">
						Маслаҳат олиш
					</button>
					<div class="who-bottom__img2">
						<img
							src="https://optim.tildacdn.one/tild6639-3835-4564-b263-633834316438/-/resize/302x/-/format/webp/Leaves_Overlay_1_5.png"
							width="302" height="auto" alt="Img" />
					</div>
				</div>
			</div>
		</section>

		<section class="about">
			<div class="container">
				<h2 class="about__title main-title">
					Сертификатлар
				</h2>

				<div class="about-slider">
					<div class="about-slider__main">
						<Swiper :modules="[Navigation, Pagination]" effect="fade" :speed="500" :navigation="{
							nextEl: '.about-slider__prev',
							prevEl: '.about-slider__next',
							disabledClass: 'disabled',
						}" :slidesPerView="1" :space-between="30" :centeredSlides="true" :pagination="{
							clickable: true,
						}">
							<SwiperSlide>
								<div class="about-slider__slide">
									<a data-fancybox="gallery" href="/new-certificate.webp">
										<img src="/new-certificate.webp" />
									</a>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div class="about-slider__slide">
									<a data-fancybox="gallery" href="/webp/about-img-2.webp">
										<img src="/webp/about-img-2.webp" />
									</a>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>

					<button class="about-slider__button about-slider__prev">
						<img src="~/assets/images/svg/about-arrow-left.svg" alt="prev slide" />
					</button>
					<button class="about-slider__button about-slider__next">
						<img src="~/assets/images/svg/about-arrow-left.svg" alt="next slide" />
					</button>
				</div>

			</div>
		</section>

		<section class="order">
			<div class="container">
				<h1 class="order__title main-title">
					Қандай қилиб буюртма берилади?
				</h1>

				<div class="order__row">
					<div class="order__left">
						<div class="order-card">
							<div class="order-card__main">
								<div class="order-card__img">
									<img src="~/assets/images/webp/order-phone.webp" alt="order with phone" />
								</div>
								<p class="order-card__name">
									Шу сайтимиз орқали маълумотларингизни қолдиринг
								</p>
							</div>
						</div>
						<div class="order-card">
							<div class="order-card__main">
								<div class="order-card__img">
									<img src="~/assets/images/webp/order-phone.webp" alt="order with phone" />
								</div>
								<p class="order-card__name">
									Малакали маслаҳатчиларимиз сиз билан боғланади
								</p>
							</div>
						</div>
						<div class="order-card">
							<div class="order-card__main">
								<div class="order-card__img">
									<img src="~/assets/images/webp/order-phone.webp" alt="order with phone" />
								</div>
								<p class="order-card__name">
									Етказиб бериш вақтида манзилингизни тасдиқланг
								</p>
							</div>
						</div>
					</div>

					<div class="order__right">
						<div class="order__image">
							<img src="~/assets/images/webp/order-image.webp" alt="operator" />
						</div>
					</div>
				</div>

				<div class="who-bottom">
					<div class="who-bottom__img1">
						<img
							src="https://optim.tildacdn.one/tild6338-3865-4637-b438-346266393938/-/resize/186x/-/format/webp/Leaves_Overlay_1_4.png"
							width="186" height="auto" alt="Img" />
					</div>
					<button id="order-btn" data-meta="lead-open" type="button" @click="openConsultPopup" class="who-bottom__btn btn--main">Маслаҳат олиш </button>
					<div class="who-bottom__img2">
						<img
							src="https://optim.tildacdn.one/tild6639-3835-4564-b263-633834316438/-/resize/302x/-/format/webp/Leaves_Overlay_1_5.png"
							width="302" height="auto" alt="Img" />
					</div>
				</div>

				<div class="order__clouds">
					<img src="~/assets/images/webp/clouds.webp" alt="clouds" />
				</div>
			</div>
		</section>


		<ConsultationPopup
			:is-open="isConsultPopupOpen"
			@close="closeConsultPopup"
		/>
	</main>
</template>

<script lang="js" setup>
import moment from 'moment';
//===============================-< imports >-===============================
//> funcybox
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const modules = [Navigation];
const breakpoints = {
	480: {
		slidesPerView: 1,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 1.5,
		spaceBetween: 12,
	},
}
const commentsBreakpoints = {
	480: {
		slidesPerView: 1.5,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 2.5,
		spaceBetween: 12,
	},
	1024: {
		slidesPerView: 4,
		spaceBetween: 20,
	},
}
const breakpointsGallery = {
	480: {
		slidesPerView: 1.5,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 2.5,
		spaceBetween: 12,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 20,
	},
}


//===============================-< play audio >-===============================
//> variables
const players = ref("")
let playedIndex = ref(null);
//> functions
function playAudio(event, index) {
	players.value.forEach(audio => {
		const player = audio.querySelector('.audio__player')
		player.pause();
	})

	playedIndex.value = index;
	const player = event.target.closest('.audio').querySelector('.audio__player')
	player.play();
}
function pauseAudio(event) {
	playedIndex.value = null;
	const player = event.target.closest('.audio').querySelector('.audio__player')
	player.pause();
}

//===============================-< coutdown >-===============================
//> variables
///=============================- coutdown -=================================
//variables
let deadline = ref(moment(new Date()).add(1, 'day').format("MM.DD.YYYY"));


let days = ref("00");
let hours = ref("00");
let minutes = ref("00");
let seconds = ref("00");
let expired = ref(false);

function theTime() {
	var ctx = this;
	console.log(deadline.value);


	// Countdown loop
	var x = setInterval(function () {
		// Difference between the 2 dates
		let countDownDate = new Date(deadline.value.replace(/-/g, "/")).getTime();
		let now = new Date().getTime();
		let diff = countDownDate - now;
		// Time conversion to days, hours, minutes and seconds
		let tdays = Math.floor(diff / (1000 * 60 * 60 * 24));
		let thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let tseconds = Math.floor((diff % (1000 * 60)) / 1000);

		// Keep 2 digits
		days.value = tdays < 10 ? "0" + tdays : tdays;
		hours.value = thours < 10 ? "0" + thours : thours;
		minutes.value = tminutes < 10 ? "0" + tminutes : tminutes;
		seconds.value = tseconds < 10 ? "0" + tseconds : tseconds;

		// Check for time expiration
		if (diff < 0) {
			clearInterval(x);
			expired.value = true;
		}
	}, 1000);
}


//===============================-< on page load >-===============================
//> variables
//> functions
onMounted(() => {
	Fancybox.bind("[data-fancybox]", {
	})

	theTime();
})




const isConsultPopupOpen = ref(false);

function openConsultPopup(e) {
	e.preventDefault();
	isConsultPopupOpen.value = true;
}

function closeConsultPopup() {
	isConsultPopupOpen.value = false;
}

</script>

<style></style>
