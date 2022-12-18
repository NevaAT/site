import Topic from '@/components/Topic'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import HomeFS from '@/components/HomeFS'
import PageSection from '@/components/PageSection'
import TextChapter from '@/components/TextChapter'
import CardsGrid from '@/components/CardsGrid'
import BrandSlider from '@/components/BrandSlider'
import PlaceMap from '@/components/PlaceMap'

const CompSet = ({ name, models, menus, breadcrumbs, settings, imgURL }) => {

  const phones = models?.find(model => model?.name === 'phones')?.model ?? []
  const cards = models?.find(model => model?.name === 'cards')?.model ?? []
  const brands = models?.find(model => model?.name === 'brands')?.model ?? []
  let menusLinks = menus?.find(menu => menu?.name === 'mainMenu')?.links
  // console.log('name -->', name)
  // console.log(phones)
  return {

    "Topic": <Topic menus={menusLinks} phones={phones} settings={settings} imgURL={imgURL} />,
    "Main": <Main 
      name={name}
      models={models}
      breadcrumbs={breadcrumbs}
      menus={menus}
      settings={settings}
      imgURL={imgURL}
    />,
    "PageSection": <PageSection 
      name={name}
      models={models}
      menus={menus}
      breadcrumbs={breadcrumbs}
      settings={settings}
      imgURL={imgURL}
    />,
    "HomeFS": <HomeFS data={name?.data} imgURL={imgURL} />,
    "markdown": <TextChapter text={name?.data?.markdown} />,
    "CardsGrid": <CardsGrid cards={cards} imgURL={imgURL} />,
    "BrandSlider": <BrandSlider brands={brands} kind={name?.data?.kind} imgURL={imgURL} />,
    "PlaceMap": <PlaceMap code={name?.data?.code} />,
    "Footer": <Footer
      settings={settings}
      menus={menusLinks}
      phones={phones}
      imgURL={imgURL}
    />

  }[name?.component]
}

export default CompSet