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
		const result = await client.fetch(`
			{
				'site': *[_type == 'site'][0],
				'header': *[_type == 'header'][0]{
					menu[]{
						...,
						link->{
							...,
							'url': '/' + slug.current
						}
					}
				},
				'footer': *[_type == 'footer'][0]{
					menu[]{
						...,
						link->{
							...,
							'url': '/' + slug.current
						}
					}
				},
				'news': *[_type == 'news']|order(date desc),
				'games': *[_type == 'game' && status == 'completed']|order(date desc){
					...,
					opponent->{name}
				},
				'upcomingGames': *[_type == 'game' && status == 'upcoming']|order(date asc){
					...,
					opponent->{name}
				},
				'roster': *[_type == 'player']|order(jersey asc),
				'teams': *[_type == 'team']|order(name.full asc),
			}
		`)

		return {
			stuff: result,
		}
	}
</script>
