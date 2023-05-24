import Newsletter from '@/components/Newsletter'
import ProfileHero from '@/components/ProfileHero'
import UpdateProfileForm from '@/components/UpdateProfileForm'

export default function ProfilePage() {
  return (
    <>
      <ProfileHero />
      <UpdateProfileForm />
      <Newsletter />
    </>
  )
}
