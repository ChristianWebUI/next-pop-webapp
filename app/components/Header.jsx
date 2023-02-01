import Link from 'next/link'

const links = [
  { label: '🐱', route: '/login' },
  { label: '🛒', route: '/cart' }
]

export default function Header() {
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <span className="text-lg font-bold">P de Papel</span>
        </Link>
        <div>
          {links.map(({ label, route }) => (
            <Link key={route} href={route} className="p-2">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
