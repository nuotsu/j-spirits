<SEO {...page.seo}/>

{#each (page.blocks || []) as block}
	<Block {...block} />
{/each}

<script>
	import SEO from '~/lib/SEO.svelte'
	import Block from '~/lib/blocks/Block.svelte'

	export let page
</script>

<script context="module">
	import client from '~/utils/sanity'
	import groq from '~/utils/groq'
	import { default_locale } from '~/utils/locales'

	export async function load({ params }) {
		let { lang } = params

		const page = await client.fetch(`
			*[_type == 'page' && slug.current == '/'][0]{
				...,
				blocks[]{
					...,
					link{ ${groq.internalLink} }
				}
			}
		`)

		console.log({lang, page})

		if (!!page) {
			return {
				props: {
					page,
				},
				stuff: {
					lang: default_locale.value,
				}
			}
		}

		return {
			status: `/${ default_locale.value }`,
		}
	}
</script>
