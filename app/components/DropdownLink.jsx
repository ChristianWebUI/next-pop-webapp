import Link from 'next/link'

export default function DropdownLink({ href, children, onClick, ...rest }) {
  return !onClick ? (
    <Link className=" text-blue-700" href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a className="text-blue-700" href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}
