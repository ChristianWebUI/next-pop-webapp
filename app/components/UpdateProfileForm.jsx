'use client'
import {
  CONFIRM_LABEL,
  EMAIL_LABEL,
  NAME_LABEL,
  PASSWORD_LABEL,
  PROFILE_FORM_TITLE,
  UPDATE_PROFILE_BUTTON
} from '@/constants/profile'
import { IdentificationIcon } from '@heroicons/react/24/outline'
import avatar from 'animal-avatar-generator'
import classnames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

export default function UpdateProfileForm() {
  const [name, setNewName] = useState('')
  const avatarSvg = avatar(name, { size: 80 })
  return (
    <section id="update-profile-form" className="section-p1">
      {/* Title */}
      <h2 className="w-full flex items-center justify-center md:mb-8 mb-4">
        {PROFILE_FORM_TITLE}
      </h2>
      <form className="mx-auto max-w-screen-md border border-solid border-input-border-color md:p-20 p-5 flex flex-col justify-center items-center gap-16">
        {/* Avatar */}
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`}
          alt="avatar-profile"
          width={0}
          height={0}
          priority
          quality={100}
          sizes="100vw"
          className={classnames(
            'h-20 w-20 rounded-full ring-2 ring-white opacity-0 transition-opacity duration-[2s]',
            { 'opacity-100': name }
          )}
        />
        {/* Name */}
        <div className="relative w-full">
          <input
            className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
            type="text"
            id="fullName"
            onChange={(e) => setNewName(e.target.value)}
            required
          />
          <label
            className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
            htmlFor="fullName"
          >
            {NAME_LABEL}
          </label>
        </div>
        {/* Email */}
        <div className="relative w-full">
          <input
            className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
            type="email"
            id="email"
            required
          />
          <label
            className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
            htmlFor="email"
          >
            {EMAIL_LABEL}
          </label>
        </div>
        {/* Password */}
        <div className="relative w-full">
          <input
            className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
            type="password"
            id="password"
            required
          />
          <label
            className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
            htmlFor="password"
          >
            {PASSWORD_LABEL}
          </label>
        </div>
        {/* Confirm Password */}
        <div className="relative w-full">
          <input
            className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
            type="password"
            id="confirmPassword"
            required
          />
          <label
            className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
            htmlFor="confirmPassword"
          >
            {CONFIRM_LABEL}
          </label>
        </div>
        {/* Update Profile Button */}
        <button
          type="submit"
          className="flex justify-center items-center gap-2 text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
        >
          <IdentificationIcon className="h-4 w-4" />
          {UPDATE_PROFILE_BUTTON}
        </button>
      </form>
    </section>
  )
}
