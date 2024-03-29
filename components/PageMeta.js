import Head from 'next/head'
import { NextSeo } from 'next-seo'

const PageMeta = props => {
  
  return(<>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta property="og:url" content="https://nevaat.ru" />
      <meta property="og:title" content="Современные решения в сфере информационной безопасности" />
      <meta property="og:description" content="Нева-Автоматизация" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://nevaat.ru/favicon_black_sq.png"/>
      <meta property="fb:app_id" content="257953674358265" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="yandex-verification" content="42df6c347defa0d4" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/favicon_black_sq.png" />
      <link rel="shortcut" href="/favicon.svg" type=" image/svg+xml" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon_black_sq.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon_black_sq.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon_black_sq.png" />
      <link rel="apple-touch-startup-image" href="/favicon_black_sq.png" />
    </Head>

    <NextSeo
      canonical={props.canon || '/'}
      title={props.title || 'Современные решения в сфере информационной безопасности'}
      description={props.desc || 'Нева-Автоматизация'}
      additionalMetaTags={props.more}
    />
  </>
  )
}

export default PageMeta