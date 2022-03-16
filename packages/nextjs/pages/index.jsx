import client from 'utils/sanity'
import groq from 'utils/groq'

export default ({ page }) => (
	<pre>{JSON.stringify(page, null, 2)}</pre>
)

export async function getStaticProps({ locale }) {
	const { page, ...global } = await client.fetch(`
		{
			'page': *[_type == 'page' && slug.current == '/'][0]{
				...,
				blocks[]{
					...,
					link{ ${groq.internalUrl} }
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
