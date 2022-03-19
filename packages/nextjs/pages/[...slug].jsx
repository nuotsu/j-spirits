import client from 'utils/sanity'
import groq from 'utils/groq'
import Page from 'lib/Page'

const Pages = ({ page }) => <Page {...page} />

export default Pages

export async function getStaticPaths({ locales }) {
	const paths = await client.fetch(`
		*[_type == 'page' && slug.current != '/'].slug.current
	`)

	return {
		paths: paths
			.map(slug => ({ params: { slug: slug.split('/') } }))
			.flatMap(page => locales.map(locale => ({ ...page, locale }))),
		fallback: false,
	}
}

export async function getStaticProps({ params, locale }) {
	const { slug } = params

	const { page, ...global } = await client.fetch(`
		{
			'page': *[_type == 'page' && slug.current == '${ slug.join('/') }'][0]{
				...,
				blocks[]{
					...,
					link{ ${groq.internalUrl} },
					cta{ ${groq.cta} }
				}
			},
			${groq.global}
		}
	`)

	return {
		props: {
			locale,
			page,
			global
		}
	}
}
