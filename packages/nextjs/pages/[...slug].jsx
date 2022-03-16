import client from 'utils/sanity'
import groq from 'utils/groq'
import Page from 'lib/Page'

export default ({ page }) => <Page {...page} />

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
			'page': *[_type == 'page' && slug.current == '${ slug }'][0]{
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
