import Link from 'next/link'

export default function DropdownLink({ href, children, onClick, ...rest }) {
  return !onClick ? (
    <Link href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}
