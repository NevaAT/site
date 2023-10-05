import Image from 'next/image'
import Link from 'next/link'
import TopMenu from '@/components/TopMenu'

const Topic = ({ menus, phones, settings, imgURL }) => {
  // console.log('settings:', settings, imgURL)
  return (
    <header className="max-w-4xl mx-auto lg:max-w-4xl">
      <TopMenu menus={menus} />
      <div className="grid grid-cols-2 mx-6 mb-6 md:mx-4 lg:mx-0">
        <Link href="/">
          <span className="sr-only">NevaAT Logo</span>
          <Image width={256} height={97}
            className="inline h-16"
            src={`${imgURL}${settings?.images?.logo?.path}`}
            alt="NevaAT Logo"
          />
        </Link>
        <div className="grid justify-end grid-rows-2 py-1 sm:mt-1 mt-2 sm:text-sm text-[12px] sm:font-medium font-semibold text-bluegray-300">
          <a href={phones[0]?.link}>{phones[0]?.shown || '---'}</a>
          <a href={phones[1]?.link}>{phones[1]?.shown || '---'}</a>
        </div>
      </div>
    </header>
  )
}

export default Topic