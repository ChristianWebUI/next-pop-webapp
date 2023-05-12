import {
  BUTTON_TEXT,
  DEFAULT_HERO_PARAGRAPH,
  DEFAULT_HERO_SUBTITLE,
  DEFAULT_HERO_SUB_SUBTITLE,
  DEFAULT_HERO_TITLE
} from '@/constants/home'

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url('/hero-pdp-default-test.png')] h-90vh w-full bg-cover bg-[top_25%_right_0] px-20 flex items-start justify-center flex-col"
    >
      <h4 className="pb-4">{DEFAULT_HERO_SUB_SUBTITLE}</h4>
      <h2>{DEFAULT_HERO_SUBTITLE}</h2>
      <h1 className="text-primary-accent-color">{DEFAULT_HERO_TITLE}</h1>
      <p>{DEFAULT_HERO_PARAGRAPH}</p>
      <button
        type="button"
        className="bg-[url('/button-bg-splash.png')] bg-transparent bg-no-repeat text-primary-accent-color border-0 py-3.5 pl-[65px] pr-20 font-bold text-[15px]"
      >
        {BUTTON_TEXT}
      </button>
    </section>
  )
}
