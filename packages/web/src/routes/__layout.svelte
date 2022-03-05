<Header/>

<main class="flex-grow">
	<slot></slot>
</main>

<Footer/>

<style>
	:global(#app) {
		@apply flex flex-col min-h-screen;
	}
</style>

<script>
	import Header from '~/lib/header/Header.svelte'
	import Footer from '~/lib/Footer.svelte'
	import '../app.css'
</script>

<script context="module">
	import client from '~/utils/sanity'

	export async function load() {
		const header = await client.fetch(`
			*[_type == 'header'][0]{
				menu[]{
					...,
					link->{
						...,
						'url': '/' + slug.current
					}
				}
			}
		`)

		const footer = await client.fetch(`
			*[_type == 'footer'][0]{
				menu[]{
					...,
					link->{
						...,
						'url': '/' + slug.current
					}
				}
			}
		`)

		const roster = await client.fetch(`*[_type == 'player'] | order(jersey asc)`)

		const teams = await client.fetch(`*[_type == 'team'] | order(name.full asc)`)

		return {
			stuff: {
				header,
				footer,
				roster,
				teams,
			}
		}
	}
</script>
