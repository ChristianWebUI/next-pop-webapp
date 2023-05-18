import Link from 'next/link'
import { forwardRef } from 'react'

function DropdownLink({ href, children, onClick, className }, ref) {
  return !onClick ? (
    <Link className={className} href={href} ref={ref}>
      {children}
    </Link>
  ) : (
    <a className={className} href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
}

export default forwardRef(DropdownLink)
