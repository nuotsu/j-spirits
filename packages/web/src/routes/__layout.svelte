<div class="flex flex-col min-h-screen">
	<Header/>

	<main class="flex-grow">
		<slot></slot>
	</main>

	<Footer/>
</div>

<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../app.css'
</script>

<script context="module">
	import client from '$utils/sanity'

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

		return {
			stuff: {
				header,
				footer,
				roster,
			}
		}
	}
</script>
