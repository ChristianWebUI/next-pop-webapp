import {
  FOLLOW_US_TITLE,
  FOOTER_ABOUT_LINK1,
  FOOTER_ABOUT_LINK2,
  FOOTER_ABOUT_LINK3,
  FOOTER_ABOUT_LINK4,
  FOOTER_ABOUT_LINK5,
  FOOTER_ABOUT_TITLE,
  FOOTER_ADDRESS,
  FOOTER_ADDRESS_TITLE,
  FOOTER_CONTACT_TITLE,
  FOOTER_HOURS,
  FOOTER_HOURS_TITLE,
  FOOTER_INSTALL_PARAGRAPH,
  FOOTER_INSTALL_PAYMENTS_TEXT,
  FOOTER_INSTALL_TITLE,
  FOOTER_MYACCOUNT_LINK1,
  FOOTER_MYACCOUNT_LINK2,
  FOOTER_MYACCOUNT_LINK3,
  FOOTER_MYACCOUNT_LINK4,
  FOOTER_MYACCOUNT_LINK5,
  FOOTER_MYACCOUNT_TITLE,
  FOOTER_PHONE,
  FOOTER_PHONE_TITLE
} from '@/constants/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="section-p1 flex flex-wrap flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mb-5">
          <div className="w-16 h-16 mb-8">
            <Image
              src="/logo_p_de_papel.png"
              alt="Logo Papeleria P de Papel"
              width={200}
              height={200}
              quality={100}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
          <h5 className="text-sm pb-5">{FOOTER_CONTACT_TITLE}</h5>
          <p className="text-xs mt-0 mb-2 mx-0">
            <strong>{FOOTER_ADDRESS_TITLE}</strong>
            {FOOTER_ADDRESS}
          </p>
          <p className="text-xs mt-0 mb-2 mx-0">
            <strong>{FOOTER_PHONE_TITLE}</strong>
            {FOOTER_PHONE}
          </p>
          <p className="text-xs mt-0 mb-2 mx-0">
            <strong>{FOOTER_HOURS_TITLE}</strong>
            {FOOTER_HOURS}
          </p>
          <div id="footer-follow-us">
            <h5 className="text-sm pb-5">{FOLLOW_US_TITLE}</h5>
            <div className="flex mt-5">
              <Link
                href="#"
                className="text-[#465b52] pr-1 hover:text-primary-accent-color"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-[#465b52] pr-1 hover:text-primary-accent-color"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-[#465b52] pr-1 hover:text-primary-accent-color"
              >
                <span className="sr-only">Tiktok</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-[#465b52] pr-1 hover:text-primary-accent-color"
              >
                <span className="sr-only">Pinterest</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mb-5">
          <h5 className="text-sm pb-5">{FOOTER_ABOUT_TITLE}</h5>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_ABOUT_LINK1}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_ABOUT_LINK2}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_ABOUT_LINK3}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_ABOUT_LINK4}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_ABOUT_LINK5}
          </Link>
        </div>

        <div className="flex flex-col items-start mb-5">
          <h5 className="text-sm pb-5">{FOOTER_MYACCOUNT_TITLE}</h5>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_MYACCOUNT_LINK1}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_MYACCOUNT_LINK2}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_MYACCOUNT_LINK3}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_MYACCOUNT_LINK4}
          </Link>
          <Link
            href="#"
            className="text-xs mb-2.5 text-primary-text-color hover:text-primary-accent-color"
          >
            {FOOTER_MYACCOUNT_LINK5}
          </Link>
        </div>

        <div className="flex flex-col items-start mb-5">
          <h5 className="text-sm pb-5">{FOOTER_INSTALL_TITLE}</h5>
          <p className="text-xs mt-0 mb-2 mx-0">{FOOTER_INSTALL_PARAGRAPH}</p>
          <div className="flex gap-1">
            <Image
              src="/footer/app.jpg"
              alt="App Play"
              width={170}
              height={48}
              className="border border-solid border-primary-accent-color rounded-[6px]"
            />
            <Image
              src="/footer/play.jpg"
              alt="Google Play"
              width={170}
              height={48}
              className="border border-solid border-primary-accent-color rounded-[6px]"
            />
          </div>
          <p className="text-xs mt-0 mb-2 mx-0">
            {FOOTER_INSTALL_PAYMENTS_TEXT}
          </p>
          <Image
            src="/footer/pay.png"
            alt="Payments"
            width={224}
            height={32}
            className="mt-2.5 mb-[15px] mx-0"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        &copy; 2023 - {year} www.pdepapel.com - All Rights Reserved.
      </div>
    </footer>
  )
}
