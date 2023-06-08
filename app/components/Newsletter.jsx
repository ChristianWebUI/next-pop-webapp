import {
  NEWSTEXT_DESC,
  NEWSTEXT_DESC_HIGHLIGHTED,
  NEWSTEXT_SIGNUP_BUTTON,
  NEWSTEXT_TITLE
} from '@/constants/home'

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="section-p1 section-m1 flex justify-between items-center flex-wrap bg-[url('/banners-cta/pdp-signup.png')] bg-no-repeat bg-[20%_30%] bg-signup-bg-color"
    >
      <div>
        <h4 className="text-3xl font-bold text-white font-title">
          {NEWSTEXT_TITLE}
        </h4>
        <p className="text-sm font-semibold text-other-text-color">
          {NEWSTEXT_DESC}{' '}
          <span className="text-other-highlight-text-color">
            {NEWSTEXT_DESC_HIGHLIGHTED}
          </span>{' '}
        </p>
      </div>
      <div id="newsletter-form" className="flex w-[40%]">
        <input
          type="text"
          placeholder="Your email address"
          name="newsletter-input"
          id="newsletter-input"
          className="h-[3.125rem] text-sm w-full border rounded px-[1.25em] py-0 border-solid border-transparent outline-none rounded-tr-none rounded-br-none"
        />
        <button
          type="button"
          className="text-sm font-semibold px-[30px] py-[15px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s] whitespace-nowrap rounded-tl-none rounded-bl-none"
        >
          {NEWSTEXT_SIGNUP_BUTTON}
        </button>
      </div>
    </section>
  )
}
