import Image from 'next/image'
import Link from 'next/link'
import TopMenu from '@/components/TopMenu'

const Topic = ({ menus, phones }) => {
  return (
    <header className="max-w-4xl mx-auto lg:max-w-4xl">
      <TopMenu menus={menus} />
      <div className="grid grid-cols-2 mx-6 mb-6 md:mx-4 lg:mx-0">
        <Link href="/">
          <span className="sr-only">NevaAT Logo</span>
          <Image width={182} height={48}
            className="inline w-auto h-10 sm:h-12"
            src="/images/logo-white.png"
            alt="NevaAT Logo"
          />
        </Link>
        <div className="grid justify-end grid-rows-2 text-sm text-bluegray-300">
          <a href={phones[0]?.link}>{phones[0]?.shown || '--empty--'}</a>
          <a href={phones[1]?.link}>{phones[1]?.shown || '--empty--'}</a>
        </div>
      </div>
    </header>
  )
}

export default Topic