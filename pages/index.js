import Link from 'next/link'
import PageWrapper from "../components/PageWrapper"
import Image from 'next/image'
import nеvaArena from '../public/images/neva-arena.jpg'
import BrandSlider from '../components/BrandSlider'
import CardsGrid from '../components/CardsGrid'
import PlaceMap from '../components/PlaceMap'
import BottomMenu from '../components/BottomMenu'
import BottomContacts from '../components/BottomContacts'
const Scroll  = require('react-scroll')
const Element = Scroll.Element
import { API_URL } from '@/config/index'
import TopMenu from '@/components/TopMenu'
import InnerText from '@/components/InnerText'
import SectionHeader from '@/components/SectionHeader'
import TextChapter from '@/components/TextChapter'

const Home = ({brands,cards,menus,phones,homepage}) => {
  return(
    <PageWrapper>
      <header className="max-w-4xl mx-auto">
        <TopMenu menus={menus} />
        <div className="grid grid-cols-2 mx-6 mb-6 md:mx-4 lg:mx-0">
          <Link href="/">
            <a>
              <span className="sr-only">NevaAT Logo</span>
              <Image width={182} height={48}
                className="inline w-auto h-10 sm:h-12"
                src="/images/logo-white.png"
                alt="NevaAT Logo"
              />
            </a>
          </Link>
          <div className="grid justify-end grid-rows-2 text-sm text-bluegray-300">
            <a href={phones[0] && phones[0].link}>{phones[0] && phones[0].shown}</a>
            <a href={phones[1] && phones[1].link}>{phones[1] && phones[1].shown}</a>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto text-bluegray-400">

        <h1 className="h1">{homepage && homepage.H1 || '--empty--'}</h1>
        <div className="my-4 overflow-hidden rounded-xl">
          <Image src={nеvaArena} alt="Нева Арена" />
        </div>

        <Element name={menus.find(menu => menu.Ref === 'about') && menus.find(menu => menu.Ref === 'about').Ref} />
        <section className="text-double-block">
          <TextChapter text={homepage.Chapter1} />
          <TextChapter text={homepage.Chapter2} />
        </section>

        <Element name={menus.find(menu => menu.Ref === 'services') && menus.find(menu => menu.Ref === 'services').Ref} />
        <section>
          <SectionHeader menus={menus} item="services" />
          <div className="grid grid-cols-2 gap-0 px-10 sm:grid-cols-3 sm:gap-2 md:gap-6">
            <CardsGrid cards={cards} />
          </div>
        </section>

        <Element name={menus.find(menu => menu.Ref === 'clients') && menus.find(menu => menu.Ref === 'clients').Ref} />
        <section className="my-16">
          <SectionHeader menus={menus} item="clients" />
          <InnerText menus={menus} item="clients" />
          <BrandSlider kind="client" brands={brands} />
        </section>

        <Element name={menus.find(menu => menu.Ref === 'partners') && menus.find(menu => menu.Ref === 'partners').Ref} />
        <section className="my-16">
          <SectionHeader menus={menus} item="partners" />
          <InnerText menus={menus} item="partners" />
          <BrandSlider kind="partner" brands={brands} />
        </section>

        <Element name="contacts" />
        <section className="my-16">
          <SectionHeader menus={menus} item="contacts" />
          <PlaceMap code={homepage.MapCode} />
          <InnerText menus={menus} item="contacts" />
        </section>

      </main>

      <footer>
        <div className="mt-16 mb-6 text-xs text-center text-bluegray-400">© {(new Date().getFullYear())} Нева-Автоматизация</div>
        <BottomMenu menus={menus} />
        <BottomContacts phones={phones} />
      </footer>

    </PageWrapper>
  )
}
export default Home

export async function getStaticProps() {
  const brands_res = await fetch(`${API_URL}/brands`)
  const brands = await brands_res.json()
  const cards_res = await fetch(`${API_URL}/cards`)
  const cards = await cards_res.json()
  const menus_res = await fetch(`${API_URL}/menus`)
  const menus = await menus_res.json()
  const phones_res = await fetch(`${API_URL}/phones`)
  const phones = await phones_res.json()
  const homepage_res = await fetch(`${API_URL}/home-page`)
  const homepage = await homepage_res.json()
  return {
    props: {
      brands,
      cards,
      menus,
      phones,
      homepage
    }
  }
}