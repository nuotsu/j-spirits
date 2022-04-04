import client from 'utils/sanity'
import groq from 'utils/groq'
import Page from 'lib/Page'

const HomePg = ({ page }) => <Page {...page} />

export default HomePg

export async function getStaticProps({ locale }) {
	const { page, ...global } = await client.fetch(`
		{
			'page': *[_type == 'page' && slug.current == '/'][0]{
				...,
				blocks[]{
					...,
					link{ ${groq.internalLink} },
					imageLink->{
						'internalUrl': select(slug.current == '/'  => '/', '/' + slug.current)
					}
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
