import PageMeta from "@/components/PageMeta"
import CompSet from '@/components/CompSet'

const api = `${process.env.SITE_URL}/api/`

const justGetIt = {
  method: "GET",
  headers: {
    "api-key": process.env.API_KEY
  }
}

const preserved_styles = ["text-double-block", "my-16", "mt-12"]

const ChapterPage = props => {

  const { page, menus, models, settings, breadcrumbs, imgURL } = props
  
  // console.log('models:', models)
  return (
  <>
    <PageMeta
      title={page?.seo?.title ?? settings?.seo?.title}
      desc={page?.seo?.description ?? settings?.seo?.description}
    />
    {
      (page?.data?.layout ?? page?.data?.layoutList?.before)?.map(name => <CompSet 
        name={name}
        models={models}
        breadcrumbs={breadcrumbs}
        menus={menus}
        settings={settings}
        imgURL={imgURL}
        key={name?.component} 
      />)
    }
  </>
  )
}

export default ChapterPage

export async function getStaticPaths() {
// console.log('==>', `${api}pages/routes`);
  const res = await fetch(`${api}pages/routes`, justGetIt)
  // console.log('-->', res);
  const routes = await res?.json()
  const slugs = routes?.default?.map(page => {
    const arr = page?.route?.split('/')
    arr?.splice(0, 2)

    return {
      params: {
        slug: [...arr]
      }
    }
  })
  
  return {
    paths: [...slugs],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {

  const { params } = context
  const slug = params?.slug
  const url_params = slug === undefined ? '/home' : ['/home', ...slug].join('/')
  const url = `${api}pages/page?route=${url_params}`

  const res = await fetch(url, justGetIt)
  const page = await res?.json()

  if (res.status === 404) {
    return {
      notFound: true,
    }
  }

  // получаем хлебные крошки
  const crumbs = page?._r?.split('/')
  crumbs?.splice(0, 2)
  const crumbs_path = crumbs.join('/')

  // получим родительские страницы
  const parents = page?._parents?.map(p => p?.title)
  parents?.shift()
  parents?.push(page?.title)

  const breadcrumbs = {
    path: crumbs_path,
    titles: parents
  }
  
  // Получим список используемых моделей для данной страницы
  const layouts = page?.data?.layout ?? page?.data?.layoutList?.before

  const models = []
  if (layouts) {
    const pageModels = layouts && layouts?.find(obj => obj?.component === 'modelsSet')?.data?.models
    // и получим данные этих моделей
    // console.log('pageModels:', pageModels)
    const getModel = async (name, isItems) => {
      const res_model = await fetch(`${api}content/item${isItems ? "s": ""}/${name}`, justGetIt)
      const model = await res_model?.json() ?? {}
      models.push({ name, model })
    }
  
    // Получаем данные с моделей
    if (pageModels?.indexOf('phones') > -1) await getModel('phones', true)
    if (pageModels?.indexOf('cards') > -1) await getModel('cards', true)
    if (pageModels?.indexOf('brands') > -1) await getModel('brands', true)
  }

  const res_menus = await fetch(`${api}pages/menus`, justGetIt)
  const menus = await res_menus?.json() ?? []
  // console.log('menus:', menus)

  const res_settings = await fetch(`${api}pages/settings`, justGetIt)
  const settings = await res_settings?.json() ?? []
  const imgURL = `${process.env.SITE_URL}/storage/uploads`
  // console.log('settings:', settings)
  
  return {
    props: { 
      page, menus, models, settings, breadcrumbs, imgURL
    }, revalidate: 10
  }
}