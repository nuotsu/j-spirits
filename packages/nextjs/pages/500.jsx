import client from 'utils/sanity'
import groq from 'utils/groq'
import Page from 'lib/Page'

const Pg500 = ({ page }) => <Page {...page} />

export default Pg500

export async function getStaticProps({ locale }) {
	const { page, ...global } = await client.fetch(`
		{
			'page': *[_type == 'page' && slug.current == '404'][0]{
				...,
				blocks[]{
					...,
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
