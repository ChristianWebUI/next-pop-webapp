import classnames from 'classnames'
export default function CheckoutStep({ icon, index, currentStep }) {
  return (
    <div
      className={classnames(
        'relative flex justify-center items-center text-xl w-[50px] h-[50px] rounded-full bg-[#e1e5ea] text-[#a7bbc7] step',
        {
          'bg-primary-accent-color text-[#faf3f3] scale-[1.2]': index + 1 === 1
        },
        {
          'bg-primary-accent-color text-[#faf3f3] scale-[1.2]':
            index + 1 <= currentStep
        }
      )}
    >
      {icon}
    </div>
  )
}
