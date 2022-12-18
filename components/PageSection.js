import InnerText from '@/components/InnerText'
import SectionHeader from '@/components/SectionHeader'
import CompSet from '@/components/CompSet'

const Scroll  = require('react-scroll')
const Element = Scroll.Element

const PageSection = ({ name, menus, breadcrumbs, models, settings, imgURL }) => {
  const Components = name?.children
  const title = name?.data?.name
  const cls = name?.data?.className
  const header = name?.data?.header
  const text = name?.data?.text
  
  // console.log('PageSection Name:', name, cls)
  return (
    <>
      <Element name={title} />
      <section className={cls}>
        {
          header && <SectionHeader header={header} />
        }
        {
          text && <InnerText text={text} item={title} />
        }
        {
          Components?.map((name, no) => <CompSet 
            name={name}
            models={models}
            breadcrumbs={breadcrumbs}
            menus={menus}
            settings={settings}
            imgURL={imgURL}
            key={name?.component + '__' + no}
          />)
        }
      </section>
    </>
  )
}

export default PageSection