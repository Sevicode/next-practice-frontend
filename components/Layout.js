import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        {children}
    </div>
  )
}

Layout.defaultProps = {
    title: 'Art Fun',
    description: 'Find Art exhibition events',
    keywords: 'art galleries, art event, painting exhibition'
}
