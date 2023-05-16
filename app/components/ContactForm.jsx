import {
  CONTACT_FORM_LEAVE_MESSAGE,
  CONTACT_FORM_SUBMIT_BUTTON,
  CONTACT_FORM_TITLE,
  OWNER1_EMAIL,
  OWNER1_NAME,
  OWNER1_PHONE,
  OWNER1_POSITION,
  OWNER2_EMAIL,
  OWNER2_NAME,
  OWNER2_PHONE,
  OWNER2_POSITION,
  OWNER3_EMAIL,
  OWNER3_NAME,
  OWNER3_PHONE,
  OWNER3_POSITION
} from '@/constants/contact'
import Image from 'next/image'

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="flex flex-wrap md:flex-nowrap justify-between m-3 p-[30px_10px] md:m-8 lg:p-20 md:p-10 border border-solid border-input-border-color"
    >
      <form
        action=""
        className="w-full mb-8 md:mb-0 lg:w-[65%] md:w-6/12 flex flex-col items-start"
      >
        <span className="uppercase text-xs">{CONTACT_FORM_LEAVE_MESSAGE}</span>
        <h2 className="text-6xl px-0 py-5">{CONTACT_FORM_TITLE}</h2>
        <input
          type="text"
          name="yourName"
          id="yourName"
          placeholder="Your Name"
          className="w-full py-3 px-4 outline-none mb-5 border border-solid border-input-border-color"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full py-3 px-4 outline-none mb-5 border border-solid border-input-border-color"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="w-full py-3 px-4 outline-none mb-5 border border-solid border-input-border-color"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="w-full py-3 px-4 outline-none mb-5 border border-solid border-input-border-color"
        />
        <button
          type="submit"
          className="text-sm font-semibold px-[30px] py-[15px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
        >
          {CONTACT_FORM_SUBMIT_BUTTON}
        </button>
      </form>
      <div className="">
        <div className="pb-[25px] flex items-start">
          <Image
            src="/contact/owner-pdp-1.png"
            alt="Owner P de Papel 1"
            width={90}
            height={90}
            priority
            quality={100}
            className="w-16 h-16 object-cover mr-4"
          />
          <p className="m-0 text-[13px] leading-[25px]">
            <span className="block text-base font-semibold text-black">
              {OWNER1_NAME}
            </span>
            {OWNER1_POSITION}
            <br />
            {OWNER1_PHONE}
            <br />
            {OWNER1_EMAIL}
          </p>
        </div>
        <div className="pb-[25px] flex items-start">
          <Image
            src="/contact/owner-pdp-2.png"
            alt="Owner P de Papel 1"
            width={90}
            height={90}
            priority
            quality={100}
            className="w-16 h-16 object-cover mr-4"
          />
          <p className="m-0 text-[13px] leading-[25px]">
            <span className="block text-base font-semibold text-black">
              {OWNER2_NAME}
            </span>
            {OWNER2_POSITION}
            <br />
            {OWNER2_PHONE}
            <br />
            {OWNER2_EMAIL}
          </p>
        </div>
        <div className="pb-[25px] flex items-start">
          <Image
            src="/contact/owner-pdp-3.png"
            alt="Owner P de Papel 1"
            width={90}
            height={90}
            priority
            quality={100}
            className="w-16 h-16 object-cover mr-4"
          />
          <p className="m-0 text-[13px] leading-[25px]">
            <span className="block text-base font-semibold text-black">
              {OWNER3_NAME}
            </span>
            {OWNER3_POSITION}
            <br />
            {OWNER3_PHONE}
            <br />
            {OWNER3_EMAIL}
          </p>
        </div>
      </div>
    </section>
  )
}
