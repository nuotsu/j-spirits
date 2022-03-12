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
	import { default_locale } from '~/utils/locales'

	export const prerender = true

	export async function load() {
		const page = await client.fetch(`*[_type == 'page' && slug.current == '/'][0]`)

		console.debug({ lang: default_locale.value })

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
			status: 404,
		}
	}
</script>
