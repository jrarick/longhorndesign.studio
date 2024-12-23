import { Link } from 'react-router'
import ldsLogo from '~/assets/lds-logo.png'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="relative z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Longhorn Design Studio</span>
          <img alt="" src={ldsLogo} className="h-14 w-auto" />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium leading-6 text-marzipan-200 hover:text-marzipan-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
