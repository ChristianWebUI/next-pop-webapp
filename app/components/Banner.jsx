import {
  BANNER_PARAGRAPH1,
  BANNER_PARAGRAPH2,
  BANNER_SPAN,
  BANNER_TITLE,
  CALL_TO_ACTION_TITLE
} from '@/constants/home'

export default function Banner() {
  return (
    <section
      id="banner"
      className="section-m1 flex flex-col items-center justify-center text-center bg-[url('/banner-default-pdp.webp')] w-full h-[40vh] bg-cover bg-center"
    >
      <h4 className="text-white text-base">{BANNER_TITLE}</h4>
      <h2 className="text-white text-3xl py-2.5">
        {BANNER_PARAGRAPH1}{' '}
        <span className="text-[#ef3636]">{BANNER_SPAN}</span>{' '}
        {BANNER_PARAGRAPH2}
      </h2>
      <button
        type="button"
        className="text-sm font-semibold px-[30px] py-[15px] text-black bg-white rounded border-none outline-none transition-[0.2s] hover:bg-primary-accent-color hover:text-white"
      >
        {CALL_TO_ACTION_TITLE}
      </button>
    </section>
  )
}
