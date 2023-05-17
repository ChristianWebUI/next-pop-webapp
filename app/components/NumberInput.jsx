'use client'

export default function NumberInput({ quantity = 1 }) {
  const handleDecrease = (event) => {
    const input = event.target.parentNode.querySelector('input[type=number]')
    input.stepDown()
  }

  const handleIncrease = (event) => {
    const input = event.target.parentNode.querySelector('input[type=number]')
    input.stepUp()
  }
  return (
    <div className="inline-flex border-2 border-solid border-input-border-color box-border rounded">
      <button
        id="decrement"
        type="button"
        className="box-border bg-transparent items-center justify-center w-10 h-10 cursor-pointer relative m-0 border-[none] outline-none appearance-none before:inline-block before:absolute before:content-[''] before:w-2 before:h-px before:bg-[#212121] before:-translate-x-2/4 before:-translate-y-2/4 after:inline-block after:absolute after:content-[''] after:w-2 after:h-px after:bg-[#212121] after:-translate-x-2/4 after:-translate-y-2/4"
        onClick={handleDecrease}
      ></button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        max="100"
        step="1"
        value={quantity}
        className="outline-none box-border max-w-fit p-2 border-[0_2px] border-solid border-input-border-color text-center"
        readOnly
      />
      <button
        id="increment"
        type="button"
        className="box-border bg-transparent items-center justify-center w-10 h-10 cursor-pointer relative m-0 border-[none] outline-none appearance-none before:inline-block before:absolute before:content-[''] before:w-2 before:h-px before:bg-[#212121] before:-translate-x-2/4 before:-translate-y-2/4 after:inline-block after:absolute after:content-[''] after:w-2 after:h-px after:bg-[#212121] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-90"
        onClick={handleIncrease}
      ></button>
    </div>
  )
}
