import Navbar from '@/ui/navbar'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '@/ui/mobile-menu'

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-10 pb-20">
      <Link href="/">
        <Image src="/sp-logo.svg" alt="second playthrough logo" width={164} height={52} loading="eager"
          className="h-14 w-auto " />
      </Link>
      <Navbar />
      <MobileMenu />
    </header>
  )
}