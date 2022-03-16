import client from '../utils/sanity'
import groq from '../utils/groq'

export default ({ page, locale }) => <>
	<mark>{locale}</mark>

	<pre>{JSON.stringify(page, null, 2)}</pre>
</>

export async function getStaticProps({ locale }) {
	const page = await client.fetch(`
		*[_type == 'page' && slug.current == '/'][0]{
			...,
			blocks[]{
				...,
				link{ ${groq.internalUrl} }
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
