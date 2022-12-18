import CompSet from '@/components/CompSet'

const Main = ({ name, models, breadcrumbs, menus, settings, imgURL }) => {
  const Components = name?.children
  // console.log('Inside Main =-->', name?.children)
  return (<main className="w-full max-w-4xl mx-auto text-bluegray-400">
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
  </main>)
}

export default Main