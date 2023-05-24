import { PROFILE_HERO_PARAGRAPH, PROFILE_HERO_TITLE } from '@/constants/profile'

export default function ProfileHero() {
  return (
    <section
      id="profile-hero"
      className="w-full bg-[url('/about/about-banner-pdp.png')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{PROFILE_HERO_TITLE}</h2>
      <p className="text-white">{PROFILE_HERO_PARAGRAPH}</p>
    </section>
  )
}
