import client from '../utils/sanity'
import groq from '../utils/groq'

const Page = ({ page, locale }) => <>
	<mark>{locale}</mark>

	<pre>{JSON.stringify(page, null, 2)}</pre>
</>

export default Page

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

	const page = await client.fetch(`
		*[_type == 'page' && slug.current == '${ slug }'][0]{
			...,
			blocks[]{
				...,
				link{ ${groq.internalUrl} },
				cta{ ${groq.cta} }
			}
		}
	`)

	return {
		props: {
			page,
			locale,
		}
	}
}
