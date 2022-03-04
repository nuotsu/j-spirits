<Header/>

<main>
	<slot></slot>
</main>

<Footer/>

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

		return {
			stuff: {
				header,
				footer,
			}
		}
	}
</script>
