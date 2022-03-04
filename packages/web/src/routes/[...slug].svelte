<SEO {...page.seo}/>

{#each (page.blocks || []) as block}
	<Block {...block} />
{/each}

<script>
	import SEO from '$lib/SEO.svelte'
	import Block from '$lib/Block.svelte'

	export let page
</script>

<script context="module">
	import client from '$utils/sanity'

	export async function load({ params, url }) {
		const page = await client.fetch(`*[_type == 'page' && slug.current == '${ params.slug || url.pathname }'][0]`)

		if (!!page) {
			return {
				props: {
					page,
				}
			}
		}

		return {
			status: 404,
		}
	}
</script>
