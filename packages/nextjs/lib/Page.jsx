import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import t from 'utils/locales'
import Head from 'next/head'
import Block from './block/Block'
import { urlFor } from 'utils/sanity'

const Page = ({ seo, blocks }) => {
	const { site, locale } = useContext(GlobalContext)

	const meta_title = [t(seo.title), t(site.title.full)].join(' | ')

	return <>
		<Head>
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

			<title>{meta_title}</title>
			<meta name="description" content={t(seo.description)} />

			<meta property="og:type" content="website" />
			<meta property="og:locale" content={locale} />
			<meta property="og:title" content={meta_title} />
			<meta property="og:description" content={t(seo.description)} />
			<meta property="og:image" content={urlFor(site.seoImage).url()} />
		</Head>

		{blocks?.map((block, key) => (
			<Block {...block} key={key} />
		))}
	</>
}

export default Page
