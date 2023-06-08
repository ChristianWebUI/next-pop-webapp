import {
  BANNER_BOX1_BUTTON_TEXT,
  BANNER_BOX1_SPAN,
  BANNER_BOX1_SUBTITLE,
  BANNER_BOX1_TITLE,
  BANNER_BOX2_BUTTON_TEXT,
  BANNER_BOX2_SPAN,
  BANNER_BOX2_SUBTITLE,
  BANNER_BOX2_TITLE,
  MINI_BANNER1_DESC,
  MINI_BANNER1_TITLE,
  MINI_BANNER2_DESC,
  MINI_BANNER2_TITLE,
  MINI_BANNER3_DESC,
  MINI_BANNER3_TITLE
} from '@/constants/home'

export default function BannersCallToAction() {
  return (
    <section className="section-p1">
      <section id="dual-banners" className="flex justify-between flex-wrap">
        <div
          id="banner-box-1"
          className="flex flex-col items-start justify-center bg-[url('/banners-cta/banner-box1-pdp.webp')] min-w-[580px] h-[50vh] bg-cover bg-center p-8 group"
        >
          <h4 className="text-white text-[3.5rem] leading-[3.25rem] font-light">
            {BANNER_BOX1_TITLE}
          </h4>
          <h1 className="text-white text-3xl font-extrabold text-[2.5rem] leading-[4.25rem]">
            {BANNER_BOX1_SUBTITLE}
          </h1>
          <span className="text-white text-sm font-medium pb-4">
            {BANNER_BOX1_SPAN}
          </span>
          <button
            type="button"
            className="text-sm font-semibold text-white bg-transparent border transition-[0.2s] px-[18px] py-[11px] border-solid border-white outline-none group-hover:bg-primary-accent-color group-hover:border group-hover:border-solid group-hover:border-primary-accent-color"
          >
            {BANNER_BOX1_BUTTON_TEXT}
          </button>
        </div>
        <div
          id="banner-box-2"
          className="flex flex-col items-start justify-center bg-[url('/banners-cta/banner-box2-pdp.webp')] min-w-[580px] h-[50vh] bg-cover bg-center p-8 group"
        >
          <h4 className="text-white text-[3.5rem] leading-[3.25rem] font-light">
            {BANNER_BOX2_TITLE}
          </h4>
          <h1 className="text-white text-3xl font-extrabold text-[2.5rem] leading-[4.25rem]">
            {BANNER_BOX2_SUBTITLE}
          </h1>
          <span className="text-white text-sm font-medium pb-4">
            {BANNER_BOX2_SPAN}
          </span>
          <button
            type="button"
            className="text-sm font-semibold text-white bg-transparent border transition-[0.2s] px-[18px] py-[11px] border-solid border-white outline-none group-hover:bg-primary-accent-color group-hover:border group-hover:border-solid group-hover:border-primary-accent-color"
          >
            {BANNER_BOX2_BUTTON_TEXT}
          </button>
        </div>
      </section>
      <section
        id="triple-banners"
        className="flex justify-between flex-wrap py-20 px-0"
      >
        <div className="flex flex-col justify-center items-start min-w-[30%] h-[30vh] bg-[url('/banners-cta/mini-banner1-pdp.webp')] bg-cover bg-center mb-5 p-5">
          <h1 className="text-white font-black text-2xl uppercase">
            {MINI_BANNER1_TITLE}
          </h1>
          <p className="text-[#ec544e] font-extrabold text-base">
            {MINI_BANNER1_DESC}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start min-w-[30%] h-[30vh] bg-[url('/banners-cta/mini-banner2-pdp.webp')] bg-cover bg-center mb-5 p-5">
          <h1 className="text-white font-black text-2xl uppercase">
            {MINI_BANNER2_TITLE}
          </h1>
          <p className="text-[#ec544e] font-extrabold text-base">
            {MINI_BANNER2_DESC}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start min-w-[30%] max-w-[30%] h-[30vh] bg-[url('/banners-cta/mini-banner3-pdp.webp')] bg-cover bg-center mb-5 p-5">
          <h1 className="text-white font-black text-2xl uppercase">
            {MINI_BANNER3_TITLE}
          </h1>
          <p className="text-[#ec544e] font-extrabold text-base">
            {MINI_BANNER3_DESC}
          </p>
        </div>
      </section>
    </section>
  )
}
