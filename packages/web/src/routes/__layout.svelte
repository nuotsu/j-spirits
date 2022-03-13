<svelte:head>
	<html {lang} />

	{#if $page.url.pathname === '/'}
		<link rel="canonical" href="https://jspirits.netlify.app/{default_locale.value}"/>
	{:else}
		<link rel="alternate" {href} hreflang={lang}/>
	{/if}
</svelte:head>

<Header/>

<main class="flex-grow pb-8">
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
	import { page } from '$app/stores'
	import '../app.css'

	let lang = $page.params.lang || default_locale.value
	let href = `https://jspirits.netlify.app${ $page.url.pathname }`
</script>

<script context="module">
	import client from '~/utils/sanity'
	import { default_locale } from '~/utils/locales'

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

		const games = await client.fetch(`
			*[_type == 'game' && status == 'completed']|order(date desc){
				...,
				opponent->{name}
			}
		`)

		const upcomingGames = await client.fetch(`
			*[_type == 'game' && status == 'upcoming']|order(date asc){
				...,
				opponent->{name}
			}
		`)

		return {
			stuff: {
				site: await client.fetch(`*[_type == 'site'][0]`),
				header,
				footer,
				news: await client.fetch(`*[_type == 'news'] | order(date desc)`),
				games,
				upcomingGames,
				roster: await client.fetch(`*[_type == 'player'] | order(jersey asc)`),
				teams: await client.fetch(`*[_type == 'team'] | order(name.full asc)`),
			}
		}
	}
</script>
