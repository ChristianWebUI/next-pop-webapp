import {
  CONTACT_DETAILS_ADDRESS,
  CONTACT_DETAILS_EMAIL,
  CONTACT_DETAILS_PHONE,
  CONTACT_DETAILS_SCHEDULE,
  CONTACT_DETAILS_SPAN,
  CONTACT_DETAILS_SUBTITLE,
  CONTACT_DETAILS_TITLE
} from '@/constants/contact'
import { ClockIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'

export default function ContactDetails() {
  return (
    <section
      id="contact-details"
      className="section-p1 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="w-full mb-8 md:w-[40%] md:mb-0">
        <span className="uppercase text-xs">{CONTACT_DETAILS_SPAN}</span>
        <h2 className="text-6xl px-0 py-5">{CONTACT_DETAILS_TITLE}</h2>
        <h3 className="text-3xl pb-4">{CONTACT_DETAILS_SUBTITLE}</h3>
        <div>
          <li className="list-none flex gap-3 min-h-[45px] items-center justify-start">
            <MapIcon className="w-[14px] h-[14px]" />
            <p className="m-0 text-sm">{CONTACT_DETAILS_ADDRESS}</p>
          </li>
          <li className="list-none flex gap-3 min-h-[45px] items-center justify-start">
            <EnvelopeIcon className="w-[14px] h-[14px]" />
            <p className="m-0 text-sm">{CONTACT_DETAILS_EMAIL}</p>
          </li>
          <li className="list-none flex gap-3 min-h-[45px] items-center justify-start">
            <PhoneIcon className="w-[14px] h-[14px]" />
            <p className="m-0 text-sm">{CONTACT_DETAILS_PHONE}</p>
          </li>
          <li className="list-none flex gap-3 min-h-[45px] items-center justify-start">
            <ClockIcon className="w-[14px] h-[14px]" />
            <p className="m-0 text-sm">{CONTACT_DETAILS_SCHEDULE}</p>
          </li>
        </div>
      </div>
      <div className="w-full md:w-[55%] h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4831596837676!2d-75.59894102414654!3d6.199809793787956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468351bc2f99f5%3A0x3541fee35e52ae95!2sVilla%20Terra%20Apartamentos!5e0!3m2!1sen!2sco!4v1684219881269!5m2!1sen!2sco"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
