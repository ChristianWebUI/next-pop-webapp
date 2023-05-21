'use client'

import { PLACE_ORDER_TITLE } from '@/constants/checkout'
import classnames from 'classnames'
import { useState } from 'react'

const BUTTON_STATES = {
  default: 'default',
  placing: 'placing',
  done: 'done'
}

export default function PlaceOrderButton() {
  const { default: _default, placing, done } = BUTTON_STATES
  const [currentState, setCurrentState] = useState(_default)
  const handleClickButton = () => {
    setCurrentState(placing)
    setTimeout(() => {
      setCurrentState(done)
    }, 4000)
    setTimeout(() => setCurrentState(_default), 6000)
  }
  return (
    <button
      className={classnames(
        'w-[19.188rem] md:w-[385px] h-[60px] rounded-[10px] bg-primary-accent-color relative overflow-hidden border-none focus:outline-none',
        { 'group is-default': currentState === _default },
        { 'group is-placing': currentState === placing },
        { 'group is-done': currentState === done }
      )}
      type="button"
      onClick={handleClickButton}
    >
      <div className="group-[.is-default]:opacity-100 group-[.is-default]:translate-y-0 group-[.is-placing]:-translate-y-5 group-[.is-done]:-translate-y-5 w-full h-full leading-[60px] opacity-0 text-white text-base absolute top-0 transition-all duration-[0.2s] translate-y-5">
        {PLACE_ORDER_TITLE}
      </div>
      <div className="group-[.is-placing]:block hidden scale-[0.4] absolute -top-[2px] -left-[65px] animate-lift-moving">
        <div className="w-[34px] h-[20px] mb-[2px] border-[5px] border-solid border-[#ff7745] relative rounded-[10px_50px_10px_5px] after:content-[''] after:w-[30px] after:h-[50px] after:absolute after:left-[233%] after:top-[4px] after:box-border after:border-l-[5px] after:border-solid after:border-l-black after:border-b-[6px] after:border-b-black after:rounded-[0_0_0_5px] after:origin-center"></div>
        <div className="w-[60px] h-[30px] relative bg-[#FF4500] rounded-[5px_15px_10px_10px] before:content-[''] before:w-5 before:h-5 before:absolute before:bg-black before:rounded-[50%] before:border-[3px] before:border-solid before:border-[#2b59b5] before:left-0 before:-bottom-2.5 after:content-[''] after:w-5 after:h-5 after:absolute after:bg-black after:rounded-[50%] after:border-[3px] after:border-solid after:border-[#2b59b5] after:left-[36px] after:-bottom-2.5"></div>
      </div>
      <div className="group-[.is-placing]:block hidden w-[50px] h-[50px] bg-[#ad8762] absolute rounded-[5px] scale-[0.4] left-[50px] top-14 animate-place-box before:content-[''] before:w-1 before:h-3 before:bg-[#ffbf59] before:absolute before:left-[21px] after:content-[''] after:w-1 after:h-2.5 after:bg-[#ffbf59] after:absolute after:left-[25px]"></div>
      <div className="group-[.is-done]:opacity-100 group-[.is-done]:translate-y-0  group-[.is-default]:translate-y-5 w-full h-full leading-[60px] opacity-0 text-white text-base absolute top-0 transition-all duration-[0.2s] translate-y-5">
        Done
      </div>
    </button>
  )
}
