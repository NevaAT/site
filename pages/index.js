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

const Home = props => {
  return(
    <PageWrapper>
      <header className="max-w-4xl mx-auto">
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
            <a href="tel:+78122411480">(812) 241-14-80</a>
            <a href="tel:+79500118888">(950) 011-88-88</a>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto text-bluegray-400">
        <h1 className="h1">СОВРЕМЕННЫЕ РЕШЕНИЯ В СФЕРЕ ИНФОМАЦИОННОЙ БЕЗОПАСНОСТИ!</h1>
        <div className="my-4 overflow-hidden rounded-xl">
          <Image src={nеvaArena} alt="Нева Арена" />
        </div>
        <Element name="about">
          <section className="text-double-block">
            <div>
              <p>
                ООО «Нева-Автоматизация» – системный интегратор нового поколения. В своей ежедневной работе мы реализуем нашу главную миссию:
              </p>
              <p>
                Оперативное и эффективное решение проблем и задач информационной безопасности.
              </p>
              <p>
                Мы исключаем формальный подход и находимся постоянно онлайн на всех каналах связи.
              </p>
            </div>
            <div>
              <p>Несмотря на то, что мы относительно молодая компания, в вопросах ИБ нам доверяют крупные региональные коммерческие банки, транспортные, финансовые, медицинские, страховые, научно-образовательные компании и производственные предприятия.</p>
              <p>Мы дорожим доверием наших клиентов и искренне надеемся увидеть вас в их числе!</p>
            </div>
          </section>
        </Element>
        <Element name="services">
          <section>
            <h2 className="section-header">Наши услуги</h2>
            <div className="grid grid-cols-2 gap-0 px-10 sm:grid-cols-3 sm:gap-2 md:gap-6">
              <CardsGrid />
            </div>
          </section>
        </Element>
        <Element name="clients">
          <section className="my-16">
            <h2 className="section-header">Наши клиенты</h2>
            <p className="px-2 mb-12 text-center text-bluegray-300">
              Нам доверяют многие компании, потому что мы предоставляем качественные услуги и решения в сфере информационной безопасности в кратчайшие сроки и с гарантией качества.
            </p>
            <BrandSlider kind="client" />
          </section>
        </Element>
        <Element name="partners">
          <section className="my-16">
            <h2 className="section-header">Наши партнёры</h2>
            <p className="px-2 mb-12 text-center text-bluegray-300">
              Наши главные партнёры – это компании-производители софта и оборудования для защиты данных, мировые лидеры с сфере кибербезопасности. Благодаря плодотворной совместной работе с партнёрами, мы имеем возможность предлагать нашим клиентам самые передовые решения по конкурентным ценам.
            </p>
            <BrandSlider kind="partner" />
          </section>
        </Element>
        <Element name="contacts">
          <section className="my-16">
            <h2 className="section-header">Где мы находимся</h2>
            <PlaceMap code="3A8fa550cce972c5724ecc037d4f6df126cf85e8df87ca2d2aea68cdde9a82f5ab" />
            <p className="px-2 my-4 text-center text-bluegray-300">190020, Санкт-Петербург, ул. Бумажная 16, корп.3, лит. В, оф. 419</p>
          </section>
        </Element>
      </main>
      <footer>
        <div className="mt-16 mb-6 text-xs text-center text-bluegray-400">© {(new Date().getFullYear())} Нева-Автоматизация</div>
        <BottomMenu />
        <BottomContacts />
      </footer>
    </PageWrapper>
  )
}
export default Home