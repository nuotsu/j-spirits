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
	import { locales } from '~/utils/locales'

	export const prerender = true

	export async function load({ params }) {
		const { lang } = params
		const page = await client.fetch(`
			*[_type == 'page' && slug.current == '/'][0]{
				...,
				blocks[]{
					...,
					link{
						label,
						'internalUrl': '/' + link->slug.current,
						'page': link->{title}
					}
				}
			}
		`)

		const accepted_lang = locales.map(l => l.value).includes(lang)

		if (!!accepted_lang && !!page) {
			return {
				props: {
					page,
				},
				stuff: {
					lang,
				}
			}
		}

		return {
			status: 404,
		}
	}
</script>
