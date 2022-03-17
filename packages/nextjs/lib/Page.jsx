import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import t from 'utils/locale'
import Head from 'next/head'
import Block from './block/Block'

const Page = ({ title, slug, seo, blocks }) => {
	const { site } = useContext(GlobalContext)

	return <>
		<Head>
			<title>{t(seo.title)} | {t(site.title.full)}</title>
			<meta name="description" content={seo.description} />
		</Head>

		{blocks?.map((block, key) => (
			<Block {...block} key={key} />
		))}
	</>
}

export default Page
