import Head from 'next/head'
import { NextSeo } from 'next-seo'


const PageWrapper = props => {
  return(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:url" content="https://nevaat.ru" />
        <meta property="og:title" content="Современные решения в сфере информационной безопасности" />
        <meta property="og:description" content="Нева-Автоматизация" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nevaat.ru/images/logo-white.png"/>
        <meta property="fb:app_id" content="257953674358265" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="yandex-verification" content="42df6c347defa0d4" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/favicon_black_sq.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon_black_sq.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon_black_sq.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon_black_sq.png" />
        <link rel="apple-touch-startup-image" href="/favicon_black_sq.png" />
      </Head>
      <NextSeo
        canonical={props.canon || '/'}
        title={props.pgTitle || 'Современные решения в сфере информационной безопасности'}
        description={props.pgDescription || 'Нева-Автоматизация'}
        additionalMetaTags={props.more}
      />
      <div className="">{props.children}</div>
      {process.env.NODE_ENV === 'production' ?
        <>
          {/* <script src="js/metrika.js" async crossorigin="anonymous"></script>
          <noscript><div><img src="https://mc.yandex.ru/watch/70015987" style={{position:'absolute',left:'-9999px'}} alt="" /></div></noscript>
           */}
        </> : null
      }
    </>
  )
}

export default PageWrapper;